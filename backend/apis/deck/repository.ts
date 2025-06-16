import {prisma} from "../prismaClient";
import {Result} from "@badrap/result";

import {
    FlashdeckCreateRequest,
    FlashdeckResponse,
    FlashdeckUpdateRequest, TagOperation
} from "./types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";
import {Deck} from "@prisma/client";
import {NotebookResponse} from "../notebook/types";

export const deckRepository = {
    async create(request: FlashdeckCreateRequest, userId: string): Promise<Result<FlashdeckResponse>> {
        return await prisma.deck.create({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                // iconName: true,
                _count: {
                    select: {
                        cards: true,
                    }
                }
            },
            data: {
                ...request.body,
                userId: userId
            }

        }).then(flashdeck => Result.ok({
            id: flashdeck.id,
            title: flashdeck.title,
            description: flashdeck.description,
            color: flashdeck.color,
            createdAt: flashdeck.createdAt,
            updatedAt: flashdeck.updatedAt,
            flashCardsCount: flashdeck._count.cards,
        }))
            .catch((error) => repackageToInternalError(error));
    },

    async update(request: FlashdeckUpdateRequest): Promise<Result<FlashdeckResponse>> {
        return await prisma.deck.update({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: {
                        cards: true,
                    }
                }
            },
            where: {id: request.params.deckId},
            data: request.body,
        }).then(flashdeck => Result.ok({
            id: flashdeck.id,
            title: flashdeck.title,
            description: flashdeck.description,
            color: flashdeck.color,
            createdAt: flashdeck.createdAt,
            updatedAt: flashdeck.updatedAt,
            flashCardsCount: flashdeck._count.cards,
        }))
            .catch((error) => repackageToNotFoundError(error))
    },

    async get(flashdeckId: string, withTags: boolean): Promise<Result<FlashdeckResponse>> {
        return await prisma.deck.findUniqueOrThrow(
            {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    color: true,
                    createdAt: true,
                    updatedAt: true,
                    tags: withTags,
                    _count: {
                        select: {
                            cards: true,
                        }
                    }
                },
                where: {id: flashdeckId},
            }
        ).then(flashdeck => Result.ok({
            id: flashdeck.id,
            title: flashdeck.title,
            description: flashdeck.description,
            color: flashdeck.color,
            createdAt: flashdeck.createdAt,
            updatedAt: flashdeck.updatedAt,
            tags: flashdeck.tags,
            flashCardsCount: flashdeck._count.cards,
        }))
            .catch((error) => repackageToNotFoundError(error));
    },

    async delete(flashdeckId: string): Promise<Result<Deck>> {
        return await prisma.deck.delete(
            {
                where: {id: flashdeckId},
            }
        ).then(flashdeck => Result.ok(flashdeck))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getAll(withTags: boolean, userId: string): Promise<Result<FlashdeckResponse[]>> {
        return await prisma.deck.findMany(
            {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    color: true,
                    createdAt: true,
                    updatedAt: true,
                    tags: withTags,
                    _count: {
                        select: {
                            cards: true,
                        }
                    }
                },
                where: {
                    userId: userId,
                }
            }
        ).then(flashdecks => Result.ok(flashdecks.map((flashdeck) => {
                return {
                    id: flashdeck.id,
                    title: flashdeck.title,
                    description: flashdeck.description,
                    color: flashdeck.color,
                    createdAt: flashdeck.createdAt,
                    updatedAt: flashdeck.updatedAt,
                    tags: flashdeck.tags,
                    flashCardsCount: flashdeck._count.cards,
                }
            }
        )))
            .catch((error) => repackageToInternalError(error));
    },

    async modifyTag(flashdeckId: string, tagOperation: TagOperation): Promise<Result<null>> {
        return await prisma.deck.update({
            where: {
                id: flashdeckId
            },
            data: {
                tags: tagOperation
            }
        }).then(() => Result.ok(null))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getUserId(flashdeckId: string): Promise<Result<string>> {
        return await prisma.deck.findUniqueOrThrow({
            select: {
                userId: true
            },
            where: {
                id: flashdeckId,
            }
        }).then((res) => Result.ok(res.userId))
            .catch((error) => repackageToNotFoundError(error));
    },

    async search(title: string, userId: string): Promise<Result<FlashdeckResponse[]>> {
        return await prisma.deck.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                tags: true,
                _count: {
                    select: {
                        cards: true,
                    }
                }
            },
            where: {
                userId: userId,
                OR: [
                    {title: {contains: title}},
                    {tags: {some: {name: {contains: title}}}}
                ],
            }
        }).then(deck => Result.ok(deck.map((deck) => {
                return {
                    id: deck.id,
                    title: deck.title,
                    description: deck.description,
                    color: deck.color,
                    createdAt: deck.createdAt,
                    updatedAt: deck.updatedAt,
                    tags: deck.tags,
                    flashCardsCount: deck._count.cards,
                }
            }
        ))).catch((error) => repackageToNotFoundError(error));
    }
}