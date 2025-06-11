import {
    notebookOnlyIdRequestSchema,
    notebookTagOperationRequestSchema,
    notebookUpdateRequestSchema,
    notebookGetRequestSchema,
    notebookCreateNoteRequestSchema,
    notebookCreateRequestSchema
} from "./validationSchemas"
import {z} from "zod";
import {Tag} from "../tag/types";

export type NotebookOnlyIdRequest = z.infer<typeof notebookOnlyIdRequestSchema>;
export type NotebookTagOperationRequestSchema = z.infer<typeof notebookTagOperationRequestSchema>;
export type NotebookUpdateRequestSchema = z.infer<typeof notebookUpdateRequestSchema>;
export type NotebookGetRequest = z.infer<typeof notebookGetRequestSchema>;
export type NotebookCreateNoteRequest = z.infer<typeof notebookCreateNoteRequestSchema>;
export type NotebookCreateRequest = z.infer<typeof notebookCreateRequestSchema>;
export type NotebookFilter = {
    withTags: boolean;
}

export type NotebookResponse = {
    id: string,
    title: string,
    description: string | null,
    color: string,
    createdAt: Date,
    updatedAt: Date,
    iconName: string | null,
    tags?: Tag[]
    noteCount: number,
}

export type TagOperation = { connect: { id: string, }, } | { disconnect: { id: string, } }