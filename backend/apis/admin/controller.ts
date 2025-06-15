import {Request, Response} from "express";
import {noteRepository} from "../note/repository";
import {handleRepositoryErrors} from "../utils";
import {adminRepository} from "./repository";

async function getAdminData(req: Request, res: Response) {
    const data = await adminRepository.getAdminOverview();
    if (data.isErr) {
        handleRepositoryErrors(data.error, res);
        return;
    }
    // Aggregate notes count manually
    const result = data.unwrap().map(user => ({
        id: user.id,
        email: user.email,
        notebookCount: user._count.notebooks,
        eventCount: user._count.events,
        deckCount: user._count.decks,
        totalNotes: user.notebooks.reduce((sum, notebook) => sum + notebook.notes.length, 0),
        totalCards: user.decks.reduce((sum, deck) => sum + deck.cards.length, 0)
    }));
    res.status(200).send(result);
}

export const adminController = {
    getAdminData
}

