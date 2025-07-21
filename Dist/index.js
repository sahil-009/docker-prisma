"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
// Middleware to parse JSON
app.use(express_1.default.json());
// GET endpoint
app.get("/", (req, res) => {
    res.json({ message: "GET: endpoint" });
});
// POST endpoint
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString(),
            },
        });
        res.json({ message: "POST: endpoint created" });
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
}));
// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
