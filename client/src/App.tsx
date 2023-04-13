import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./pages/chat";
import { Create } from "./pages/createCharacter";
import { Search } from "./pages/sheetSearch";
import "./App.css";
import { socket, SocketContext } from "./contexts/socketContext";

function App() {
  return (
    <SocketContext.Provider value={socket}>
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
    </SocketContext.Provider>
  );
}

export default App;
