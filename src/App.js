import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainBar from "./components/MainBar";
import Suggestion from "./components/Suggestion";
import Objectives from "./components/Objectives";
import InputBar from "./components/InputBar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <div className="chat-interface">
          <MainBar />
          <Suggestion />
          <Objectives />
        </div>
        <InputBar />
      </div>
    </div>
  );
}

export default App;
