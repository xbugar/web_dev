import z from "zod";
import {
    createTagRequestSchema,
    updateTagRequestSchema,
} from "./validationSchema";

export type Tag = {
    id: string;
    tag: string;
    color: string;
    userId: string;
};

export type CreateTag = z.infer<typeof createTagRequestSchema>["body"];
export type UpdateTag = z.infer<typeof updateTagRequestSchema>;
