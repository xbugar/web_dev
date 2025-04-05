const express = require("express");
const { PrismaClient } = require("prisma-client-8bcf2b2d37edd1f65292dba5cd9c1cc959bda2e8cba24f1722728a25ac31f6f2");

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// Get all users
app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(
        users
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});