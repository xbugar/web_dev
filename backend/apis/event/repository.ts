import {prisma} from "../prismaClient";
import {EventResponse, EventCreateRequest, EventUpdateRequest} from "./types";
import {Result} from "@badrap/result";
import {repackageToInternalError, repackageToNotFoundError} from "../utils";
import {TagOperation} from "../notebook/types";

export const eventRepository = {
    async create(userId: string, event: EventCreateRequest): Promise<Result<EventResponse, Error>> {
        return await prisma.event.create({
            select: {
                id: true,
                title: true,
                description: true,

                timeFrom: true,
                timeTo: true,
                repeat: true,

                tags: true,
            },
            data: {
                userId: userId,
                ...event.body
            },
        }).then(event => Result.ok({
            eventId: event.id,
            title: event.title,
            description: event.description,
            timeFrom: event.timeFrom,
            timeTo: event.timeTo,
            repeat: event.repeat,
            tags: event.tags
        }))
            .catch(error => repackageToInternalError(error));
    },

    async get(userId: string): Promise<Result<EventResponse[], Error>> {
        return await prisma.event.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                timeFrom: true,
                timeTo: true,
                repeat: true,

                tags: true,
            },
            where: {
                userId: userId
            }
        }).then(events => Result.ok(events.map((event) => {
                return {
                    eventId: event.id,
                    title: event.title,
                    description: event.description,
                    timeFrom: event.timeFrom,
                    timeTo: event.timeTo,
                    repeat: event.repeat,
                    tags: event.tags
                }
            }
        )))
            .catch(error => repackageToInternalError(error));
    },

    async delete(userId: string, eventId: string): Promise<Result<null, Error>> {
        return await prisma.event.delete({
            where: {
                userId: userId,
                id: eventId
            }
        }).then(() => Result.ok(null))
            .catch(error => repackageToNotFoundError(error));
    },

    async update(userId: string, event: EventUpdateRequest): Promise<Result<EventResponse, Error>> {
        return await prisma.event.update({
            select: {
                id: true,
                title: true,
                description: true,
                timeFrom: true,
                timeTo: true,
                repeat: true,

                tags: true,
            },
            where: {
                userId: userId,
                id: event.params.eventId,
            },
            data: {
                ...event.body
            }
        }).then(event => Result.ok({
            eventId: event.id,
            title: event.title,
            description: event.description,
            timeFrom: event.timeFrom,
            timeTo: event.timeTo,
            repeat: event.repeat,
            tags: event.tags
        }))
            .catch(error => repackageToNotFoundError(error));
    },

    async getById(userId: string, event: EventUpdateRequest): Promise<Result<EventResponse, Error>> {
        return await prisma.event.findUniqueOrThrow({
            select: {
                id: true,
                title: true,
                description: true,
                timeFrom: true,
                timeTo: true,
                repeat: true,

                tags: true,
            },
            where: {
                userId: userId,
                id: event.params.eventId,
            },
        }).then(event => Result.ok({
            eventId: event.id,
            title: event.title,
            description: event.description,
            timeFrom: event.timeFrom,
            timeTo: event.timeTo,
            repeat: event.repeat,
            tags: event.tags
        }))
            .catch(error => repackageToNotFoundError(error));
    },

    async modifyTag(userId: string, eventId: string, tagOperation: TagOperation): Promise<Result<null>> {
        return await prisma.event.update({
            where: {
                userId: userId,
                id: eventId
            },
            data: {
                tags: tagOperation
            }
        }).then(() => Result.ok(null))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getUserId(eventId: string): Promise<Result<string>> {
        return await prisma.event.findUniqueOrThrow({
            select: {
                userId: true
            },
            where: {
                id: eventId,
            }
        }).then((res) => Result.ok(res.userId))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getByDate(userId: string, date: Date): Promise<Result<EventResponse[]>> {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        return await prisma.event.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                timeFrom: true,
                timeTo: true,
                repeat: true,

                tags: true,
            },
            where: {
                userId: userId,
                OR: [{ timeFrom: { gte: startOfDay, lte: endOfDay}},
                    { timeTo: { gte: startOfDay, lte: endOfDay}}]
            },
        }).then(events => Result.ok(events.map((event) => {
                return {
                    eventId: event.id,
                    title: event.title,
                    description: event.description,
                    timeFrom: event.timeFrom,
                    timeTo: event.timeTo,
                    repeat: event.repeat,
                    tags: event.tags
                }
            }
        )))
            .catch(error => repackageToInternalError(error));
    }
}




