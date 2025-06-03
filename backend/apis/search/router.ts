import {Router} from 'express';
import {searchController} from "./controller";

export const searchRouter = Router();

searchRouter.get("/", searchController.get);
