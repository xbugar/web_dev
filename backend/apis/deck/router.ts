import {Router} from "express";
import {deckController} from "./controller";

export const deckRouter = Router();

deckRouter.post("/", deckController.post);
deckRouter.post("/:id", deckController.put);
deckRouter.get("/:deckId", deckController.get);
deckRouter.delete("/:deckId", deckController.remove);
deckRouter.put("/:deckId", deckController.put);
deckRouter.get("/:deckId/cards", deckController.getAllCards);
deckRouter.post("/:deckId/card", deckController.createCard);
deckRouter.post("/:deckId/tag/:tagId", deckController.addTag);
deckRouter.delete("/:deckId/tag/:tagId", deckController.removeTag);
