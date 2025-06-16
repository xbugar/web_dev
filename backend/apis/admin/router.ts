import {Router} from "express";
import {adminController} from "./controller";
import {userController} from "../user/controller";
import {userRouter} from "../user/router";


export const adminRouter = Router();

adminRouter.get("",adminController.getAdminData);
adminRouter.delete("/:userId", adminController.deleteUser);