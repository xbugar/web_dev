import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import {AddTag, GetMeta, NoteMeta, RemoveTag, UpdateContent, UpdateMeta} from "./types";
import {NotebookCreateNoteRequest} from "../notebook/types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";

export const noteRepository = {
    async updateMeta(meta: UpdateMeta): Promise<Result<NoteMeta>> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const note = await tx.note.update({
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
                });

                tx.notebook.update({
                    where: {id: note.notebook.id},
                    data: {
                        updatedAt: note.updatedAt
                    }
                })
                return note;
            });

            return Result.ok(result);

        } catch (error) {
            return repackageToInternalError(error);
        }
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
            .catch((error) => repackageToNotFoundError(error));
    },

    async delete(id: string): Promise<Result<null>> {
        try {
            await prisma.$transaction(async (tx) => {

                const note = await tx.note.delete({
                    select: {
                        notebook: {
                            select: {
                                id: true,
                            }
                        }
                    },
                    where: {
                        id: id
                    }
                });

                tx.notebook.update({
                    where: {id: note.notebook.id},
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

    async getContent(id: string): Promise<Result<string>> {
        return prisma.note.findUniqueOrThrow({
            select: {
                content: true
            },
            where: {
                id: id
            }
        }).then(result => Result.ok(result.content))
            .catch((error) => repackageToNotFoundError(error));
    },

    async updateContent(data: UpdateContent): Promise<Result<null>> {
        try {
            await prisma.$transaction(async (tx) => {
                const note = await tx.note.update({
                    where: {
                        id: data.params.noteId,
                    },
                    data: {
                        content: data.body.content
                    }
                });

                await tx.notebook.update({
                    where: {id: note.notebookId},
                    data: {
                        updatedAt: note.updatedAt,
                    }
                });
            });

            return Result.ok(null);
        } catch (error) {
            return repackageToInternalError(error);
        }
    },

    async addTag(data: AddTag): Promise<Result<NoteMeta>> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const note = await tx.note.update({
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
                });

                tx.notebook.update({
                    where: {id: note.notebook.id},
                    data: {
                        updatedAt: note.updatedAt,
                    }
                });
                return note;
            });
            return Result.ok(result);
        } catch (error) {
            return repackageToInternalError(error);
        }

    },

    async removeTag(data: RemoveTag): Promise<Result<NoteMeta>> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const note = await tx.note.update({
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
                            disconnect: {
                                id: data.tagId
                            }
                        }
                    }
                });

                tx.notebook.update({
                    where: {id: note.notebook.id},
                    data: {
                        updatedAt: note.updatedAt,
                    }
                });
                return note;
            });
            return Result.ok(result);
        } catch (error) {
            return repackageToInternalError(error);
        }

    },

    async create(data: NotebookCreateNoteRequest): Promise<Result<NoteMeta>> {
        try {
            const result = await prisma.$transaction(async (tx) => {
                const note = await tx.note.create({
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
                });

                tx.notebook.update({
                    where: {id: data.params.notebookId},
                    data: {
                        updatedAt: note.updatedAt
                    }
                });
                return note;
            })
            return Result.ok(result);
        } catch (error) {
            return repackageToInternalError(error);
        }

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
                (error) => repackageToInternalError(error));
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
            where: {id: noteId}
        }).then(note => Result.ok(note.notebook.userId))
            .catch(
                (error) => repackageToNotFoundError(error));
    }
}


