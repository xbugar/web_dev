import { Router } from "express";
import { flashCardController } from "./controller";

export const flashCardRouter = Router();

flashCardRouter.put("/:flashCardId", flashCardController.updateFlashCard);
flashCardRouter.delete("/:flashCardId", flashCardController.deleteFlashCard);

