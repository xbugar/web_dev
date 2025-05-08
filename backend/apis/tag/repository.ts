import {Result} from "@badrap/result";
import {prisma} from "../prismaClient";
import {InternalError, NotFoundError} from "../types";
import {CreateTag, Tag, TagRequest, UpdateTag} from "./types";
import {repackageToNotFoundError,repackageToInternalError} from "../utils";

export const tagRepository = {
    async create(tag: CreateTag, userId: string): Promise<Result<Tag>> {
        return prisma.tag.create({
            data: {
                userId: userId,
                name: tag.name,
                color: tag.color
            }
        }).then(result => Result.ok(result))
            .catch((error: any) => repackageToInternalError(error));
    },

    async getAll(): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({})
            .then(result => Result.ok(result))
            .catch((error: any) => repackageToNotFoundError(error));
    },

    async get(id: string): Promise<Result<Tag>> {
        return prisma.tag.findUniqueOrThrow({
            where: {
                id: id
            }
        }).then(result => Result.ok(result))
            .catch((error: any) =>repackageToNotFoundError(error));
    },

    async getOrCreate(tagFilter: TagRequest,userId:string): Promise<Result<Tag>> {
        try {
            const tag = await prisma.$transaction(async (tx) => {

                let tag = await tx.tag.findFirst({
                    where: {
                        name: tagFilter.name,
                        color: tagFilter.color,
                        userId: userId,
                    }
                });

                if (tag == null) {
                    tag = await tx.tag.create({
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
        } catch (error: any) {
            return  repackageToNotFoundError(error);
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
            .catch((error: any) => repackageToNotFoundError(error));
    },


    async getUserTags(userId: string): Promise<Result<Tag[]>> {
        return prisma.tag.findMany({
            where: {
                userId: userId
            }
        }).then(result => Result.ok(result))
            .catch((error: any) => repackageToNotFoundError(error));
    },


    async delete(id: string): Promise<Result<null>> {
        return prisma.tag.delete({
            where: {
                id: id
            }
        }).then(() => Result.ok(null))
            .catch((error: any) => repackageToNotFoundError(error));
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
            .catch((error: any) => repackageToNotFoundError(error));
    }
}
