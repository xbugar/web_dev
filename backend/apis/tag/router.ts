import { Router } from "express";
import { tagsController } from "./controller";

export const tagsRouter = Router();

tagsRouter.post("/Tag", tagsController.createTag);
tagsRouter.get("/Tag/:userId", tagsController.getUserTags);
tagsRouter.put("/Tag/:id", tagsController.updateTag);
tagsRouter.delete("/Tag/:id", tagsController.deleteTag);

