import { Request, Response } from "express";
import { handleRepositoryErrors, parseRequest } from "../utils";
import { tagRepository } from "./repository";

import {
    getTagsRequestSchema,
    createTagRequestSchema,
    updateTagRequestSchema,
    deleteTagRequestSchema,
    getUserTagsRequestSchema,
    getTagRequestSchema
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

const getAllTags = async (req: Request, res: Response) => {
    const request = await parseRequest(getTagsRequestSchema, req, res);
    if (request === null) return;

    const tags = await tagRepository.getAll();
    if (tags.isErr) {
        handleRepositoryErrors(tags.error, res);
        return;
    }

    res.status(200).send(tags.value);
}

const getTag = async (req: Request, res: Response) => {
    const request = await parseRequest(getTagRequestSchema, req, res);
    if (request === null) return;

    const tags = await tagRepository.get(request.params.tagId);
    if (tags.isErr) {
        handleRepositoryErrors(tags.error, res);
        return;
    }

    res.status(200).send(tags.value);
}

const updateTag = async (req: Request, res: Response) => {
    const request = await parseRequest(updateTagRequestSchema, req, res);
    if (request === null) return;

    const tag = await tagRepository.update(request);
    if (tag.isErr) {
        handleRepositoryErrors(tag.error, res);
        return;
    }
    res.status(200).send(tag.value);
}

const getUserTags = async (req: Request, res: Response) => {
    const request = await parseRequest(getUserTagsRequestSchema, req, res);
    if (request === null) return;

    const tags = await tagRepository.getUserTags(request.params.userId);
    if (tags.isErr) {
        handleRepositoryErrors(tags.error, res);
        return;
    }

    res.status(200).send(tags.value);
};


const deleteTag = async (req: Request, res: Response) => {
    const request = await parseRequest(deleteTagRequestSchema, req, res);
    if (request === null) return;

    const out = await tagRepository.delete(request.params.tagId);
    if (out.isErr) {
        handleRepositoryErrors(out.error, res);
    }

    res.status(200).send();
}

export const tagsController = {
    createTag,
    getAllTags,
    getTag,
    updateTag,
    getUserTags,
    deleteTag,
}

