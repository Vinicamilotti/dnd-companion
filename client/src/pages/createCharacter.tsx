import { FormEvent, useContext, useState } from "react";
import { CreateUser } from "../schemas/character.schema,";
import { SocketContext } from "../contexts/socketContext";

export const Create = () => {
  const socket = useContext(SocketContext);
  const [username, setUsername] = useState<string>("");
  const [charName, setChar] = useState<string>("");
  const [classes, setClasses] = useState<Array<string>>([""]);
  const [hitDice, setHitDice] = useState<number>(6);
  const [isCreated, setCreated] = useState<string | null>(null);
  socket.on("created", (id) => {
    setCreated(`Usuário criado, para acessa-lo use o código ${id}`);
  });
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    const data: CreateUser = {
      username,
      charName,
      classes,
      hitDice,
      lvl: [1],
      totalHitPoints: hitDice,
    };
    console.log(data);
    socket.emit("create", data);
  };
  return (
    <div id="conteiner">
      <h2>Crie seu personagem</h2>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          await submitHandler(e);
        }}
      >
        <label>
          Seu nome
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Nome do personagem
          <input
            name="charName"
            onChange={(e) => {
              setChar(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Classe
          <input
            onChange={(e) => {
              setClasses([e.target.value]);
            }}
          ></input>
        </label>
        <label>
          HitDice
          <select
            name="hitDice"
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
        <button type="submit">Criar</button>
      </form>
      <div>{isCreated}</div>
    </div>
  );
};
