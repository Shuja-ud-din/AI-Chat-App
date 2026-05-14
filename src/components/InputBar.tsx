"use client";

import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import Image from "next/image";
import { useAppContext } from "../context/AppData";

const InputBar = () => {
  const [newMessage, setNewMessage] = useState("");
  const [scroller, setScroller] = useState(0);
  const { messages, setMessages, setConditional, setConditional2 } =
    useAppContext();

  const scrollToBottom = () => {
    document
      .getElementById("main")
      ?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { messageText: newMessage, feedback: {} }]);
    setTimeout(() => setConditional(true), 3000);
    setNewMessage("");
    setConditional2(false);
    setScroller((s) => s + 1);
    document.querySelector(".main-btns")?.classList.add("afterSubmit");
    document.querySelector(".chat-interface")?.classList.add("margin6");
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  useEffect(() => {
    scrollToBottom();
  }, [scroller]);

  return (
    <div className="mt-auto w-full flex flex-col items-center justify-center">
      <div className="w-full rounded-full flex items-center justify-center fixed top-[90%]">
        <button className="border-none cursor-pointer rounded-full h-[50px] w-[50px] bg-[#fdfdfd]">
          <Image
            src="/assets/icons/upload-file.svg"
            alt="Upload"
            width={24}
            height={24}
          />
        </button>
        <input
          id="messageField"
          type="text"
          value={newMessage}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewMessage(e.target.value)
          }
          onKeyUp={handleKeyUp}
          placeholder="Enter your question here"
          className="w-[65%] min-w-[2rem] outline-none rounded-full border border-[#6e6e73] bg-[#fdfdfd] h-[50px] pl-[2.5rem] mx-[2rem] focus:border-[#6e6cc8] text-[1.4rem]"
        />
        <button
          onClick={handleSendMessage}
          className="border-none cursor-pointer rounded-full h-[50px] w-[50px] bg-[#fdfdfd]"
        >
          <Image
            src="/assets/icons/enter-icon.svg"
            alt="Send"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default InputBar;
