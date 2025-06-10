import {Router} from "express";
import {flashdeckController} from "./controller";

export const flashdeckRouter = Router();

flashdeckRouter.post("/", flashdeckController.post);
flashdeckRouter.get("/:flashdeckId", flashdeckController.get);
flashdeckRouter.delete("/:flashdeckId", flashdeckController.remove);
flashdeckRouter.put("/:flashdeckId", flashdeckController.put);
flashdeckRouter.get("/:flashdeckId/flashcards", flashdeckController.getAllFlashcards);
flashdeckRouter.post("/:flashdeckId/flashcard", flashdeckController.createFlashcard);
flashdeckRouter.post("/:flashdeckId/tag/:tagId", flashdeckController.addTag);
flashdeckRouter.delete("/:flashdeckId/tag/:tagId", flashdeckController.removeTag);
