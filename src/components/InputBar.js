import React, { useContext, useEffect, useState } from "react";
import EnterIcon from "../assets/icons/enter-icon.svg";
import FileUpload from "../assets/icons/upload-file.svg";
import { AppContext } from "../context/AppData";

const InputBar = () => {
  const [newMessage, setNewMessage] = useState("");
  const [scroller, setScroller] = useState(0);
  const { messages, setMessages, setConditional, setConditional2 } = useContext(AppContext);

  function scrollToBottom() {
    document
      .getElementById("main")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }

  const handleSendMessage = () => {
    setMessages([
      ...messages,
      {
        messageText: newMessage,
        feedback: {},
      },
    ]);

    timerFunction();

    setNewMessage("");
    setConditional2(false);
    setScroller(scroller + 1);

    document.querySelector('.main-btns').classList.add('afterSubmit');
    document.querySelector('.chat-interface').classList.add('margin6')
  };

  const timerFunction = () => {
    setTimeout(() => {
      setConditional(true)
    }, 3000)
  }

  useEffect(() => {
    scrollToBottom();
  }, [scroller]);

  return (
    <div className="main-lower">
      <div className="input-field" id="messageField">
        <button className="upload">
          <img src={FileUpload} alt="loading" />
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
          onClick={() => (newMessage.trim() ? handleSendMessage() : undefined)}
          className="send"
        >
          <img src={EnterIcon} alt="loading" />
        </button>
      </div>
    </div>
  );
};
export default InputBar;
