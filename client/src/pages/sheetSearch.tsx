import { useContext, useState } from "react";
import { SocketContext } from "../contexts/socketContext";
import { Sheet } from "./characterSheet";

export const Search = () => {
  const socket = useContext(SocketContext);
  const [user, setUser] = useState<Boolean | string>(false);
  const [key, setKey] = useState<string>();
  socket.on("recive user", (accessKey: string) => {
    setUser(accessKey);
  });
  if (!user)
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            socket.emit("getUser", key);
          }}
        >
          <h2>Digite sua chave</h2>
          <input
            onChange={(e) => {
              setKey(e.target.value);
            }}
          ></input>
        </form>
      </>
    );
  if (user) {
    return <Sheet></Sheet>;
  }
};
