import express from "express";

import swaggerUi from "swagger-ui-express";
import fs from "node:fs";
import yaml from "yaml";
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
// maybe just delete this
/*
const prisma = new PrismaClient();
app.use(express.json());

// Get all users
app.get("/", async (req:Request, res:Response) => {
    const users = await prisma.user.findMany({});
    res.json(
        users
    );
});*/

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
