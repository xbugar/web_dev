import {prisma} from "../prismaClient";
import {Prisma} from "@prisma/client";
import {InternalError, NotFoundError} from "../types"
import {Result} from "@badrap/result";
import {User} from "@prisma/client";
import {UserResponse, UserCreateRequest, UserUpdateRequest} from "./types"
import {defaultPP} from "../utils";

export const userRepository = {
    async create(user: UserCreateRequest): Promise<Result<UserResponse, Error>> {
        return await prisma.user.create({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true
            },
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                passwordSalt: "hehhe",
                hashedPassword: user.password,
                profilePicture: {
                    connect: await defaultPP(),
                }
            }
        })
            .then(newUser => Result.ok(newUser))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new InternalError(error.message));
                }
                return Result.err(new InternalError());
            });
    },

    async delete(userId: string): Promise<Result<null, Error>> {
        return await prisma.user.delete({where: {id: userId}})
            .then(
                () => Result.ok(null)
            ).catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });
    },

    async findById(userId: string): Promise<Result<UserResponse, Error>> {
        return await prisma.user.findUniqueOrThrow({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true
            }, where:
                {
                    id: userId
                }
        }).then(user => Result.ok(user))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());
            });

    },

    async update(userUpdateRequest: UserUpdateRequest): Promise<Result<UserResponse, Error>> {
        return await prisma.user.update(
            {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                },
                where: {
                    id: userUpdateRequest.params.userId
                },
                data: {
                    firstName: userUpdateRequest.body.firstName ?? undefined,
                    lastName: userUpdateRequest.body.lastName ?? undefined,
                    email: userUpdateRequest.body.email ?? undefined,
                    hashedPassword: userUpdateRequest.body.password ?? undefined,
                }

            }
        ).then(modifiedUser => Result.ok(modifiedUser))
            .catch((error: any) => {
                if (process.env.NODE_ENV !== "production") {
                    return Result.err(new NotFoundError(error.message));
                }
                return Result.err(new NotFoundError());

            });
    }


}
