const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// Get all users
app.get("/", async (req, res) => {
    const users = await prisma.user.findMany({});
    res.json(
        users
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});