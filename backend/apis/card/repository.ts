import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import {UpdateCard, Card} from "./types";
import {DeckCreateCardRequest} from "../deck/types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";

export const cardRepository = {
    async updateFlashCard(flashCard: UpdateCard): Promise<Result<Card>> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const card = await tx.card.update({
                    select: {
                        id: true,
                        question: true,
                        answer: true,
                        learned: true,

                        createdAt: true,
                        updatedAt: true,

                        deck: {
                            select: {
                                id: true,
                                color: true,
                            }
                        }
                    },
                    where: {
                        id: flashCard.params.cardId
                    },
                    data: {
                        question: flashCard.body.question,
                        answer: flashCard.body.answer,
                    },
                });

                tx.deck.update({
                    where: {id: card.deck.id},
                    data: {
                        updatedAt: card.updatedAt
                    }
                })
                return card;
            });

            return Result.ok(result);

        } catch (error) {
            return repackageToInternalError(error);
        }
    },

    async delete(id: string): Promise<Result<null>> {
        try {
            await prisma.$transaction(async (tx) => {

                const card = await tx.card.delete({
                    select: {
                        deck: {
                            select: {
                                id: true,
                            }
                        }
                    },
                    where: {
                        id: id
                    }
                });

                tx.deck.update({
                    where: {id: card.deck.id},
                    data: {
                        updatedAt: Date(),
                    }
                })

            });
            return Result.ok(null);
        } catch
            (error) {
            return repackageToInternalError(error);
        }
    },

    async create(data: DeckCreateCardRequest): Promise<Result<Card>> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const card = await tx.card.create({
                    select: {
                        id: true,
                        question: true,
                        answer: true,
                        learned: true,

                        createdAt: true,
                        updatedAt: true,

                        deck: {
                            select: {
                                id: true,
                                color: true,
                            }
                        }
                    },
                    data: {
                        ...data.body,
                        deckId: data.params.deckId
                    }
                });

                tx.deck.update({
                    where: {id: data.params.deckId},
                    data: {
                        updatedAt: card.updatedAt
                    }
                });
                return card;
            })
            return Result.ok(result);
        } catch (error) {
            return repackageToInternalError(error);
        }

    },
    async getAllByFlashDeckId(flashDeckId: string): Promise<Result<Card[]>> {
        return prisma.card.findMany({
            select: {
                id: true,
                question: true,
                answer: true,
                learned: true,

                createdAt: true,
                updatedAt: true,

                deck: {
                    select: {
                        id: true,
                        color: true,
                    }
                }
            },
            where: {
                deckId: flashDeckId
            }
        }).then(cards => Result.ok(cards))
            .catch(
                (error) => repackageToInternalError(error));
    },

    async getUserId(flashCardId: string): Promise<Result<string>> {
        return prisma.card.findUniqueOrThrow({
            select: {
                deck: {
                    select: {
                        userId: true
                    }
                }
            },
            where: {id: flashCardId}
        }).then(card => Result.ok(card.deck.userId))
            .catch((error) => repackageToNotFoundError(error));
    },

    async resetCards(flashdeckId: string, userId: string): Promise<Result<Card[]>> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                await tx.card.updateMany({
                    where: {
                        deck: {
                            id: flashdeckId,
                            userId: userId
                        }
                    },
                    data: {
                        learned: false
                    }
                });

                return tx.card.findMany({
                    where: {
                        deck: {
                            id: flashdeckId,
                            userId: userId
                        },
                    },
                    include: {
                        deck: {
                            select: {
                                id: true,
                                color: true,
                            }
                        }
                    }
                });
            })
            return Result.ok(result);
        }
        catch(error) {
            return repackageToInternalError(error);
        }
    }
}