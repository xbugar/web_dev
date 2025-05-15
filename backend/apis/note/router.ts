import { Router } from "express";
import { notesController } from "./controller";

export const notesRouter = Router();

notesRouter.get("/:noteId", notesController.getNoteMeta);
notesRouter.put("/:noteId", notesController.updateNoteMeta);
notesRouter.delete("/:noteId", notesController.deleteNote);
notesRouter.get("/:noteId/content", notesController.getNoteContent);
notesRouter.put("/:noteId/content", notesController.updateNoteContent);
notesRouter.post("/:noteId/tag", notesController.addNoteTag);
notesRouter.delete("/:noteId/tag", notesController.removeNoteTag);

