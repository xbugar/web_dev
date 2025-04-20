import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import {InternalError, NotFoundError} from "../types";
import {AddTag, GetMeta, NoteMeta, RemoveTag, UpdateContent, UpdateMeta} from "./types";


export const noteRepository = {
    async updateMeta(meta: UpdateMeta): Promise<Result<NoteMeta>> {
        return prisma.note.update({
            select: {
                id: true,
                title: true,
                color: true,

                createdAt: true,
                updatedAt: true,

                notebookId: true,
                tags: true
            },
            where: {
                id: meta.params.noteId
            },
            data: {
                title: meta.body.title,
                color: meta.body.color,
            },
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },

    async getMeta(data: GetMeta): Promise<Result<NoteMeta[]>> {
        return prisma.note.findMany({
            select: {
                id: true,
                title: true,
                color: true,

                createdAt: true,
                updatedAt: true,

                notebookId: true,
                tags: data.query.withTags,
            },
            where: {
                notebookId: data.params.noteId
            },
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
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
                color: true,

                createdAt: true,
                updatedAt: true,

                notebookId: true,
                tags: true
            },
            where: {
                id: data.id
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
                color: true,

                createdAt: true,
                updatedAt: true,

                notebookId: true,
                tags: true
            },
            where: {
                id: data.id,
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
    }
}


