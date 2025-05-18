import {
    eventAddTagRequestSchema,
    eventCreateSchema, eventDeleteSchema,
    eventDeleteTagRequestSchema, eventGetByDateSchema, eventGetByIdSchema,
    eventUpdateSchema
} from "./validationSchemas";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {eventRepository} from "./repository";
import {ownership} from "../ownership";
import {Request, Response} from "express";
import {tagRepository} from "../tag/repository";


const createEvent = async (req: Request, res: Response) => {
    const request = await parseRequest(eventCreateSchema, req, res);
    const userId = req.session.passport?.user.id;
    if (!request || !userId) {
        return;
    }

    const event = await eventRepository.create(userId, request);
    if (event.isErr) {
        handleRepositoryErrors(event.error, res);
        return;
    }

    res.status(200).send(event.unwrap());
}


const get = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    if (!userId) {
        return;
    }

    const event = await eventRepository.get(userId);
    if (event.isErr) {
        handleRepositoryErrors(event.error, res);
        return;
    }

    res.status(200).send(event.unwrap());
}

const getById = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(eventGetByIdSchema, req, res);
    if (!userId || !request) {
        return;
    }

    const event = await eventRepository.getById(userId, request.params.eventId);
    if (event.isErr) {
        handleRepositoryErrors(event.error, res);
        return;
    }

    res.status(200).send(event.unwrap());
}

const deleteEvent = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(eventDeleteSchema, req, res);
    if (!request || !userId
        || !await ownership.event(request.params.eventId, userId, res)) {
        return;
    }

    const resp = await eventRepository.delete(userId, request.params.eventId);
    if (resp.isErr) {
        handleRepositoryErrors(resp.error, res);
        return;
    }
    res.status(200).send();
}

const update = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(eventUpdateSchema, req, res);
    if (!request || !userId
        || !await ownership.event(request.params.eventId, userId, res)) {
        return;
    }

    const event = await eventRepository.update(userId, request);
    if (event.isErr) {
        handleRepositoryErrors(event.error, res);
        return;
    }
    res.status(200).send(event.unwrap());
}

const addTag = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(eventAddTagRequestSchema, req, res);
    if (!request || !userId
        || !await ownership.event(request.params.eventId, userId, res)) {
        return;
    }

    const tag = await tagRepository.getOrCreate(request.body, userId);
    if (tag.isErr) {
        handleRepositoryErrors(tag.error, res);
        return;
    }

    const result = await eventRepository.modifyTag(userId, request.params.eventId, {connect: {id: tag.value.id}});
    if (result.isErr) {
        handleRepositoryErrors(result.error, res);
        return;
    }
    res.status(200).send(tag.unwrap());
};

const removeTag = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(eventDeleteTagRequestSchema, req, res);
    if (!request || !userId
        || !await ownership.event(request.params.eventId, userId, res)
        || !await ownership.tag(request.params.tagId, userId, res)) {
        return;
    }

    const operation = await eventRepository.modifyTag(userId, request.params.eventId, {disconnect: {id: request.params.tagId}});
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }
    res.status(200).send();
}

const getByDate = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(eventGetByDateSchema, req, res);
    if (!userId || !request) {
        return;
    }

    const events = await eventRepository.getByDate(userId, request.body.date);
    if (events.isErr) {
        handleRepositoryErrors(events.error, res);
        return;
    }

    res.status(200).send(events.unwrap());
}


export const eventController = {
    removeTag,
    addTag,
    update,
    deleteEvent,
    get,
    createEvent,
    getByDate,
    getById
};



