import { useContext, useState } from "react";
import { SocketContext } from "../contexts/socketContext";
import { Char } from "../schemas/character.schema,";
import { Sheet } from "./characterSheet";
import "./styles/sheetSearch.css";
export const Search = () => {
  const socket = useContext(SocketContext);
  const [user, setUser] = useState<Char | null>();
  const [status, setStatus] = useState<string>("unset");
  const [key, setKey] = useState<string>();
  socket.on("reciveUser", (user: Char, status) => {
    if (status === "error") {
      setStatus("error");
      console.log(user);
    } else {
      setStatus("ok");
      setUser({ ...user });
      console.log(user);
    }
  });

  if (status === "error") {
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
        <p>Ops! Algo deu errado, verifique sua chave de acesso</p>
      </>
    );
  }
  if (user) {
    return <Sheet props={user}></Sheet>;
  }
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
};
