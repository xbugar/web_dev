import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {userRepository} from "./repository";
import {
    userCreateNotebookRequestSchema,
    userCreateRequestSchema,
    userGetNotebooksRequestSchema,
    userUpdateRequestSchema
} from "./validationSchemas";

import {notebookRepository} from "../notebook/repository";
import {flashdeckCreateRequestSchema, getAllDecksSchema} from "../deck/validationSchemas";
import {deckRepository} from "../deck/repository";


const get = async (req: Request, res: Response): Promise<void> => {
    const userId = req.session.passport?.user.id;
    if (!userId) { return; }

    const maybeUser = await userRepository.findById(userId);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res);
        return;
    }

    res.status(200).send(maybeUser.unwrap());
}

const post = async (req: Request, res: Response) => {
    const request = await parseRequest(userCreateRequestSchema, req, res);
    if (!request) {
        return;
    }

    const maybeUser = await userRepository.create(request);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res)
        return;
    }

    res.status(200).send(maybeUser.unwrap());
}
const put = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(userUpdateRequestSchema, req, res);
    if (!request || !userId) {
        return;
    }
    const maybeUser = await userRepository.update(request, userId);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res);
        return;
    }
    res.status(200).send(maybeUser.unwrap());
}

const remove = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    if (!userId) {
        res.status(400).send("No user Id provided");
        return;
    }
    const admin = await userRepository.isAdmin(userId);
    if (admin.isErr) {
        handleRepositoryErrors(admin.error, res);
        return;
    }

    if (!admin.unwrap().isAdmin || req.session.passport?.user.id == req.params.userId){
        res.status(401).send("Unauthorized");
        return;
    }

    const maybeUser = await userRepository.delete(req.params.userId);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res);
        return;
    }
    res.status(200).send();
}

const getNotebooks = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(userGetNotebooksRequestSchema, req, res);
    if (!request || !userId) {
        return;
    }

    const notebooks = await notebookRepository.getAll(request.query.withTags, userId);
    if (notebooks.isErr) {
        handleRepositoryErrors(notebooks.error, res);
        return;
    }
    res.status(200).send(notebooks.unwrap());
}

const createNotebook = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(userCreateNotebookRequestSchema, req, res);
    if (!request || !userId) {
        return;
    }
    const notebook = await notebookRepository.createFromUser(request, userId);
    if (notebook.isErr) {
        handleRepositoryErrors(notebook.error, res);
        return;
    }
    res.status(200).send(notebook.unwrap());
}

const createDeck = async (req: Request, res: Response) => {
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

const getDecks = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(getAllDecksSchema, req, res);
    if (!userId || !request) {
        return;
    }
    const decks = await deckRepository.getAll(request.query.withTags, userId);
    if (decks.isErr) {
        handleRepositoryErrors(decks.error, res);
        return;
    }
    res.status(200).send(decks.unwrap());
}

export const userController = {
    get,
    post,
    put,
    remove,
    getNotebooks,
    createNotebook,
    getDecks,
    createDeck
}