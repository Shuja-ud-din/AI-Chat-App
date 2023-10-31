import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainBar from "./components/MainBar";
import Suggestion from "./components/Suggestion";
import Objectives from "./components/Objectives";
import InputBar from "./components/InputBar";
import Chat from "./components/messageBox/Chat";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main" id="main">
        <div className="chat-interface">
          <MainBar />
          <Suggestion />
          <Objectives />
          <Chat />
        </div>
        <InputBar />
      </div>
    </div>
  );
}

export default App;
