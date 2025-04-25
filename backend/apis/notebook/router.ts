import {Router} from "express";
import {notebookController} from "./controller";

export const notebookRouter = Router();


notebookRouter.post("/", notebookController.post);
notebookRouter.get("/:notebookId", notebookController.get);
notebookRouter.delete("/:notebookId", notebookController.remove);
notebookRouter.put("/:notebookId", notebookController.put);
notebookRouter.get("/:notebookId/notes", notebookController.getAllNotes);
notebookRouter.post("/:notebookId/note", notebookController.createNote);
notebookRouter.post("/:notebookId/tag/:tagId",notebookController.addTag);
notebookRouter.delete("/:notebookId/tag/:tagId", notebookController.removeTag);
