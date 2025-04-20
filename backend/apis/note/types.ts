import z from "zod";
import {
    getNoteMetaRequestSchema,
    updateNoteMetaRequestSchema,
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

export type UpdateMeta = z.infer<typeof updateNoteMetaRequestSchema>;
export type GetMeta = z.infer<typeof getNoteMetaRequestSchema>;
export type UpdateContent = z.infer<typeof updateNoteContentRequestSchema>;
export type AddTag = z.infer<typeof addNoteTagRequestSchema>["params"];
export type RemoveTag = z.infer<typeof removeNoteTagRequestSchema>["params"];
