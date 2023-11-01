import React, { useContext, useEffect, useState } from 'react';
import EnterIcon from "../assets/icons/enter-icon.svg";
import FileUpload from "../assets/icons/upload-file.svg";
import { ChatContext } from '../context/ChatData';
import StaticBar from './StaticBar';


const InputBar = () => {

  const [newMessage, setNewMessage] = useState("");
  const { messages, setMessages, setRenderComps } = useContext(ChatContext);

  function scrollToBottom() {
    // document.body.scrollIntoView({ behavior: 'smooth', block: 'end' })
    document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  const handleSendMessage = () => {
    setMessages([
      ...messages,
      {
        messageText: newMessage,
        feedback: {}
      }
    ])

    setRenderComps(<StaticBar />)
    setNewMessage('');
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages])


  return (
    <div className="main-lower">
      <div className="input-field"
        id='messageField'>
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