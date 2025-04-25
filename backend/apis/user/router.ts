import {Response, Request, Router} from "express";
import {userController} from "./controller";

export const userRouter = Router();

userRouter.post("/", userController.post);
userRouter.get("/:userId", userController.get);
userRouter.delete("/:userId", userController.remove);
userRouter.put("/:userId", userController.put);
userRouter.get("/:userId/notebooks", userController.getNotebooks);
userRouter.post("/:userId/notebook", userController.createNotebook);

