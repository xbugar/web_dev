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


const get = async (req: Request, res: Response): Promise<void> => {
    if (!req.params.userId) {
        res.status(400).send("No user Id provided");
        return;
    }
    let maybeUser = await userRepository.findById(req.params.userId);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res);
        return;
    }

    res.status(200).send(maybeUser.unwrap());
}

const post = async (req: Request, res: Response) => {
    let request = await parseRequest(userCreateRequestSchema, req, res);
    if (!request) {
        return;
    }

    let maybeUser = await userRepository.create(request);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res)
        return;
    }

    res.status(200).send(maybeUser.unwrap());
}
const put = async (req: Request, res: Response) => {
    let request = await parseRequest(userUpdateRequestSchema, req, res);
    if (!request) {
        return;
    }
    let maybeUser = await userRepository.update(request);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res);
        return;
    }
    res.status(200).send(maybeUser.unwrap());
}
const remove = async (req: Request, res: Response) => {
    if (!req.params.userId) {
        res.status(400).send("No user Id provided");
        return;
    }
    let maybeUser = await userRepository.delete(req.params.userId);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res);
        return;
    }
    res.status(200).send();
}

const getNotebooks = async (req: Request, res: Response) => {
    let request = await parseRequest(userGetNotebooksRequestSchema, req, res);
    if (!request) {
        return;
    }

    let notebooks = await notebookRepository.getAll({
        userId: request.params.userId,
        withTags: request.query.withTags
    });
    if (notebooks.isErr) {
        handleRepositoryErrors(notebooks.error, res);
        return;
    }
    res.status(200).send(notebooks.unwrap());
}

const createNotebook = async (req: Request, res: Response) => {
    let request = await parseRequest(userCreateNotebookRequestSchema, req, res);
    if (!request) {
        return;
    }
    let notebook = await notebookRepository.createFromUser(request);
    if (notebook.isErr) {
        handleRepositoryErrors(notebook.error, res);
        return;
    }
    res.status(200).send(notebook.unwrap());

}

export const userController = {
    get,
    post,
    put,
    remove,
    getNotebooks,
    createNotebook,
}