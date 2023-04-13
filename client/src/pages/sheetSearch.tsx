import { useContext, useState } from "react";
import { SocketContext } from "../contexts/socketContext";
import { Sheet } from "./characterSheet";
import "./styles/sheetSearch.css";
export const Search = () => {
  const socket = useContext(SocketContext);
  const [user, setUser] = useState<Boolean | string>(false);
  const [key, setKey] = useState<string>();
  socket.on("reciveUser", (accessKey: string) => {
    setUser(accessKey);
  });
  if (!user)
    return (
      <>
        <div id="searchConteiner">
          <form
            id="searchForm"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(key);
              socket.emit("getUser", key);
            }}
          >
            <h2>Digite sua chave</h2>
            <input
              onChange={(e) => {
                setKey(e.target.value);
              }}
            ></input>
            <button type="submit">Procurar</button>
          </form>
        </div>
      </>
    );

  return <Sheet props={user}></Sheet>;
};
