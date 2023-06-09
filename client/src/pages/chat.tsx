import { FormEvent, useRef, useState, useEffect, useContext } from "react";
import { SocketContext } from "../contexts/socketContext";
import { MessageOutput } from "../schemas/messages.schema";
import "./styles/chat.css";

function Chat() {
  const socket = useContext(SocketContext)
  const scrollTo = useRef<null | HTMLDivElement>(null);
  const [username, setUser] = useState<string | null>();
  const [messages, setMessages] = useState<Array<MessageOutput>>([]);
  const [input, setInput] = useState("");
  const scrollToBottom = () => {
    scrollTo.current?.scrollIntoView();
  };
  socket.on("new message", (msg:MessageOutput)=>{
      setMessages([...messages, msg])
    })
  useEffect(() => {
    scrollToBottom()});
  
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const checkUser = username ? true : false;
    if (!checkUser) {
      const newUser = prompt("Digite seu nome");
      setUser(newUser);
      return;
    }
    if (input !== "" && !input.startsWith("!")) {
      socket.emit("chat message", username, input);
      setInput("");
      return;
    }
    if (input.startsWith("!")) {
      const fullCommand = input.split(" ");

      const commandType = fullCommand[0];

      const params = fullCommand[1];
      socket.emit("command", username, commandType, params);
      setInput("");
      return;
    }
  };
  return (
    <>
      <div id="conteiner">
        <div id="chat">
          <ul id="messages">
            {messages.map((item, index) => {
              let message;
              if (item.messageData.type === "normal") {
                message = <p>{item.messageData.msg}</p>;
              }
              if (item.messageData.type === "roll") {
                message = (
                  <>
                    <h4>Rolagens</h4>
                    <p>{JSON.stringify(item.messageData.rollNumbers)}</p>
                    <h4>Soma</h4>
                    <p>{item.messageData.rollSum}</p>
                  </>
                );
              }

              return (
                <li key={index}>
                  <h3>{item.username}</h3>
                  {message}
                </li>
              );
            })}
          </ul>
          <div ref={scrollTo}></div>
        </div>
        <div id="menu">
          <nav>
            <img src="/d20.png" alt="Rolar" width="30px" height="30px"></img>
            <img
              src="/attack.png"
              alt="Atacar"
              width="30px"
              height="30px"
            ></img>
            <img
              src="/magic-spell.png"
              alt="Magias"
              width="30px"
              height="30px"
            ></img>
          </nav>
        </div>
        <form
          id="form"
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            id="input"
            autoComplete="off"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default Chat;
