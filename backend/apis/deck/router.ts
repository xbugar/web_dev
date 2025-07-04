import {Router} from "express";
import {deckController} from "./controller";

export const deckRouter = Router();

deckRouter.get("/", deckController.getAll);
deckRouter.post("/", deckController.post);
deckRouter.get("/:deckId", deckController.get);
deckRouter.delete("/:deckId", deckController.remove);
deckRouter.put("/:deckId", deckController.put);
deckRouter.post("/:deckId", deckController.createCard);
deckRouter.get("/:deckId/cards", deckController.getAllCards);
deckRouter.put("/:deckId/cards", deckController.reset);
deckRouter.post("/:deckId/tag/", deckController.addTag);
deckRouter.delete("/:deckId/tag/:tagId", deckController.removeTag);
