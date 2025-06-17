import express from "express";
import cors from 'cors';
import {userRouter} from "./apis/user/router";
import {notebookRouter} from "./apis/notebook/router";
import {notesRouter} from "./apis/note/router";
import {tagsRouter} from "./apis/tag/router";
import {authRouter} from "./apis/auth/router";
import {eventRouter} from "./apis/event/router";
import {searchRouter} from "./apis/search/router";
import passport from "passport";
import {isAuthenticated} from "./apis/auth/middleware";
import {passportStrategy} from "./apis/auth/passportStrategy";
import session from "express-session";
import {PrismaSessionStore} from "@quixo3/prisma-session-store";
import {PrismaClient} from "@prisma/client";
import {deckRouter} from "./apis/deck/router";
import {cardRouter} from "./apis/card/router";
import {adminRouter} from "./apis/admin/router";


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

app.use('/auth', authRouter);
app.use('/user', passport.session(), isAuthenticated, userRouter);
app.use('/notebook', passport.session(), isAuthenticated, notebookRouter);
app.use('/note', passport.session(), isAuthenticated, notesRouter);
app.use('/tag', passport.session(), isAuthenticated, tagsRouter);
app.use('/event', passport.session(), isAuthenticated, eventRouter);
app.use('/deck', passport.session(), isAuthenticated, deckRouter);
app.use('/card', passport.session(), isAuthenticated, cardRouter);
app.use('/search', passport.session(), isAuthenticated, searchRouter);
app.use('/admin', passport.session(), isAuthenticated, adminRouter);



export default app;
