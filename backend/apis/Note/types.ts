import z from "zod";
import {
    getNoteMetaRequestSchema,
    updateNoteMetaRequestSchema,
    getNoteContentRequestSchema,
    updateNoteContentRequestSchema,
    addNoteTagRequestSchema,
    removeNoteTagRequestSchema
} from "./validationSchema";
import { Tag } from "../tag/types";

export type NoteMeta = {
    id: string;
    title: string;
    color: string;

    createdAt: Date;
    updatedAt: Date;

    notebookId: string;
    tags: Tag[];
};

export type GetMeta = z.infer<typeof getNoteMetaRequestSchema>["params"];
export type UpdateMeta = z.infer<typeof updateNoteMetaRequestSchema>["body"];
export type GetContent = z.infer<typeof getNoteContentRequestSchema>["params"];
export type UpdateContent = z.infer<typeof updateNoteContentRequestSchema>["body"];
export type AddTag = z.infer<typeof addNoteTagRequestSchema>["body"];
export type RemoveTag = z.infer<typeof removeNoteTagRequestSchema>["body"];
