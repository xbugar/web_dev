import {Router} from "express";
import {userController} from "../user/controller";
import {userRouter} from "../user/router";
import {adminController} from "./controller";


export const adminRouter = Router();

adminRouter.get("/",adminController.getAdminData);