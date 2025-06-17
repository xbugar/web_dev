import {Router} from "express";
import {adminController} from "./controller";

export const adminRouter = Router();

adminRouter.get("/users",adminController.getAdminData);
adminRouter.delete("/users/:userId", adminController.deleteUser);
adminRouter.get("",adminController.isAdmin);
