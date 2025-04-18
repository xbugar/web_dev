import { Request, Response } from "express";
import { handleRepositoryErrors, parseRequest } from "../utils";
import { tagRepository } from "./repository";

import {
    getTagsRequestSchema,
    createTagRequestSchema,
    updateTagRequestSchema,
    deleteTagRequestSchema
} from "./validationSchema";


const createTag = async (req: Request, res: Response) => {
    const request = await parseRequest(createTagRequestSchema, req, res);
    if (request === null) return;

    const tag = request.body;

    const newTag = await tagRepository.create(tag);
    if (newTag.isErr) {
        handleRepositoryErrors(newTag.error, res);
        return;
    }

    res.status(200).send(newTag.value);
};

const getUserTags = async (req: Request, res: Response) => {
    const request = await parseRequest(getTagsRequestSchema, req, res);
    if (request === null) return;

    const tags = await tagRepository.get(request.params.userId);
    if (tags.isErr) {
        handleRepositoryErrors(tags.error, res);
        return;
    }

    res.status(200).send(tags.value);
};

const updateTag = async (req: Request, res: Response) => {
    const request = await parseRequest(updateTagRequestSchema, req, res);
    if (request === null) return;

    const tag = await tagRepository.update(request.body);
    if (tag.isErr) {
        handleRepositoryErrors(tag.error, res);
        return;
    }
    res.status(200).send(tag.value);
}

const deleteTag = async (req: Request, res: Response) => {
    const request = await parseRequest(deleteTagRequestSchema, req, res);
    if (request === null) return;

    const out = await tagRepository.delete(request.params.id);
    if (out.isErr) {
        handleRepositoryErrors(out.error, res);
    }

    res.status(200).send();
}

export const tagsController = {
    createTag,
    updateTag,
    deleteTag,
    getUserTags
}

