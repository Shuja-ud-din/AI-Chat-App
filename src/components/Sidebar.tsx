"use client";

import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [recentChats, setRecentChats] = useState([
    { title: "simply dummy text of..." },
    { title: "make a type specimen..." },
    { title: "was popularised in the..." },
    { title: "was popularised in the..." },
    { title: "was popularised in the..." },
  ]);
  const [activeChat, setActiveChat] = useState(0);
  const [showChats, setShowChats] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const addNewChat = () => {
    setRecentChats([{ title: "New Chat..." }, ...recentChats]);
  };

  const toggleSidebar = () => {
    setCollapse(!collapse);
    document.getElementById("main")?.classList.toggle("bodyCollapse");
    document.getElementById("toggleItem")?.classList.toggle("short-sidebar");
    document.getElementById("messageField")?.classList.toggle("long-input");
    document.querySelector(".columnFlex")?.classList.toggle("padd0");
  };

  const toggleShowChats = () => {
    document.getElementById("showChats")?.classList.toggle("rotate-icon");
    setShowChats(!showChats);
  };

  const nChats = recentChats.length;

  return (
    <div className="sidebar" id="toggleItem">
      <div className="upper-side">
        <div className="columnFlex">
          <div className="upper-side-top">
            <Image
              src="/assets/icons/MetaBrain_icon.svg"
              alt="MetaBrain"
              width={49}
              height={40}
              className="logo"
            />
            <span className="brand">MetaBrain</span>
            <span className="version">Beta</span>
          </div>
          <p className="tagline">Powered by Aramco.AI</p>
        </div>

        <div className="flex-box buttonBox" style={{ width: "100%" }}>
          <button className="mid-btn add-chat-btn" onClick={addNewChat}>
            <Image
              src="/assets/icons/plus-icon.svg"
              alt="New chat"
              width={20}
              height={20}
              className="add-btn"
            />
            <p className="newChat-text">New Chat</p>
          </button>
          <button className="mid-btn collapse-btn" onClick={toggleSidebar}>
            <Image
              src={
                collapse
                  ? "/assets/icons/Side menu.svg"
                  : "/assets/icons/collapse-menu.svg"
              }
              alt="Toggle sidebar"
              width={20}
              height={20}
              className="add-btn"
            />
          </button>
        </div>

        <div className="recent-chats">
          <h2>Recent Chats</h2>
          <div
            className="query"
            id="chats-menu"
            style={{ height: showChats ? `${6 * nChats}rem` : "18rem" }}
          >
            {recentChats.map((chat, index) => (
              <div
                key={index}
                className={`chat-title ${index === activeChat ? "active-chat" : ""}`}
                onClick={() => setActiveChat(index)}
              >
                <button className="chatIcon">
                  <Image
                    src="/assets/icons/msg-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </button>
                <p>{chat.title}</p>
                <button className="chatIcon deleteChat">
                  <Image
                    src="/assets/icons/msg-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="show-more" onClick={toggleShowChats}>
            <button
              className="chatIcon"
              id="showChats"
              style={{ height: "31px" }}
            >
              <Image
                src="/assets/icons/show-more.svg"
                alt=""
                width={16}
                height={16}
              />
            </button>
            <p>Show {showChats ? "less" : "more"}</p>
          </div>
        </div>
      </div>

      <div className="lower-side">
        <h2>Let&apos;s make today a great day for you!</h2>
        <Image
          src="/assets/images/Lower-Sidebar-Vector.png"
          alt=""
          width={280}
          height={160}
          style={{ width: "95%" }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
