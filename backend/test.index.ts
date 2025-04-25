import express from "express";

import cors from 'cors';
import {userRouter} from "./apis/user/router";
import {notebookRouter} from "./apis/notebook/router";
import {notesRouter} from "./apis/note/router";
import {tagsRouter} from "./apis/tag/router";


const app = express();

//this should probably be configured in a specific way when deployed
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/user', userRouter);
app.use('/notebook', notebookRouter);
app.use('/note',notesRouter);
app.use('/tag', tagsRouter);

export default app;
