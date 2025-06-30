import {prisma} from "../prismaClient";
import {Result} from "@badrap/result";
import {UserResponse, UserCreateRequest, UserUpdateRequest, User} from "./types"
import {repackageToNotFoundError, repackageToInternalError} from "../utils";
import argon2 from "argon2";


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
                firstName: user.body.firstName,
                lastName: user.body.lastName,
                email: user.body.email,
                password: await argon2.hash(user.body.password),
            }
        })
            .then(newUser => Result.ok(newUser))
            .catch((error) => repackageToInternalError(error));
    },

    async delete(userId: string): Promise<Result<null, Error>> {
        return await prisma.user.delete({where: {id: userId}})
            .then(
                () => Result.ok(null)
            ).catch((error) => repackageToInternalError(error));
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
            .catch((error) => repackageToInternalError(error));

    },

    async findByEmail(email: string): Promise<Result<User, Error>> {
        return await prisma.user.findUniqueOrThrow({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                password: true
            }, where:
                {
                    email: email
                }
        }).then(user => Result.ok(user))
            .catch((error) => repackageToNotFoundError(error));
    },

    async update(userUpdateRequest: UserUpdateRequest, userId: string): Promise<Result<UserResponse, Error>> {
        return await prisma.user.update(
            {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                },
                where: {
                    id: userId
                },
                data: {
                    firstName: userUpdateRequest.body.firstName ?? undefined,
                    lastName: userUpdateRequest.body.lastName ?? undefined,
                    // email: userUpdateRequest.body.email ?? undefined,
                    // password: userUpdateRequest.body.password ?? undefined,
                }

            }
        ).then(modifiedUser => Result.ok(modifiedUser))
            .catch((error) => repackageToNotFoundError(error));
    },
    async isAdmin(userId: string) {
        return await prisma.user.findUniqueOrThrow(
            {
                select: {
                    isAdmin: true
                },
                where: {
                    id: userId
                },
            }
        ).then(modifiedUser => Result.ok(modifiedUser))
            .catch((error) => repackageToNotFoundError(error));
    }
}
