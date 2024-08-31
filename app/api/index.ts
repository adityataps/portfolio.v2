import cors from "cors";
import http, { IncomingMessage } from "http";
import express, { Router } from "express";
import { WebSocket, WebSocketServer } from "ws";
import dotenv from "dotenv";

import {
  router as homeRouter,
  // webSocket as homeWebSocket,
} from "./routes/home";

dotenv.config();
const port = Number(process.env.EXPRESS_API_PORT) || 3000;

const app = express();
app.use(cors());
const server = http.createServer(app);

// Express Router
const router = Router();
router.use("/home", homeRouter);
app.use("/api", router);

// WebSocket
const wss = new WebSocketServer({ server });
wss.on("connection", (ws: WebSocket, req: IncomingMessage) => {
  console.log("WebSocket connection established");
  console.log("On route: ", req.url);

  if (!req.url?.startsWith("/ws/")) {
    return () => ws.close(1000, "Unknown WebSocket route");
  }

  // Home routes
  switch (req.url) {
    // case "/ws/home":
    //   homeWebSocket(ws, req);
    //   break;
    default:
      ws.close(1000, "Unknown WebSocket route");
  }
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
