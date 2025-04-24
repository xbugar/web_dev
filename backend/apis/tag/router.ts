import { Router } from "express";
import { tagsController } from "./controller";

export const tagsRouter = Router();

tagsRouter.post("/", tagsController.createTag);
tagsRouter.get("/", tagsController.getAllTags);
tagsRouter.get("/:id", tagsController.getTag);
tagsRouter.put("/:id", tagsController.updateTag);

tagsRouter.get("/:userId", tagsController.getUserTags);
tagsRouter.delete("/:id", tagsController.deleteTag);

