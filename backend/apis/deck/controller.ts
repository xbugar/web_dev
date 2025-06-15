import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {
    flashdeckCreateFlashcardRequestSchema,
    flashdeckGetRequestSchema,
    flashdeckUpdateRequestSchema,
    flashdeckOnlyIdRequestSchema,
    flashdeckTagOperationRequestSchema,
    flashdeckCreateRequestSchema,
    getAllDecksSchema, resetCardsRequestSchema
} from "./validationSchemas";
import {deckRepository} from "./repository";
import {ownership} from "../ownership";
import {cardRepository} from "../card/repository";


const getAll = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(getAllDecksSchema, req, res);
    if (!userId || !request) {
        return;
    }
    const decks = await deckRepository.getAll(request.query.withTags, userId)
    if (decks.isErr) {
        handleRepositoryErrors(decks.error, res);
        return;
    }
    res.status(200).send(decks.unwrap());
}


const addTag = async (req: Request, res: Response) => {
    const request = await parseRequest(flashdeckTagOperationRequestSchema, req, res);
    if (!request
        || !await ownership.deck(request.params.deckId, req.session.passport?.user.id, res)
        || !await ownership.tag(request.params.tagId, req.session.passport?.user.id, res)) {
        return;
    }

    const operation = await deckRepository.modifyTag(request.params.deckId, {connect: {id: request.params.tagId}});
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }
    res.status(200).send();
}

const removeTag = async (req: Request, res: Response) => {
    const request = await parseRequest(flashdeckTagOperationRequestSchema, req, res);
    if (!request
        || !await ownership.deck(request.params.deckId, req.session.passport?.user.id, res)
        || !await ownership.tag(request.params.tagId, req.session.passport?.user.id, res)) {
        return;
    }

    const operation = await deckRepository.modifyTag(request.params.deckId, {disconnect: {id: request.params.tagId}});
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }
    res.status(200).send();
}


const put = async (req: Request, res: Response) => {
    const request = await parseRequest(flashdeckUpdateRequestSchema, req, res);
    if (!request
        || !await ownership.deck(request.params.deckId, req.session.passport?.user.id, res)) {
        return;
    }

    const flashdeck = await deckRepository.update(request);
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
        || !await ownership.deck(request.params.deckId, userId, res)) {
        return;
    }

    const flashdeck = await deckRepository.delete(request.params.deckId);
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
        || !await ownership.deck(request.params.deckId, userId, res)) {
        return;
    }

    const flashdeck = await deckRepository.get(request.params.deckId, request.query.withTags);
    if (flashdeck.isErr) {
        handleRepositoryErrors(flashdeck.error, res);
        return;
    }
    res.status(200).send(flashdeck.unwrap());
}

const createCard = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(flashdeckCreateFlashcardRequestSchema, req, res);
    if (!request
        || !await ownership.deck(request.params.deckId, userId, res)) {
        return;
    }

    const flashcard = await cardRepository.create(request);
    if (flashcard.isErr) {
        handleRepositoryErrors(flashcard.error, res);
        return;
    }
    res.status(200).send(flashcard.unwrap());
}

const getAllCards = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(flashdeckOnlyIdRequestSchema, req, res);
    if (!request
        || !await ownership.deck(request.params.deckId, userId, res)) {
        return;
    }

    const flashcards = await cardRepository.getAllByFlashDeckId(request.params.deckId);
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

    const flashdeck = await deckRepository.create(request, userId);
    if (flashdeck.isErr) {
        handleRepositoryErrors(flashdeck.error, res);
        return;
    }
    res.status(200).send(flashdeck.unwrap());
}

const reset = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(resetCardsRequestSchema, req, res);
    if (!userId || !request) {
        return;
    }

    const operation = await cardRepository.resetCards(request.params.deckId, userId);
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }

    res.status(200).send();
}

export const deckController = {
    getAll,
    addTag,
    removeTag,
    put,
    remove,
    get,
    createCard,
    getAllCards,
    post,
    reset
};