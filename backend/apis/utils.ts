import {Request, Response} from "express";
import {ZodSchema, ZodTypeDef} from "zod";
import {fromZodError} from "zod-validation-error";
import {AuthError, InternalError, NotFoundError} from "./types";
import {prisma} from "./prismaClient";
import {readFileSync} from "fs";
import {Result} from "@badrap/result";

export const handleRepositoryErrors = (e: Error, res: Response) => {
    if (e instanceof NotFoundError) {
        const response: Error = {
            name: e.name || "NotFoundError",
            message: e.message || "Entity not found",
        };

        res.status(404).send(response);
    } else if (e instanceof InternalError) {
        res.status(500).send({
            name: e.name || "InternalError",
            message: e.message || "Something went wrong on our side.",
        });
    } else if (e instanceof AuthError) {
        res.status(401).send({
            name: e.name || "AuthError",
            message: e.message || "Not authorized",
        });
    } else {
        res.status(500).send({
            name: "UnknownError",
            message: "Something went wrong.",
        });
    }
};

export const parseRequest = async <
    Output,
    Def extends ZodTypeDef = ZodTypeDef,
    Input = Output
>(
    schema: ZodSchema<Output, Def, Input>,
    req: Request,
    res: Response
) => {
    const parsedRequest = await schema.safeParseAsync(req);

    if (!parsedRequest.success) {
        const error = fromZodError(parsedRequest.error);
        const errorResponse: Error = {
            name: "ValidationError",
            message: error.message,
            // cause: error.cause,
        };
        res.status(400).send(errorResponse);
        return null;
    }

    return parsedRequest.data;
};

//TODO get rid of these abominations
export const defaultPP = async () => {
    const profilePicture = await prisma.profilePicture.findFirst();
    if (!profilePicture) {
        throw new NotFoundError("No profile picture in database");
    }
    return profilePicture;
}

export const defaultIcon = async () => {
    const icon = await prisma.icon.findFirst({where: {name: "test"}});
    if (icon !== null) {
        return icon;
    }
    const file = readFileSync("prisma/mockData/default-profile.jpg");
    return prisma.icon.create({
        data: {
            name: "test",
            icon: file
        }
    });
}

export function repackageToNotFoundError(error:unknown){
    if (process.env.NODE_ENV !== "production" && error instanceof Error) {
        return Result.err(new NotFoundError(error.message));
    }
    return Result.err(new NotFoundError());
}

export function repackageToInternalError(error :unknown){
    if (process.env.NODE_ENV !== "production" && error instanceof Error) {
        return Result.err(new InternalError(error.message));
    }
    return Result.err(new InternalError());
}