import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {noteRepository} from "./repository";

import {
    getNoteMetaRequestSchema,
    updateNoteMetaRequestSchema,
    getNoteContentRequestSchema,
    updateNoteContentRequestSchema,
    addNoteTagRequestSchema,
    removeNoteTagRequestSchema, deleteNoteRequestSchema,
} from "./validationSchema";
import {tagRepository} from "../tag/repository";
import {ownership} from "../ownership";

//TODO: at some magical future point in time that will never happen
//You need transaction here -> if a user ceases to be an owner after the first check, you would still carry out the update.
// You can create a separate repository call that bundles these 2 into a transaction.
const updateNoteMeta = async (req: Request, res: Response) => {
    const request = await parseRequest(updateNoteMetaRequestSchema, req, res);
    if (!request
        || !await ownership.note(request.params.noteId, req.session.passport?.user.id, res)) {
        return;
    }

    const newTag = await noteRepository.updateMeta(request);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const getNoteMeta = async (req: Request, res: Response) => {
    const request = await parseRequest(getNoteMetaRequestSchema, req, res);
    if (!request
        || !await ownership.note(request.params.noteId, req.session.passport?.user.id, res)) {
        return;
    }

    const newTag = await noteRepository.getMeta(request);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const deleteNote = async (req: Request, res: Response) => {
    const request = await parseRequest(deleteNoteRequestSchema, req, res);
    if (!request
        || !await ownership.note(request.params.noteId, req.session.passport?.user.id, res)) {
        return;
    }

    const newTag = await noteRepository.delete(request.params.noteId);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
}

const getNoteContent = async (req: Request, res: Response) => {
    const request = await parseRequest(getNoteContentRequestSchema, req, res);
    if (!request
        || !await ownership.note(request.params.noteId, req.session.passport?.user.id, res)) {
        return;
    }

    const noteId = request.params.noteId;

    const content = await noteRepository.getContent(noteId);
    if (content.isErr) {
        handleRepositoryErrors(content.error, res);
        return;
    }
    res.status(200).send({content: content.unwrap()});
};


const updateNoteContent = async (req: Request, res: Response) => {
    const request = await parseRequest(updateNoteContentRequestSchema, req, res);
    if (!request
        || !await ownership.note(request.params.noteId, req.session.passport?.user.id, res)) {
        return;
    }

    const content = await noteRepository.updateContent(request);
    if (content.isErr) {
        handleRepositoryErrors(content.error, res);
        return;
    }

    res.status(200).send(content.value);
};

const addNoteTag = async (req: Request, res: Response) => {
    const request = await parseRequest(addNoteTagRequestSchema, req, res);
    if (!request
        || !await ownership.note(request.params.noteId, req.session.passport?.user.id, res)
        || !req.session.passport?.user.id ) {
        return;
    }
    // this part is
    const tag = await tagRepository.getOrCreate(request.body,req.session.passport?.user.id);
    if (tag.isErr) {
        handleRepositoryErrors(tag.error, res);
        return;
    }


    const newTag = await noteRepository.addTag({noteId: request.params.noteId, tagId: tag.value.id});
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const removeNoteTag = async (req: Request, res: Response) => {
    const request = await parseRequest(removeNoteTagRequestSchema, req, res);
    if (!request
        || !await ownership.note(request.params.noteId, req.session.passport?.user.id, res)
        || !await ownership.tag(request.params.tagId, req.session.passport?.user.id, res)) {
        return;
    }

    const queryResult = await noteRepository.removeTag(request.params);
    if (queryResult.isErr) {
        handleRepositoryErrors(queryResult.error, res);
        return;
    }

    res.status(200).send(null);
};

export const notesController = {
    getNoteMeta,
    updateNoteMeta,
    deleteNote,
    getNoteContent,
    updateNoteContent,
    addNoteTag,
    removeNoteTag,
};

