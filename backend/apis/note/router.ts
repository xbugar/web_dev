import { Router } from "express";
import { notesController } from "./controller";

export const notesRouter = Router();

notesRouter.get("/note/:id", notesController.getNoteMeta);
notesRouter.put("/note/:id", notesController.updateNoteMeta);
notesRouter.get("/note/:id/Content", notesController.getNoteContent);
notesRouter.put("/note/:id/Content", notesController.updateNoteContent);
notesRouter.post("/note/:id/tag/:id", notesController.addNoteTag);
notesRouter.delete("/note/:id/tag/:id", notesController.removeNoteTag);

