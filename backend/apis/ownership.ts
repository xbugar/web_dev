import {AuthError} from "./types";
import {Response} from "express";
import {notebookRepository} from "./notebook/repository";
import {handleRepositoryErrors} from "./utils";
import {noteRepository} from "./note/repository";
import {tagRepository} from "./tag/repository";
import {eventRepository} from "./event/repository";
import { flashdeckRepository } from "./flashdeck/repository";
import { flashCardRepository } from "./flashcard/repository";

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
        const ownerId = await tagRepository.getUserId(tagId);
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

    async event(eventId: string, userId: string | undefined, res: Response) {
        const ownerId = await eventRepository.getUserId(eventId);
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

    async deck(flashdeckId: string, userId: string | undefined, res: Response) {
        const ownerId = await flashdeckRepository.getUserId(flashdeckId);
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

    async card(flashCardId: string, userId: string | undefined, res: Response) {
        const ownerId = await flashCardRepository.getUserId(flashCardId);
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

}