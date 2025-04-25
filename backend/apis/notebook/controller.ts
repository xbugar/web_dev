import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {
    notebookCreateNoteRequestSchema, notebookCreateRequestSchema,
    notebookGetRequestSchema,
    notebookOnlyIdRequestSchema,
    notebookTagOperationRequestSchema,
    notebookUpdateRequestSchema
} from "./validationSchemas";
import {notebookRepository} from "./repository";
import {noteRepository} from "../note/repository";


const addTag = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookTagOperationRequestSchema, req, res);
    if (!request) {
        return;
    }
    let operation = await notebookRepository.modifyTag(request.params.notebookId, {connect: {id: request.params.tagId}});
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }
    res.status(200).send();
}
const removeTag = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookTagOperationRequestSchema, req, res);
    if (!request) {
        return;
    }
    let operation = await notebookRepository.modifyTag(request.params.notebookId, {disconnect: {id: request.params.tagId}});
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }
    res.status(200).send();
}


const put = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookUpdateRequestSchema, req, res);
    if (!request) {
        return;
    }
    let notebook = await notebookRepository.update(request);
    if (notebook.isErr) {
        handleRepositoryErrors(notebook.error, res);
        return;
    }
    res.status(200).send(notebook.unwrap());
}

const remove = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookOnlyIdRequestSchema, req, res);
    if (!request) {
        return;
    }
    let notebook = await notebookRepository.delete(request.params.notebookId);
    if (notebook.isErr) {
        handleRepositoryErrors(notebook.error, res);
        return;
    }
    res.status(200).send();
}

const get = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookGetRequestSchema, req, res);
    if (!request) {
        return;
    }
    let notebook = await notebookRepository.get(request.params.notebookId, !request.query.withoutTags);
    if (notebook.isErr) {
        handleRepositoryErrors(notebook.error, res);
        return;
    }
    res.status(200).send(notebook.unwrap());
}

const createNote = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookCreateNoteRequestSchema, req, res);
    if (!request) {
        return;
    }

    let note = await noteRepository.create(req.body);
    if (note.isErr) {
        handleRepositoryErrors(note.error, res);
        return;
    }
    res.status(200).send(note.unwrap());
}

const getAllNotes = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookOnlyIdRequestSchema, req, res);
    if (!request) {
        return;
    }
    let notes = await noteRepository.getAllByNotebookId(request.params.notebookId);
    if (notes.isErr) {
        handleRepositoryErrors(notes.error, res);
        return;
    }
    res.status(200).send(notes.unwrap());

}

const post = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookCreateRequestSchema, req, res);
    if (!request) {
        return;
    }

    let notebook = await notebookRepository.create(request);
    if (notebook.isErr) {
        handleRepositoryErrors(notebook.error, res);
        return;
    }
    res.status(200).send(notebook.unwrap());

}

export const notebookController = {
    addTag,
    removeTag,
    put,
    remove,
    get,
    createNote,
    getAllNotes,
    post
};