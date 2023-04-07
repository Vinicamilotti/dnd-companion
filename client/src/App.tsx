import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const socket = io("http://127.0.0.1:3000");
socket.connect();
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/chat">Chat</Link>
        <Link to="/creation">Criar Personagem</Link>
        <Link to="/sheet">Ver ficha</Link>
      </div>
    </Router>
  );
}

export default App;
