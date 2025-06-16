import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import {CreateTag, Tag, TagRequest, UpdateTag} from "./types";
import {repackageToNotFoundError, repackageToInternalError} from "../utils";

export const tagRepository = {
    async create(tag: CreateTag, userId: string): Promise<Result<Tag>> {
        return prisma.tag.create({
            select: {id: true, name: true, color: true},
            data: {
                userId: userId,
                name: tag.name,
                color: tag.color
            }
        }).then(result => Result.ok(result))
            .catch((error) => repackageToInternalError(error));
    },

    async getAll(): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({select: {id: true, name: true, color: true}, orderBy: { name: 'asc'}})
            .then(result => Result.ok(result))
            .catch((error) => repackageToNotFoundError(error));
    },

    async get(id: string): Promise<Result<Tag>> {
        return prisma.tag.findUniqueOrThrow({
            select: {id: true, name: true, color: true},
            where: {
                id: id
            }
        }).then(result => Result.ok(result))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getOrCreate(tagFilter: TagRequest, userId: string): Promise<Result<Tag>> {
        try {
            const tag = await prisma.$transaction(async (tx) => {

                let tag = await tx.tag.findFirst({
                    select: {id: true, name: true, color: true},
                    where: {
                        name: tagFilter.name,
                        color: tagFilter.color,
                        userId: userId,
                    }
                });

                if (tag == null) {
                    tag = await tx.tag.create({
                        select: {id: true, name: true, color: true},
                        data: {
                            name: tagFilter.name,
                            color: tagFilter.color,
                            userId: userId,
                        }
                    });
                }
                return tag;
            })
            return Result.ok(tag);
        } catch (error) {
            return repackageToNotFoundError(error);
        }
    },


    async update(tag: UpdateTag): Promise<Result<Tag>> {
        return prisma.tag.update({select: {id: true, name: true, color: true},
            where: {
                id: tag.params.tagId
            },
            data: {
                name: tag.body.name,
                color: tag.body.color
            }
        }).then(result => Result.ok(result))
            .catch((error) => repackageToNotFoundError(error));
    },


    async getUserTags(userId: string): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({select: {id: true, name: true, color: true},
            where: {
                userId: userId
            },
            orderBy: {
                name: 'asc'
            }
        }).then(result => Result.ok(result))
            .catch((error) => repackageToNotFoundError(error));
    },


    async delete(id: string): Promise<Result<null>> {
        return prisma.tag.delete({
            where: {
                id: id
            }
        }).then(() => Result.ok(null))
            .catch((error) => repackageToNotFoundError(error));
    },

    async getUserId(tagId: string): Promise<Result<string>> {
        return prisma.tag.findUniqueOrThrow({
            select: {
                userId: true
            },
            where: {
                id: tagId
            }
        }).then((tag) => Result.ok(tag.userId))
            .catch((error) => repackageToNotFoundError(error));
    }
}
