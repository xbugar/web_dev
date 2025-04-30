import {AuthError} from "./types";
import {Response} from "express";
import {notebookRepository} from "./notebook/repository";
import {handleRepositoryErrors} from "./utils";
import {noteRepository} from "./note/repository";

export const ownership = {
    async notebook(notebookId: string, userId: string | undefined, res: Response) {
        const ownerId = await notebookRepository.getUserId(notebookId);
        if (ownerId.isErr) {
            handleRepositoryErrors(ownerId.error, res);
            return false;
        }
        if (ownerId.unwrap() != userId) {
            handleRepositoryErrors(new AuthError(), res);
            return false;
        }
        return true;
    },

    async note(noteId: string, userId: string | undefined, res: Response) {
        const ownerId = await noteRepository.getUserId(noteId);
        if (ownerId.isErr) {
            handleRepositoryErrors(ownerId.error, res);
            return false;
        }
        if (ownerId.unwrap() != userId) {
            handleRepositoryErrors(new AuthError(), res);
            return false;
        }
        return true;
    },

    async tag(tagId: string, userId: string | undefined, res: Response) {
        const ownerId = await noteRepository.getUserId(tagId);
        if (ownerId.isErr) {
            handleRepositoryErrors(ownerId.error, res);
            return false;
        }
        if (ownerId.unwrap() != userId) {
            handleRepositoryErrors(new AuthError(), res);
            return false;
        }
        return true;
    }
}