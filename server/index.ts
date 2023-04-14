import express, { Router } from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { MessageOutput } from "./schemas/messages.schema";
import { commandHandler } from "./Handlers/commandHandler";
import charRouter, { getChar } from "./routes/character.route";
import { CreateUser } from "./schemas/character.schema";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors);

app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (username, msg) => {
    const response: MessageOutput = {
      username: username,
      messageData: { type: "normal", msg: msg },
    };
    console.log(msg);
    socket.emit("chat message", response);
  });
  socket.on("command", (username, commandType, commandParams) => {
    console.log(username, commandType, commandParams);
    const response: MessageOutput = commandHandler({
      username,
      commandType,
      commandParams,
    });
    socket.emit("chat message", response);
  });
  socket.on("create", async (data: CreateUser) => {
    const create = await charRouter(data);
    socket.emit("created", create);
  });
  socket.on("getUser", async (id) => {
    const user = await getChar(id);
    socket.emit("reciveUser", user);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
