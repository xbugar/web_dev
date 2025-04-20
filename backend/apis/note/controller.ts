import { Request, Response } from "express";
import { handleRepositoryErrors, parseRequest } from "../utils";
import { noteRepository } from "./repository";

import {
    getNoteMetaRequestSchema,
    updateNoteMetaRequestSchema,
    getNoteContentRequestSchema,
    updateNoteContentRequestSchema,
    addNoteTagRequestSchema,
    removeNoteTagRequestSchema, deleteNoteRequestSchema,
} from "./validationSchema";


const updateNoteMeta = async (req: Request, res: Response) => {
    const request = await parseRequest(updateNoteMetaRequestSchema, req, res);
    if (request === null) return;

    const newTag = await noteRepository.updateMeta(request);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const getNoteMeta = async (req: Request, res: Response) => {
    const request = await parseRequest(getNoteMetaRequestSchema, req, res);
    if (request === null) return;

    const newTag = await noteRepository.getMeta(request);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const deleteNote = async (req: Request, res: Response) => {
    const request = await parseRequest(deleteNoteRequestSchema, req, res);
    if (request === null) return;

    const newTag = await noteRepository.delete(request.params.noteId);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
}

const getNoteContent = async (req: Request, res: Response) => {
    const request = await parseRequest(getNoteContentRequestSchema, req, res);
    if (request === null) return;

    const noteId = request.params.id;

    const newTag = await noteRepository.getContent(noteId);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};


const updateNoteContent = async (req: Request, res: Response) => {
    const request = await parseRequest(updateNoteContentRequestSchema, req, res);
    if (request === null) return;

    const newTag = await noteRepository.updateContent(request);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const addNoteTag = async (req: Request, res: Response) => {
    const request = await parseRequest(addNoteTagRequestSchema, req, res);
    if (request === null) return;

    const note = request.params;

    const newTag = await noteRepository.addTag(note);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const removeNoteTag = async (req: Request, res: Response) => {
    const request = await parseRequest(removeNoteTagRequestSchema, req, res);
    if (request === null) return;

    const note = request.params;

    const newTag = await noteRepository.addTag(note);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
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

