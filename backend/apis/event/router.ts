import {Router} from "express";
import {eventController} from "./controller";

export const eventRouter = Router();

eventRouter.get("", eventController.get);
eventRouter.post("", eventController.createEvent);
eventRouter.get("/date", eventController.getByDate);
eventRouter.delete("/:eventId", eventController.deleteEvent);
eventRouter.get("/range",eventController.getRange);//the uri is poorly named but honestly idc
eventRouter.put("/:eventId", eventController.update);
eventRouter.get("/:eventId", eventController.getById);
eventRouter.post("/:eventId/tag", eventController.addTag);
eventRouter.delete("/:eventId/tag/:tagId", eventController.removeTag);