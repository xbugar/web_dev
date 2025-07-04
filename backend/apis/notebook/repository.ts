import {prisma} from "../prismaClient";
import {UserCreateNotebookRequest} from "../user/types";
import {Result} from "@badrap/result";
import {Notebook} from "@prisma/client";

import {
    NotebookCreateRequest,
    NotebookResponse,
    NotebookUpdateRequestSchema, TagOperation
} from "./types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";

export const notebookRepository = {
    async createFromUser(request: UserCreateNotebookRequest, userId: string): Promise<Result<NotebookResponse>> {

        return await prisma.notebook.create({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                iconName: true,
                _count: {
                    select: {
                        notes: true,
                    }
                }
            },

            data: {
                ...request.body,
                userId: userId,
            }
        }).then(notebook => Result.ok({
            id: notebook.id,
            title: notebook.title,
            description: notebook.description,
            color: notebook.color,
            createdAt: notebook.createdAt,
            updatedAt: notebook.updatedAt,
            iconName: notebook.iconName,
            noteCount: notebook._count.notes,
        }))
            .catch((error) => repackageToInternalError(error));
    },

    async create(request: NotebookCreateRequest, userId: string): Promise<Result<NotebookResponse>> {
        return await prisma.notebook.create({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                iconName: true,
                _count: {
                    select: {
                        notes: true,
                    }
                }
            },
            data: {
                ...request.body,
                userId: userId
            }

        }).then(notebook => Result.ok({
            id: notebook.id,
            title: notebook.title,
            description: notebook.description,
            color: notebook.color,
            createdAt: notebook.createdAt,
            updatedAt: notebook.updatedAt,
            iconName: notebook.iconName,
            noteCount: notebook._count.notes,
        }))
            .catch((error) => repackageToInternalError(error));
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
                iconName: true,
                _count: {
                    select: {
                        notes: true,
                    }
                }
            },
            where: {id: request.params.notebookId},
            data: request.body,
        }).then(notebook => Result.ok({
            id: notebook.id,
            title: notebook.title,
            description: notebook.description,
            color: notebook.color,
            createdAt: notebook.createdAt,
            updatedAt: notebook.updatedAt,
            iconName: notebook.iconName,
            noteCount: notebook._count.notes,
        }))
            .catch((error) => repackageToNotFoundError(error))
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
                    iconName: true,
                    tags: withTags,
                    _count: {
                        select: {
                            notes: true,
                        }
                    }
                },
                where: {id: notebookId},
            }
        ).then(notebook => Result.ok({
            id: notebook.id,
            title: notebook.title,
            description: notebook.description,
            color: notebook.color,
            createdAt: notebook.createdAt,
            updatedAt: notebook.updatedAt,
            iconName: notebook.iconName,
            tags: notebook.tags,
            noteCount: notebook._count.notes,
        }))
            .catch((error) => repackageToNotFoundError(error));
    },

    async delete(notebookId: string): Promise<Result<Notebook>> {
        return await prisma.notebook.delete(
            {
                where: {id: notebookId},
            }
        ).then(notebook => Result.ok(notebook))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getAll(withTags: boolean, userId: string): Promise<Result<NotebookResponse[]>> {
        return await prisma.notebook.findMany(
            {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    color: true,
                    createdAt: true,
                    updatedAt: true,
                    iconName: true,
                    tags: withTags,
                    _count: {
                        select: {
                            notes: true,
                        }
                    }
                },
                where: {
                    userId: userId,
                },
                orderBy: {
                    updatedAt: 'desc'
                }
            }
        ).then(notebooks => Result.ok(notebooks.map((notebook) => {
                return {
                    id: notebook.id,
                    title: notebook.title,
                    description: notebook.description,
                    color: notebook.color,
                    createdAt: notebook.createdAt,
                    updatedAt: notebook.updatedAt,
                    iconName: notebook.iconName,
                    tags: notebook.tags,
                    noteCount: notebook._count.notes,

                }
            }
        )))
            .catch((error) => repackageToInternalError(error));
    },

    async modifyTag(notebookId: string, tagOperation: TagOperation): Promise<Result<null>> {
        return await prisma.notebook.update({
            where: {
                id: notebookId
            },
            data: {
                tags: tagOperation,
                updatedAt: new Date()
            }
        }).then(() => Result.ok(null))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getUserId(notebookId: string): Promise<Result<string>> {
        return await prisma.notebook.findUniqueOrThrow({
            select: {
                userId: true
            },
            where: {
                id: notebookId,
            }
        }).then((res) => Result.ok(res.userId))
            .catch((error) => repackageToNotFoundError(error));
    },

    async search(title: string, userId: string): Promise<Result<NotebookResponse[]>> {
        return await prisma.notebook.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                color: true,
                createdAt: true,
                updatedAt: true,
                iconName: true,
                tags: true,
                _count: {
                    select: {
                        notes: true,
                    }
                }
            },
            where: {
                userId: userId,
                OR: [
                    {title: {contains: title}},
                    {tags: {some: {name: {contains: title}}}}
                ],
            },
            orderBy: {
                title: 'asc'
            }
        }).then(notebooks => Result.ok(notebooks.map((notebook) => {
                return {
                    id: notebook.id,
                    title: notebook.title,
                    description: notebook.description,
                    color: notebook.color,
                    createdAt: notebook.createdAt,
                    updatedAt: notebook.updatedAt,
                    iconName: notebook.iconName,
                    tags: notebook.tags,
                    noteCount: notebook._count.notes,
                }
            }
        ))).catch((error) => repackageToNotFoundError(error));
    }
}