import {Response,Request} from "express";
import express from "express";
import {PrismaClient} from "@prisma/client";
import swaggerUi from "swagger-ui-express";
import fs from "node:fs";
import yaml from "yaml";

const app = express();

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


const prisma = new PrismaClient();
app.use(express.json());

// Get all users
app.get("/", async (req:Request, res:Response) => {
    const users = await prisma.user.findMany({});
    res.json(
        users
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});