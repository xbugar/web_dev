import { Router } from "express";
import { tagsController } from "./controller";

export const tagsRouter = Router();

tagsRouter.post("/", tagsController.createTag);
// tagsRouter.get("/", tagsController.getAllTags);
tagsRouter.get("/:tagId", tagsController.getTag);
tagsRouter.put("/:tagId", tagsController.updateTag);

tagsRouter.get("/", tagsController.getUserTags);
tagsRouter.delete("/:tagId", tagsController.deleteTag);

