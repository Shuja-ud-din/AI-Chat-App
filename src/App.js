import "./App.css";
import { useContext } from "react";
import Sidebar from "./components/Sidebar";
import InputBar from "./components/InputBar";
import Chat from "./components/messageBox/Chat";
import { ChatContext } from "./context/ChatData";

function App() {


  const { renderComs } = useContext(ChatContext);

  return (
    <div className="App">
      <Sidebar />
      <div className="main" id="main">
        <div className="chat-interface">
          {renderComs}
          <Chat />
        </div>
        <InputBar />
      </div>
    </div>
  );
}

export default App;
