import { Router } from "express";
import { notesController } from "./controller";
import {isAuthenticated} from "../auth/middleware";
import passport from "passport";

export const notesRouter = Router();

notesRouter.get("/:noteId", passport.session(), isAuthenticated, notesController.getNoteMeta);
notesRouter.put("/:noteId", notesController.updateNoteMeta);
notesRouter.delete("/:noteId", notesController.deleteNote);
notesRouter.get("/:noteId/content", notesController.getNoteContent);
notesRouter.put("/:noteId/content", notesController.updateNoteContent);
notesRouter.post("/:noteId/tag/:tagId", notesController.addNoteTag);
notesRouter.delete("/:noteId/tag/:tagId", notesController.removeNoteTag);

