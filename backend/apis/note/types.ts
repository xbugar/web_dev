import z from "zod";
import {
    getNoteMetaRequestSchema,
    updateNoteMetaRequestSchema,
    updateNoteContentRequestSchema,
    removeNoteTagRequestSchema
} from "./validationSchema";
import { Tag } from "../tag/types";

export type NoteMeta = {
    id: string;
    title: string;

    createdAt: Date;
    updatedAt: Date;

    notebook: {
        id: string;
        color: string;
    }
    tags: Tag[];
};
export type AddTag = {
    noteId:string,
    tagId:string;
};

export type UpdateMeta = z.infer<typeof updateNoteMetaRequestSchema>;
export type GetMeta = z.infer<typeof getNoteMetaRequestSchema>;
export type UpdateContent = z.infer<typeof updateNoteContentRequestSchema>;
export type RemoveTag = z.infer<typeof removeNoteTagRequestSchema>["params"];
