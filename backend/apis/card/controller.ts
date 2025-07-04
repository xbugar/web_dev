import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {cardRepository} from "./repository";

import {
    updateFlashCardRequestSchema,
    deleteFlashCardRequestSchema,
} from "./validationSchema";
import {ownership} from "../ownership";

//TODO: at some magical future point in time that will never happen
//You need transaction here -> if a user ceases to be an owner after the first check, you would still carry out the update.
// You can create a separate repository call that bundles these 2 into a transaction.
const updateCard = async (req: Request, res: Response) => {
    const request = await parseRequest(updateFlashCardRequestSchema, req, res);
    if (!request
        || !await ownership.card(request.params.cardId, req.session.passport?.user.id, res)) {
        return;
    }

    const operation = await cardRepository.updateFlashCard(request);
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }

    res.status(200).send(operation.value);
};

const deleteCard = async (req: Request, res: Response) => {
    const request = await parseRequest(deleteFlashCardRequestSchema, req, res);
    if (!request
        || !await ownership.card(request.params.cardId, req.session.passport?.user.id, res)) {
        return;
    }

    const operation = await cardRepository.delete(request.params.cardId);
    if (operation.isErr) {
        handleRepositoryErrors(operation.error, res);
        return;
    }

    res.status(200).send(operation.value);
}

export const cardController = {
    updateCard,
    deleteCard,
};

