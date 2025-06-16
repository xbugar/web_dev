import {prisma} from "../prismaClient";
import {Result} from "@badrap/result";

import {repackageToInternalError} from "../utils";

export const adminRepository = {
    async getAdminOverview() {
        try {
            const users = await prisma.$transaction(async (tx) => {
                return tx.user.findMany(
                    {
                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                            _count: {
                                select: {
                                    notebooks: true,
                                    events: true,
                                    decks: true,
                                }
                            },
                            notebooks: {
                                select: {
                                    notes: {
                                        select: { id: true }
                                    }
                                }
                            },
                            decks: {
                                select: {
                                    cards: {
                                        select: { id: true }
                                    }
                                }
                            },

                        }
                    }
                );
            });

            return Result.ok(users);
        } catch (error) {
            return repackageToInternalError(error);
        }
    },
}