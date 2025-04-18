import z from "zod";
import {
    getTagRequestSchema,
    getTagsRequestSchema,
    createTagRequestSchema,
    updateTagRequestSchema,
    deleteTagRequestSchema
} from "./validationSchemas";

export type Tag = {
    id: string;
    tag: string;
    color: string;
};

export type CreateTag = z.infer<typeof createTagRequestSchema>["body"];

export type GetTag = z.infer<typeof getTagRequestSchema>["query"];
export type GetTags = z.infer<typeof getTagsRequestSchema>["query"];

export type UpdateTag = z.infer<typeof updateTagRequestSchema>["body"];
export type DeleteTag = z.infer<typeof deleteTagRequestSchema>["query"];
