import React from "react";
import { io } from "socket.io-client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./pages/chat";
import { Create } from "./pages/createCharacter";
import { Search } from "./pages/sheetSearch";
import "./App.css";

const socket = io("http://127.0.0.1:3000");
socket.connect();
function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/chat" className="link">
          Chat
        </Link>
        <Link to="/creation" className="link">
          Criar Personagem
        </Link>
        <Link to="/sheet" className="link">
          Ver ficha
        </Link>
      </div>
      <Routes>
        <Route path="/chat" Component={Chat} />
        <Route path="/creation" Component={Create} />
        <Route path="/sheet" Component={Search} />
      </Routes>
    </Router>
  );
}

export default App;
