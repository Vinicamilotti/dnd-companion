import { io } from "socket.io-client";
export const Chat = () => {
  const socket = io("http://127.0.0.1:3000").connect();
};
