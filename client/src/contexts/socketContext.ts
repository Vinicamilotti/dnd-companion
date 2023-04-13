import { io } from "socket.io-client";
import { createContext } from "react";
export const socket = io("http://127.0.0.1:3000");
export const SocketContext = createContext(socket);
