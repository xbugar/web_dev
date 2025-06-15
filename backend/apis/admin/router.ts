import {Router} from "express";
import {adminController} from "./controller";


export const adminRouter = Router();

adminRouter.get("",adminController.getAdminData);