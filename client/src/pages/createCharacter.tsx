import { useContext, useState } from "react";
import { CreateUser } from "../schemas/character.schema,";
import { SocketContext } from "../contexts/socketContext";
import "./styles/createChar.css";
export const Create = () => {
  const socket = useContext(SocketContext);
  const [username, setUsername] = useState<string>("");
  const [charName, setChar] = useState<string>("");
  const [classes, setClasses] = useState<Array<string>>([""]);
  const [hitDice, setHitDice] = useState<number>(6);
  const [isCreated, setCreated] = useState<string>("");
  socket.on("created", (id) => {
    setCreated(id);
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(isCreated);
    alert("Copiado para a area de transferencia");
  };
  const Message = () => {
    if (isCreated === "") {
      return isCreated;
    }
    if (isCreated === "error") {
      return <p>Ops, algo deu errado</p>;
    }
    return (
      <>
        <p>Usuário criado! Para acessa-lo utilize o código:</p>
        <div id="code">
          <code>{isCreated}</code>
          <div
            id="copy"
            onClick={(e) => {
              copyToClipboard();
            }}
          >
            Copiar
          </div>
        </div>
      </>
    );
  };
  const submitHandler = async () => {
    const data: CreateUser = {
      username,
      charName,
      classes,
      hitDice,
      lvl: [1],
      totalHitPoints: hitDice,
    };
    if (username !== "" && charName !== "" && classes[0] !== "") {
      socket.emit("create", data);
    } else {
      setCreated("error");
    }
  };
  return (
    <div id="createConteiner">
      <h2>Crie seu personagem</h2>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          await submitHandler();
        }}
      >
        <label>
          <p>Seu nome</p>
          <input
            className="createInput"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <label>
          <p>Nome do Personagem</p>
          <input
            className="createInput"
            onChange={(e) => {
              setChar(e.target.value);
            }}
          ></input>
        </label>
        <label>
          <p>Classe</p>
          <input
            className="createInput"
            onChange={(e) => {
              setClasses([e.target.value]);
            }}
          ></input>
        </label>
        <label>
          <p>HitDice</p>
          <select
            onChange={(e) => {
              setHitDice(e.target.options.selectedIndex.valueOf());
            }}
          >
            <option value={6}>D6</option>
            <option value={8}>D8</option>
            <option value={10}>D10</option>
            <option value={12}>D12</option>
          </select>
        </label>
        <button id="createButton" type="submit">
          Criar
        </button>
      </form>
      <div id="msg">{Message()}</div>
    </div>
  );
};
