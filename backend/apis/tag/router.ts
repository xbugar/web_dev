import { Router } from "express";
import { tagsController } from "./controller";

export const tagsRouter = Router();

tagsRouter.post("/tag", tagsController.createTag);
tagsRouter.get("/tag", tagsController.getAllTags);
tagsRouter.get("/tag/:id", tagsController.getTag);
tagsRouter.put("/tag/:id", tagsController.updateTag);

tagsRouter.get("/tag/:userId", tagsController.getUserTags);
tagsRouter.delete("/tag/:id", tagsController.deleteTag);

