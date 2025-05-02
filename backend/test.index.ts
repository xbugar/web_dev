import express from "express";
import cors from 'cors';
import {userRouter} from "./apis/user/router";
import {notebookRouter} from "./apis/notebook/router";
import {notesRouter} from "./apis/note/router";
import {tagsRouter} from "./apis/tag/router";
import {authRouter} from "./apis/auth/router";
import passport from "passport";
import {isAuthenticated} from "./apis/auth/middleware";
import {passportStrategy} from "./apis/auth/passportStrategy";
import session from "express-session";
import {PrismaSessionStore} from "@quixo3/prisma-session-store";
import {PrismaClient} from "@prisma/client";


const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


passport.use(passportStrategy());
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, httpOnly: false },
        store: new PrismaSessionStore(
            new PrismaClient(),
            {
                checkPeriod: 2 * 60 * 1000,  //ms
                dbRecordIdIsSessionId: true,
            }
        )
    })
);

app.use(passport.initialize());

app.use('/auth', passport.session(), authRouter);
app.use('/user', passport.session(), isAuthenticated, userRouter);
app.use('/notebook', passport.session(), isAuthenticated, notebookRouter);
app.use('/note', passport.session(), isAuthenticated, notesRouter);
app.use('/tag', passport.session(), isAuthenticated, tagsRouter);


export default app;
