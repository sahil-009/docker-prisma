import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// Middleware to parse JSON
app.use(express.json());

// GET endpoint
app.get("/", (req, res) => {
  res.json({ message: "GET: endpoint" });
});

// POST endpoint
app.post("/", async (req, res) => {
  try {
    await prisma.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    res.json({ message: "POST: endpoint created" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
