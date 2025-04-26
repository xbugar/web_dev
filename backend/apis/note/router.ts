import { Router } from "express";
import { notesController } from "./controller";

export const notesRouter = Router();

notesRouter.get("/:noteId", notesController.getNoteMeta);
notesRouter.put("/:noteId", notesController.updateNoteMeta);
notesRouter.delete("/:noteid", notesController.deleteNote);
notesRouter.get("/:noteId/Content", notesController.getNoteContent);
notesRouter.put("/:noteId/Content", notesController.updateNoteContent);
notesRouter.post("/:noteId/tag/:tagId", notesController.addNoteTag);
notesRouter.delete("/:noteId/tag/:tagId", notesController.removeNoteTag);

