import { Result } from "@badrap/result";
import { prisma } from "../prismaClient";
import { InternalError } from "../types";
import { CreateTag, Tag, UpdateTag } from "./types";

export const tagRepository = {
    async create(tag: CreateTag): Promise<Result<Tag>> {
        return prisma.tag.create({
            data: {
                userId: tag.userId,
                tag: tag.tag,
                color: tag.color
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },

    async get(userId: string): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({
            where: {
                userId: userId
            }
        }).then(result => Result.ok(result))
            .catch(() => Result.err(new InternalError()));
    },


    async update(tag: UpdateTag): Promise<Result<Tag>> {
        return prisma.tag.update({
            where: {
                id: tag.id
            },
            data: {
                tag: tag.tag,
                color: tag.color
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
