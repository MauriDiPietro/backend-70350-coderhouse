import express from "express";
import { Server } from "socket.io";
import path from "path";
import { wsServerUp } from "./wsServer.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(process.cwd(), "src", "public")));
// app.use(cors({origin: '*'}))

const httpServer = app.listen(8080, () => {
  console.log("🚀 Server listening on port 8080");
});

const socketServer = new Server(httpServer, {
  cors: { origin: "*" },
});

wsServerUp(socketServer);
