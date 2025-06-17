import {
    eventAddTagRequestSchema,
    eventCreateSchema, eventDeleteSchema,
    eventDeleteTagRequestSchema, eventGetByDateSchema, eventGetByIdSchema, eventGetSchema,
    eventUpdateSchema, eventGetRangeSchema
} from "./validationSchemas";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {eventRepository} from "./repository";
import {ownership} from "../ownership";
import {Request, Response} from "express";
import {tagRepository} from "../tag/repository";
import {EventResponse} from "./types";


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
    const request = await parseRequest(eventGetSchema, req, res);
    if (!userId || !request) {
        return;
    }
    let date: Date | undefined;
    if (request.query.upComing) {
        date = new Date();
    }

    const event = await eventRepository.get(userId, date);
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

    const events = await eventRepository.getByDate(userId, request.query.date);
    if (events.isErr) {
        handleRepositoryErrors(events.error, res);
        return;
    }

    res.status(200).send(events.unwrap());
}


const repeatsInRange = async (event: EventResponse, start: Date, end: Date) => {
    const events: EventResponse[] = [];
    const tmpEnd = new Date(event.timeTo.getTime());
    let step = 1000 * 60 * 60 * 24 * 365;
    if (event.repeat === "Every Day") {
        tmpEnd.setFullYear(start.getFullYear(), start.getMonth(), start.getDate());
        step = 1000 * 60 * 60 * 24; //ms to week

    } else if (event.repeat === "Every Week") {
        tmpEnd.setFullYear(start.getFullYear(), start.getMonth());
        step = 1000 * 60 * 60 * 24 * 7; //ms to week
    } else if (event.repeat === "Every 2 Weeks") {
        tmpEnd.setFullYear(start.getFullYear(), start.getMonth());
        step = 1000 * 60 * 60 * 24 * 14; //ms to day
    } else {
        tmpEnd.setFullYear(start.getFullYear(), start.getMonth());
        while ((tmpEnd.getTime() - (event.timeTo.getTime() - event.timeFrom.getTime())) < end.getTime()) {
            if (tmpEnd.getTime() < start.getTime()) {
                if (tmpEnd.getMonth() === 12) {
                    tmpEnd.setFullYear(tmpEnd.getFullYear() + 1, 1);
                } else {
                    tmpEnd.setMonth(tmpEnd.getMonth() + 1);
                }
                continue;
            }
            events.push({
                id: event.id,
                title: event.title,
                description: event.description,
                timeFrom: new Date(tmpEnd.getTime() - (event.timeTo.getTime() - event.timeFrom.getTime())),
                timeTo: new Date(tmpEnd.getTime()),
                repeat: event.repeat,
                tags:event.tags
            });
            if (tmpEnd.getMonth() === 12) {
                tmpEnd.setFullYear(tmpEnd.getFullYear() + 1, 1);
            } else {
                tmpEnd.setMonth(tmpEnd.getMonth() + 1);
            }

        }
        return events;
    }
    while ((tmpEnd.getTime() - (event.timeTo.getTime() - event.timeFrom.getTime())) < end.getTime()) {
        if (tmpEnd.getTime() < start.getTime()) {
            tmpEnd.setTime(tmpEnd.getTime() + step);
            continue;
        }
        events.push({
            id: event.id,
            title: event.title,
            description: event.description,
            timeFrom: new Date(tmpEnd.getTime() - (event.timeTo.getTime() - event.timeFrom.getTime())),
            timeTo: new Date(tmpEnd.getTime()),
            repeat: event.repeat,
            tags:event.tags
        });
        tmpEnd.setTime(tmpEnd.getTime() + step);
    }
    return events;
}


const getRange = async (req: Request, res: Response) => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(eventGetRangeSchema, req, res);
    if (!userId || !request) {
        return;
    }
    const notRepeatEvents = await eventRepository.getInRange(userId, request.query.start, request.query.end);
    if (notRepeatEvents.isErr) {
        handleRepositoryErrors(notRepeatEvents.error, res);
        return;
    }
    const events = notRepeatEvents.unwrap();

    const repeatEvents = await eventRepository.getRepeating(userId);
    if (repeatEvents.isErr) {
        handleRepositoryErrors(repeatEvents.error, res);
        return;
    }

    for (const event of repeatEvents.unwrap()) {
        (await repeatsInRange(event, request.query.start, request.query.end)).forEach(e => events.push(e));
    }
    res.status(200).send(events.sort((one, two) => one.timeFrom.getTime() - two.timeTo.getTime()));
}

export const eventController = {
    removeTag,
    addTag,
    update,
    deleteEvent,
    get,
    createEvent,
    getByDate,
    getById,
    getRange,
};



