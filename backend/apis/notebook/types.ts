import {
    notebookOnlyIdRequestSchema,
    notebookTagOperationRequestSchema,
    notebookUpdateRequestSchema,
    notebookGetRequestSchema,
    notebookCreateNoteRequestSchema
} from "./validationSchemas"
import {z} from "zod";
import {Tag} from "../tag/types";

export type NotebookOnlyIdRequest = z.infer<typeof notebookOnlyIdRequestSchema>;
export type NotebookTagOperationRequestSchema = z.infer<typeof notebookTagOperationRequestSchema>;
export type NotebookUpdateRequestSchema = z.infer<typeof notebookUpdateRequestSchema>;
export type NotebookGetRequest = z.infer<typeof notebookGetRequestSchema>;
export type NotebookCreateNoteRequest = z.infer<typeof notebookCreateNoteRequestSchema>;
export type NotebookFilter = {
    withTags: boolean;
    userId: string;

}

export type NotebookResponse = {
    id: string,
    title: string,
    description: string,
    color: string,
    createdAt: any,
    updatedAt: any,
    iconId: string,
    tags?: Tag[]
}

export type TagOperation = { connect: { id: string, }, } | { disconnect: { id: string, } }