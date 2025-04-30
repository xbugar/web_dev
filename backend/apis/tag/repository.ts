import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import {InternalError, NotFoundError} from "../types";
import {CreateTag, Tag, TagRequest, UpdateTag} from "./types";

export const tagRepository = {
    async create(tag: CreateTag, userId: string): Promise<Result<Tag>> {
        return prisma.tag.create({
            data: {
                userId: userId,
                name: tag.name,
                color: tag.color
            }
        }).then(result => Result.ok(result))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new InternalError(error.message));
                }
                return Result.err(new InternalError());
            });
    },

    async getAll(): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({})
            .then(result => Result.ok(result))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    },

    async get(id: string): Promise<Result<Tag>> {
        return prisma.tag.findUniqueOrThrow({
            where: {
                id: id
            }
        }).then(result => Result.ok(result))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    },

    async getOrCreate(tagFilter: TagRequest): Promise<Result<Tag>> {
        try {
            const tag = await prisma.$transaction(async (tx) => {

                let tag = await tx.tag.findFirst({
                    where: {
                        name: tagFilter.name,
                        color: tagFilter.color,
                        userId: tagFilter.userId,
                    }
                });

                if (tag == null) {
                    tag = await tx.tag.create({
                        data: {
                            name: tagFilter.name,
                            color: tagFilter.color,
                            userId: tagFilter.userId,
                        }
                    });
                }
                return tag;
            })
            return Result.ok(tag);
        } catch (error: any) {
            if (process.env.NODE_ENV !== "production") {
                return Result.err(new NotFoundError(error.message));
            }
            return Result.err(new NotFoundError());
        }
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
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    },


    async getUserTags(userId: string): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({
            where: {
                userId: userId
            }
        }).then(result => Result.ok(result))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    },


    async delete(id: string): Promise<Result<null>> {
        return prisma.tag.delete({
            where: {
                id: id
            }
        }).then(() => Result.ok(null))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
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
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    }
}
