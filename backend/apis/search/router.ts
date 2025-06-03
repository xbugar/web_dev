import {Router} from 'express';
import {searchController} from "./controller";

export const searchRouter = new Router();

searchRouter.get("/", searchController.get);
