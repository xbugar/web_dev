import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {
    notebookAddTagRequestSchema,
    notebookCreateNoteRequestSchema, notebookCreateRequestSchema, notebookDeleteTagRequestSchema,
    notebookGetRequestSchema,
    notebookOnlyIdRequestSchema,
    notebookUpdateRequestSchema
} from "./validationSchemas";
import {notebookRepository} from "./repository";
import {noteRepository} from "../note/repository";
import {tagRepository} from "../tag/repository";
import {AuthError} from "../types";
import {ownership} from "../ownership";
import {use} from "passport";


const addTag = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookAddTagRequestSchema, req, res);
     if (!request
        || !await ownership.notebook(request.params.notebookId, req.session.passport?.user.id, res)
        || !await ownership.tag(request.params.tagId, req.session.passport?.user.id, res)) {
        return;
    }
    let tag = await tagRepository.getOrCreate(request.body);
    if (tag.isErr) {
        handleRepositoryErrors(tag.error, res);
        return;
    }

    let result = await notebookRepository.modifyTag(request.params.notebookId, {connect: {id: tag.value.id}});
    if (result.isErr) {
        handleRepositoryErrors(result.error, res);
        return;
    }
    res.status(200).send(tag.unwrap());
};

const removeTag = async (req: Request, res: Response) => {
    let request = await parseRequest(notebookDeleteTagRequestSchema, req, res);
    if (!request
        || !await ownership.notebook(request.params.notebookId, req.session.passport?.user.id, res)
        || !await ownership.tag(request.params.tagId, req.session.passport?.user.id, res)) {
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
    if (!request
        || !await ownership.notebook(request.params.notebookId, req.session.passport?.user.id, res)) {
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
    const userId = req.session.passport?.user.id;
    let request = await parseRequest(notebookOnlyIdRequestSchema, req, res);
    if (!request
        || !await ownership.notebook(request.params.notebookId, userId, res)) {
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
    const userId = req.session.passport?.user.id;
    let request = await parseRequest(notebookGetRequestSchema, req, res);
    if (!request
        || !await ownership.notebook(request.params.notebookId, userId, res)) {
        return;
    }

    let notebook = await notebookRepository.get(request.params.notebookId, request.query.withTags);
    if (notebook.isErr) {
        handleRepositoryErrors(notebook.error, res);
        return;
    }
    res.status(200).send(notebook.unwrap());
}

const createNote = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    let request = await parseRequest(notebookCreateNoteRequestSchema, req, res);
    if (!request
        || !await ownership.notebook(request.params.notebookId, userId, res)) {
        return;
    }

    let note = await noteRepository.create(request);
    if (note.isErr) {
        handleRepositoryErrors(note.error, res);
        return;
    }
    res.status(200).send(note.unwrap());
}

const getAllNotes = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    let request = await parseRequest(notebookOnlyIdRequestSchema, req, res);
    if (!request
        || !await ownership.notebook(request.params.notebookId, userId, res)) {
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
    const userId = req.session.passport?.user.id;
    let request = await parseRequest(notebookCreateRequestSchema, req, res);
    if (!request || !userId) {
        return;
    }

    let notebook = await notebookRepository.create(request, userId);
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