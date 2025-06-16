import {Request, Response} from "express";
import {handleRepositoryErrors} from "../utils";
import {adminRepository} from "./repository";
import {userRepository} from "../user/repository";

async function getAdminData(req: Request, res: Response) {
    const userId = req.session.passport?.user.id;
    if (!userId) {
        res.status(400).send("Auth failed");
        return;
    }
    const admin = await userRepository.isAdmin(userId);
    if (admin.isErr) {
        handleRepositoryErrors(admin.error, res);
        return;
    }

    if (!admin.unwrap().isAdmin){
        res.status(401).send("Unauthorized");
        return;
    }

    const data = await adminRepository.getAdminOverview();
    if (data.isErr) {
        handleRepositoryErrors(data.error, res);
        return;
    }
    // Aggregate notes count manually
    const result = data.unwrap().map(user => ({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        notebookCount: user._count.notebooks,
        eventCount: user._count.events,
        deckCount: user._count.decks,
        totalNotes: user.notebooks.reduce((sum, notebook) => sum + notebook.notes.length, 0),
        totalCards: user.decks.reduce((sum, deck) => sum + deck.cards.length, 0)
    }));
    res.status(200).send(result);
}

async function deleteUser(req: Request, res: Response) {
    const userId = req.session.passport?.user.id;
    if (!userId) {
        res.status(400).send("No user Id provided");
        return;
    }
    const admin = await userRepository.isAdmin(userId);
    if (admin.isErr) {
        handleRepositoryErrors(admin.error, res);
        return;
    }

    if (!admin.unwrap().isAdmin || req.session.passport?.user.id == req.params.userId){
        res.status(401).send("Unauthorized");
        return;
    }

    const maybeUser = await userRepository.delete(req.params.userId);
    if (maybeUser.isErr) {
        handleRepositoryErrors(maybeUser.error, res);
        return;
    }
    res.status(200).send();
}

export const adminController = {
    getAdminData,
    deleteUser
}

