import express from "express";
import http from "http";
import cors from "cors";
import { Server as SocketIOServer } from "socket.io";
import dotenv from "dotenv";

import corsConfig from "./config/cors";
import { authRouter } from "./routes/auth";
import { queriesRouter } from "./routes/queries";
import { workflowsRouter } from "./routes/workflows";
import { websitesRouter } from "./routes/websites";
import { errorHandler } from "./middleware/errorHandler";
import { initGuidanceSocket } from "./sockets/guidanceSocket";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors(corsConfig));
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/queries", queriesRouter);
app.use("/api/workflows", workflowsRouter);
app.use("/api/websites", websitesRouter);

// Error handler middleware
app.use(errorHandler);

// Server & Socket.io setup
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST"]
  }
});

initGuidanceSocket(io);

server.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
