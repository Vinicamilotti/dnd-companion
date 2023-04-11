import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { MessageOutput } from "./schemas/messages.schema";
import { commandHandler } from "./Handlers/commandHandler";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
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
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
