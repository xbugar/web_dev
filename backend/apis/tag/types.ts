import z from "zod";
import {
    createTagRequestSchema,
    updateTagRequestSchema,
} from "./validationSchema";

export type Tag = {
    id: string;
    name: string;
    color: string;
};

export type TagRequest = {
    name: string,
    color: string,
}

export type CreateTag = z.infer<typeof createTagRequestSchema>["body"];
export type UpdateTag = z.infer<typeof updateTagRequestSchema>;
