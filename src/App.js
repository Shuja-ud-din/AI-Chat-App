import "./App.css";
import { useContext, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainBar from "./components/MainBar";
import InputBar from "./components/InputBar";
import Chat from "./components/messageBox/Chat";
import { ChatContext } from "./context/ChatData";
import StaticBar from "./components/StaticBar";

function App() {

  const mainRef = useRef();

  const { setMainDiv, renderComs } = useContext(ChatContext);
  setMainDiv(mainRef)

  return (
    <div className="App">
      <Sidebar />
      <div className="main" ref={mainRef} id="main">
        <div className="chat-interface">
          {/* {renderComs} */}
          <StaticBar />
          <Chat />
        </div>
        <InputBar />
      </div>
    </div>
  );
}

export default App;
