import { Router } from "express";
import { notesController } from "./controller";

export const notesRouter = Router();

notesRouter.get("/:id", notesController.getNoteMeta);
notesRouter.put("/:id", notesController.updateNoteMeta);
notesRouter.get("/:id/Content", notesController.getNoteContent);
notesRouter.put("/:id/Content", notesController.updateNoteContent);
notesRouter.post("/:id/tag/:id", notesController.addNoteTag);
notesRouter.delete("/:id/tag/:id", notesController.removeNoteTag);

