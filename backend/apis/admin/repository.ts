import {prisma} from "../prismaClient";
import {UserCreateNotebookRequest} from "../user/types";
import {Result} from "@badrap/result";
import {Notebook} from "@prisma/client";

import {repackageToNotFoundError, repackageToInternalError} from "../utils";
import {UpdateContent} from "../note/types";

export const eventRepository = {
    //: Promise<Result<null>>
    async getAdminOverview() {
        try {
            await prisma.$transaction(async (tx) => {
                const note = await tx.user.findMany(
                    {
                        select: {
                            id: true, // Include other user fields as needed
                            email: true,
                            _count: {
                                select: {
                                    notebooks: true, // Count of notebooks
                                    events: true,
                                    decks: true,
                                }
                            },
                            notebooks: {
                                select: {
                                    _count: {
                                        select: {notes: true} // Count of notes per notebook
                                    }
                                }
                            }

                        }
                    }
                );

            });

            return Result.ok(null);
        } catch (error) {
            return repackageToInternalError(error);
        }
    },
}