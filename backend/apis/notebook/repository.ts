import {prisma} from "../prismaClient";
import {UserCreateNotebookRequest} from "../user/types";
import {Result} from "@badrap/result";
import {InternalError, NotFoundError} from "../types";
import {Notebook} from "@prisma/client";

import {
    NotebookCreateNoteRequest,
    NotebookFilter,
    NotebookResponse,

    NotebookUpdateRequestSchema, TagOperation
} from "./types";
import {NoteMeta} from "../note/types";

export const notebookRepository = {
    async create(request: UserCreateNotebookRequest): Promise<Result<NotebookResponse>> {

        return await prisma.notebook.create({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                iconId: true,

            },
            data: {
                ...request.body,
                userId: request.params.userId,
            }
        }).then(notebook => Result.ok(notebook))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new InternalError(error.message));
                }
                return Result.err(new InternalError());
            });
    },

    async update(request: NotebookUpdateRequestSchema): Promise<Result<NotebookResponse>> {
        return await prisma.notebook.update({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                iconId: true,

            },
            where: {id: request.params.notebookId},
            data: request.body,
        }).then(notebook => Result.ok(notebook))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            })
    },

    async get(notebookId: string, withTags: boolean): Promise<Result<NotebookResponse>> {
        return await prisma.notebook.findUniqueOrThrow(
            {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    color: true,
                    createdAt: true,
                    updatedAt: true,
                    iconId: true,
                    ...(withTags && {
                        tags: {
                            select: {
                                id: true,
                                tag: true,
                                color: true,
                                userId: true,
                            }
                        }
                    }),
                },
                where: {id: notebookId},
            }
        ).then(notebook => Result.ok(notebook))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    },

    async delete(notebookId: string): Promise<Result<Notebook>> {
        return await prisma.notebook.delete(
            {
                where: {id: notebookId},
            }
        ).then(notebook => Result.ok(notebook))
            .catch((error: any) => {
                    if (process.env.NODE_ENV !== "production") {
                        return Result.err(new NotFoundError(error.message));
                    }
                    return Result.err(new NotFoundError());
                }
            );
    },

    async getAll(filter: NotebookFilter): Promise<Result<NotebookResponse[]>> {
        return await prisma.notebook.findMany(
            {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    color: true,
                    createdAt: true,
                    updatedAt: true,
                    iconId: true,
                    ...(filter.withTags && {
                        tags: {
                            select: {
                                id: true,
                                tag: true,
                                color: true,
                                userId: true,
                            }
                        }
                    }),
                },
                where: {
                    userId: filter.userId,
                }
            }
        ).then(notebook => Result.ok(notebook))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new InternalError(error.message));
                }
                return Result.err(new InternalError());
            });
    },

    async modifyTag(notebookId: string, tagOperation: TagOperation): Promise<Result<null>> {
        return await prisma.notebook.update({
            where: {
                id: notebookId
            },
            data: {
                tags: tagOperation
            }
        }).then(() => Result.ok(null))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    },


}