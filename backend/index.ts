import express from "express";

import swaggerUi from "swagger-ui-express";
import fs from "node:fs";
import yaml from "yaml";
import cors from 'cors';
import {userRouter} from "./apis/user/router";
import {notebookRouter} from "./apis/notebook/router";
import {notesRouter} from "./apis/note/router";
import {tagsRouter} from "./apis/tag/router";
import passport from "passport";
import {passportStrategy} from "./apis/auth/passportStrategy";
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import session from "express-session";
import {isAuthenticated} from "./apis/auth/middleware";
import { authRouter } from "./apis/auth/router";
import {PrismaClient} from "@prisma/client";
import {eventRouter} from "./apis/event/router";

const app = express();

//this should probably be configured in a specific way when deployed
app.use(cors({
    origin: "http://localhost:5173",  // Adjust if necessary
    credentials: true
}));
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

passport.use(passportStrategy());
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true, sameSite:"none" ,httpOnly :false},
        store: new PrismaSessionStore(
            new PrismaClient(),
            {
                checkPeriod: 2 * 60 * 1000,  //ms
                dbRecordIdIsSessionId: true,
            }
        )
    })
);


app.use('/auth', authRouter);
app.use('/user', passport.session(), isAuthenticated, userRouter);
app.use('/notebook', passport.session(), isAuthenticated, notebookRouter);
app.use('/note', passport.session(), isAuthenticated, notesRouter);
app.use('/tag', passport.session(), isAuthenticated, tagsRouter);
app.use('/event', passport.session(), isAuthenticated, eventRouter)

// Setup Swagger UI for API documentation
const swaggerYaml = fs.readFileSync("./api-documentation/openapi.yaml", "utf8");
const swaggerDocument = yaml.parse(swaggerYaml);

if (process.env.NODE_ENV === "development") {
    app.use(
        "/api-documentation",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
    );
}


const PORT = parseInt(process.env.PORT ?? "3000");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
