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
import {PrismaStore} from "./apis/auth/prismaStore";
import session from "express-session";
import {isAuthenticated} from "./apis/auth/middleware";
import { authRouter } from "./apis/auth/router";

const app = express();

//this should probably be configured in a specific way when deployed
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/user', passport.session(), isAuthenticated, userRouter);
app.use('/notebook', passport.session(), isAuthenticated, notebookRouter);
app.use('/note', passport.session(), isAuthenticated, notesRouter);
app.use('/tag', passport.session(), isAuthenticated, tagsRouter);

// Setup Swagger UI for API documentation
const swaggerYaml = fs.readFileSync("./api-documentation/openapi.yaml", "utf8");
const swaggerDocument = yaml.parse(swaggerYaml);

if (process.env.NODE_ENV !== "production") {
    app.use(
        "/api-documentation",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
    );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

passport.use(passportStrategy());
app.use(
    session({
        store: new PrismaStore(),
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, httpOnly: true }
    })
);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
