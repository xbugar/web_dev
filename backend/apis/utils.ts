import { Request, Response } from "express";
import { ZodSchema, ZodTypeDef } from "zod";
import { fromZodError } from "zod-validation-error";
import { InternalError, NotFoundError } from "./types";
import {prisma} from "./prismaClient";

export const handleRepositoryErrors = (e: Error, res: Response) => {
    if (e instanceof NotFoundError) {
        const response: Error = {
            name: e.name || "NotFoundError",
            message: e.message || "Entity not found",
            // cause: e.cause,
        };

        res.status(404).send(response);
    } else if (e instanceof InternalError) {
        res.status(500).send({
            name: e.name || "InternalError",
            message: e.message || "Something went wrong on our side.",
            // cause: e.cause,
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

//TODO get rid of this abomination
export const defaultPP = async () => {
    let profilePicture = await prisma.profilePicture.findFirst();
    if (!profilePicture) {
        throw new NotFoundError("No profile picture in database");
    }
    return profilePicture;
}