import {Router} from "express";
import {eventController} from "./controller";

export const eventRouter = Router();

eventRouter.get("/", eventController.get);
eventRouter.post("/", eventController.createEvent);
eventRouter.delete("/:eventId", eventController.deleteEvent);
eventRouter.put("/:eventId", eventController.update);
eventRouter.post("/:eventId/tag", eventController.addTag);
eventRouter.delete("/:eventId/tag/:tagId", eventController.removeTag);

