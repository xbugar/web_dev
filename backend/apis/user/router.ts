import {Router} from "express";
import {userController} from "./controller";

export const userRouter = Router();

userRouter.post("/", userController.post);
userRouter.get("/", userController.get);
userRouter.delete("/:userId", userController.remove);
userRouter.put("/", userController.put);
userRouter.get("/notebooks", userController.getNotebooks);
userRouter.post("/notebook", userController.createNotebook);
userRouter.get("/decks", userController.getDecks);
userRouter.post("/deck", userController.createDeck);
