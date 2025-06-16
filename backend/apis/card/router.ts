import { Router } from "express";
import { cardController } from "./controller";

export const cardRouter = Router();

cardRouter.put("/:cardId", cardController.updateCard);
cardRouter.delete("/:cardId", cardController.deleteCard);

