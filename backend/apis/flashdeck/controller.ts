import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {
  flashdeckCreateFlashcardRequestSchema,
  flashdeckGetRequestSchema,
  flashdeckUpdateRequestSchema,
  flashdeckOnlyIdRequestSchema,
  flashdeckTagOperationRequestSchema,
  flashdeckCreateRequestSchema
} from "./validationSchemas";
import { flashdeckRepository } from "./repository";
import { ownership } from "../ownership";
import { noteRepository } from "../note/repository";
import { flashCardRepository } from "../flashcard/repository";


const addTag = async (req: Request, res: Response) => {
  const request = await parseRequest(flashdeckTagOperationRequestSchema, req, res);
  if (!request
    || !await ownership.flashdeck(request.params.flashdeckId, req.session.passport?.user.id, res)
    || !await ownership.tag(request.params.tagId, req.session.passport?.user.id, res)) {
    return;
  }

  const operation = await flashdeckRepository.modifyTag(request.params.flashdeckId, {connect: {id: request.params.tagId}});
  if (operation.isErr) {
    handleRepositoryErrors(operation.error, res);
    return;
  }
  res.status(200).send();
}

const removeTag = async (req: Request, res: Response) => {
  const request = await parseRequest(flashdeckTagOperationRequestSchema, req, res);
  if (!request
    || !await ownership.flashdeck(request.params.flashdeckId, req.session.passport?.user.id, res)
    || !await ownership.tag(request.params.tagId, req.session.passport?.user.id, res)) {
    return;
  }

  const operation = await flashdeckRepository.modifyTag(request.params.flashdeckId, {disconnect: {id: request.params.tagId}});
  if (operation.isErr) {
    handleRepositoryErrors(operation.error, res);
    return;
  }
  res.status(200).send();
}


const put = async (req: Request, res: Response) => {
  const request = await parseRequest(flashdeckUpdateRequestSchema, req, res);
  if (!request
    || !await ownership.flashdeck(request.params.flashdeckId, req.session.passport?.user.id, res)) {
    return;
  }

  const flashdeck = await flashdeckRepository.update(request);
  if (flashdeck.isErr) {
    handleRepositoryErrors(flashdeck.error, res);
    return;
  }
  res.status(200).send(flashdeck.unwrap());
}

const remove = async (req: Request, res: Response) => {
  const userId = req.session.passport?.user.id;
  const request = await parseRequest(flashdeckOnlyIdRequestSchema, req, res);
  if (!request
    || !await ownership.flashdeck(request.params.flashdeckId, userId, res)) {
    return;
  }

  const flashdeck = await flashdeckRepository.delete(request.params.flashdeckId);
  if (flashdeck.isErr) {
    handleRepositoryErrors(flashdeck.error, res);
    return;
  }
  res.status(200).send();
}

const get = async (req: Request, res: Response) => {
  const userId = req.session.passport?.user.id;
  const request = await parseRequest(flashdeckGetRequestSchema, req, res);
  if (!request
    || !await ownership.flashdeck(request.params.flashdeckId, userId, res)) {
    return;
  }

  const flashdeck = await flashdeckRepository.get(request.params.flashdeckId, request.query.withTags);
  if (flashdeck.isErr) {
    handleRepositoryErrors(flashdeck.error, res);
    return;
  }
  res.status(200).send(flashdeck.unwrap());
}

const createFlashcard = async (req: Request, res: Response) => {
  const userId = req.session.passport?.user.id;
  const request = await parseRequest(flashdeckCreateFlashcardRequestSchema, req, res);
  if (!request
    || !await ownership.flashdeck(request.params.flashdeckId, userId, res)) {
    return;
  }

  //TODO
  const flashcard = await flashCardRepository.create(request);
  if (flashcard.isErr) {
    handleRepositoryErrors(flashcard.error, res);
    return;
  }
  res.status(200).send(flashcard.unwrap());
}

const getAllFlashcards = async (req: Request, res: Response) => {
  const userId = req.session.passport?.user.id;
  const request = await parseRequest(flashdeckOnlyIdRequestSchema, req, res);
  if (!request
    || !await ownership.flashdeck(request.params.flashdeckId, userId, res)) {
    return;
  }

  const flashcards = await flashCardRepository.getAllByFlashdeckId(request.params.flashdeckId);
  if (flashcards.isErr) {
    handleRepositoryErrors(flashcards.error, res);
    return;
  }
  res.status(200).send(flashcards.unwrap());
}

const post = async (req: Request, res: Response) => {
  const userId = req.session.passport?.user.id;
  const request = await parseRequest(flashdeckCreateRequestSchema, req, res);
  if (!request || !userId) {
    return;
  }

  const flashdeck = await flashdeckRepository.create(request, userId);
  if (flashdeck.isErr) {
    handleRepositoryErrors(flashdeck.error, res);
    return;
  }
  res.status(200).send(flashdeck.unwrap());

}

export const flashdeckController = {
  addTag,
  removeTag,
  put,
  remove,
  get,
  createFlashcard,
  getAllFlashcards,
  post
};