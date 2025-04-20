import { Router } from "express";
import { notesController } from "./controller";

export const notesRouter = Router();

notesRouter.get("/note/:id", notesController.getMeta);
notesRouter.put("/note/:id", notesController.updateMeta);
notesRouter.get("/note/:id/Content", notesController.getContent);
notesRouter.put("/note/:id/Content", notesController.updateContent);
notesRouter.post("/note/:id/tag/:id", notesController.addTag);
notesRouter.delete("/note/:id/tag/:id", notesController.removeTag);

