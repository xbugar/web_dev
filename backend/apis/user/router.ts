import {Router} from "express";
import {userController} from "./controller";

export const userRouter = Router();

userRouter.post("/", userController.post);
userRouter.get("/", userController.get);
userRouter.delete("/", userController.remove);
userRouter.put("/", userController.put);
userRouter.get("/notebooks", userController.getNotebooks);
userRouter.post("/notebook", userController.createNotebook);

