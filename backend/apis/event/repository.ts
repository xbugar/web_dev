import {prisma} from "../prismaClient";
import {EventCreateRequest, EventUpdateRequest} from "./types";
import {Result} from "@badrap/result";
import {repackageToInternalError, repackageToNotFoundError} from "../utils";
import {TagOperation} from "../notebook/types";

export const eventRepository = {
    async create(userId: string, event: EventCreateRequest): Promise<Result<Event, Error>> {
        return await prisma.event.create({
            select: {
                id: true,
                title: true,
                description: true,

                timeFrom: true,
                timeTo: true,

                tags: true,
            },
            data: {
                userId: userId,
                ...event.body
            },
        }).then(event => Result.ok(event))
            .catch(error => repackageToInternalError(error));
    },

    async get(userId: string): Promise<Result<Event[], Error>> {
        return await prisma.event.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                timeFrom: true,
                timeTo: true,

                tags: true,
            },
            data: {
                userId: userId
            }
        }).then(event => Result.ok(event))
            .catch(error => repackageToInternalError(error));
    },

    async delete(userId: string, eventId: string): Promise<Result<undefined, Error>> {
        return await prisma.event.delete({
            data: {
                userId: userId,
                id: eventId
            }
        }).then(() => Result.ok())
            .catch(error => repackageToNotFoundError(error));
    },

    async update(userId: string, event: EventUpdateRequest): Promise<Result<Event, Error>> {
        return await prisma.event.update({
            select: {
                id: true,
                title: true,
                description: true,
                timeFrom: true,
                timeTo: true,

                tags: true,
            },
            where: {
                userId: userId,
                id: event.params.eventId,
            },
            data: {
                ...event.body
            }
        }).then(event => Result.ok(event))
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
    }
}




