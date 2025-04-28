import { Result } from "@badrap/result";
import { prisma } from "../prismaClient";
import { InternalError, NotFoundError } from "../types";
import { CreateTag, Tag, UpdateTag } from "./types";

export const tagRepository = {
    async create(tag: CreateTag): Promise<Result<Tag>> {
        return prisma.tag.create({
            data: {
                userId: tag.userId,
                name: tag.name,
                color: tag.color
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },

    async getAll(): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({})
            .then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },

    async get(id: string): Promise<Result<Tag>> {
        return prisma.tag.findUniqueOrThrow({
            where: {
                id: id
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new NotFoundError()));
    },


    async update(tag: UpdateTag): Promise<Result<Tag>> {
        return prisma.tag.update({
            where: {
                id: tag.params.tagId
            },
            data: {
                name: tag.body.name,
                color: tag.body.color
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },


    async getUserTags(userId: string): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({
            where: {
                userId: userId
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },


    async delete(id: string): Promise<Result<null>> {
        return prisma.tag.delete({
            where: {
                id: id
            }
        }).then(() => Result.ok(null))
            .catch(() => Result.err(new InternalError()));
    }
}
