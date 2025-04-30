import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import {InternalError, NotFoundError} from "../types";
import {AddTag, GetMeta, NoteMeta, RemoveTag, UpdateContent, UpdateMeta} from "./types";
import {NotebookCreateNoteRequest} from "../notebook/types";


export const noteRepository = {
    async updateMeta(meta: UpdateMeta): Promise<Result<NoteMeta>> {
        return prisma.note.update({
            select: {
                id: true,
                title: true,

                createdAt: true,
                updatedAt: true,

                notebook: {
                    select: {
                        id: true,
                        color: true
                    }
                },
                tags: true
            },
            where: {
                id: meta.params.noteId
            },
            data: {
                title: meta.body.title,
            },
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },

    async getMeta(data: GetMeta): Promise<Result<NoteMeta>> {
        return prisma.note.findUniqueOrThrow({
            select: {
                id: true,
                title: true,

                createdAt: true,
                updatedAt: true,

                notebook: {
                    select: {
                        id: true,
                        color: true
                    }
                },
                tags: data.query.withTags,
            },
            where: {
                id: data.params.noteId
            },
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new NotFoundError()));
    },

    async delete(id: string): Promise<Result<null>> {
        return prisma.note.delete({
            where: {
                id: id
            }
        }).then(() => Result.ok(null))
            .catch(() => Result.err(new InternalError()))
    },

    async getContent(id: string): Promise<Result<string>> {
        return prisma.note.findUniqueOrThrow({
            select: {
                content: true
            },
            where: {
                id: id
            }
        }).then(result => Result.ok(result.content))
            .catch(() => Result.err(new NotFoundError()));
    },

    async updateContent(data: UpdateContent): Promise<Result<null>> {
        return prisma.note.update({
            where: {
                id: data.params.noteId,
            },
            data: {
                content: data.body.content
            }
        }).then(() => Result.ok(null))
            .catch(() => Result.err(new InternalError()))
    },

    async addTag(data: AddTag): Promise<Result<NoteMeta>> {
        return prisma.note.update({
            select: {
                id: true,
                title: true,

                createdAt: true,
                updatedAt: true,

                tags: true,

                notebook: {
                    select: {
                        id: true,
                        color: true
                    }
                },
            },
            where: {
                id: data.noteId
            },
            data: {
                tags: {
                    connect: {
                        id: data.tagId
                    }
                }
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },

    async removeTag(data: RemoveTag): Promise<Result<NoteMeta>> {
        return prisma.note.update({
            select: {
                id: true,
                title: true,

                createdAt: true,
                updatedAt: true,

                notebook: {
                    select: {
                        id: true,
                        color: true
                    }
                },
                tags: true
            },
            where: {
                id: data.noteId,
            },
            data: {
                tags: {
                    disconnect: {
                        id: data.tagId
                    }
                }
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },

    async create(data: NotebookCreateNoteRequest) {
        return prisma.note.create({
            select: {
                id: true,
                title: true,
                createdAt: true,
                updatedAt: true,

                notebook: {
                    select: {
                        id: true,
                        color: true
                    }
                },
                tags: true
            },
            data: {
                ...data.body,
                notebook: {
                    connect: {
                        id: data.params.notebookId
                    }
                }
            }
        }).then(note => Result.ok(note))
            .catch((error: any) => {
                    if (process.env.NODE_ENV !== "production") {
                        return Result.err(new InternalError(error.message));
                    }
                    return Result.err(new InternalError());
                }
            );
    },
    async getAllByNotebookId(notebookId: string): Promise<Result<NoteMeta[]>> {
        return prisma.note.findMany({
            select: {
                id: true,
                title: true,

                createdAt: true,
                updatedAt: true,

                notebook: {
                    select: {
                        id: true,
                        color: true
                    }
                },
                tags: true
            },
            where: {
                notebookId: notebookId
            }
        }).then(notes => Result.ok(notes))
            .catch(
                (error: any) => {
                    if (process.env.NODE_ENV !== "production") {
                        return Result.err(new InternalError(error.message));
                    }
                    return Result.err(new InternalError());
                }
            );
    },

    async getUserId(noteId: string): Promise<Result<string>> {
        return prisma.note.findUniqueOrThrow({
            select: {
                notebook: {
                    select: {
                        userId: true
                    }
                }
            },
            where: { id: noteId }
        }).then(note => Result.ok(note.notebook.userId))
            .catch(
                (error: any) => {
                    if (process.env.NODE_ENV !== "production") {
                        return Result.err(new NotFoundError(error.message));
                    }
                    return Result.err(new NotFoundError());
                }
            );
    }
}


