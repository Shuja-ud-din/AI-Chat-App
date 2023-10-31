import React, { useState } from 'react';
import EnterIcon from "../assets/icons/enter-icon.svg";
import FileUpload from "../assets/icons/upload-file.svg";
import MsgIcon from "../assets/icons/msg-icon.svg";


const InputBar = () => {

  const [recentChats, setRecentChats] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {

    if (newMessage.trim()) {
      const message = {
        text: newMessage,
        sender: "user",
      };
      message.style = {
        marginBottom: "10px",
      };
      setMessages([...messages, message]);
      setNewMessage("");
      updateRecentChats(newMessage);
    }
  }

  const updateRecentChats = (message) => {
    if (recentChats.length >= 5) {
      recentChats.pop(); // Limit the number of recent chats to 5
    }
    const trimmedMessage = message.split(" ").slice(0, 3).join(" ");
    const trimmedMessageWithDots = `${trimmedMessage}...`;
    setRecentChats([
      {
        text: trimmedMessageWithDots,
        icon: <img src={MsgIcon} alt="Message Icon" className="msg-icon" />,
      },
      ...recentChats,
    ])
  }


  return (
    <div className="main-lower">
      <div className="input-field">
        <button className="upload">
          <img src={FileUpload} alt="" />
        </button>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Enter your question here"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <button
          onClick={() =>
            newMessage.trim() ? handleSendMessage() : undefined}
          className="send">
          <img src={EnterIcon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default InputBar;