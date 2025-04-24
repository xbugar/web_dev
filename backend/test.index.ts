import express from "express";

import cors from 'cors';
import {userRouter} from "./apis/user/router";


const app = express();

//this should probably be configured in a specific way when deployed
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/user', userRouter);

export default app;