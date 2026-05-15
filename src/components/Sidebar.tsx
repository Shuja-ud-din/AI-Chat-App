"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Plus,
  PanelLeftClose,
  PanelLeftOpen,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { staticChats } from "../data/chats";
import { useAppContext } from "../context/AppData";

const VISIBLE_COUNT = 3;

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { mobileSidebarOpen, setMobileSidebarOpen } = useAppContext();
  const [showAll, setShowAll] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const visibleChats = showAll ? staticChats : staticChats.slice(0, VISIBLE_COUNT);

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setMobileSidebarOpen(!mobileSidebarOpen);
      return;
    }
    setCollapse(!collapse);
    document.getElementById("main")?.classList.toggle("bodyCollapse");
    document.getElementById("toggleItem")?.classList.toggle("short-sidebar");
    document.getElementById("messageField")?.classList.toggle("long-input");
    document.querySelector(".columnFlex")?.classList.toggle("padd0");
  };

  const activeChatId = (() => {
    const match = pathname.match(/^\/app\/([^/]+)$/);
    return match ? match[1] : null;
  })();

  return (
    <div
      className={`sidebar${mobileSidebarOpen ? " mobile-open" : ""}`}
      id="toggleItem"
    >
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
          <button
            className="mid-btn add-chat-btn"
            onClick={() => {
              router.push("/app");
              setMobileSidebarOpen(false);
            }}
            style={{ gap: "0.8rem" }}
            title="New Chat"
          >
            <Plus size={25} />
            <p className="newChat-text">New Chat</p>
          </button>
          <button className="mid-btn collapse-btn" onClick={toggleSidebar}>
            {collapse ? (
              <PanelLeftOpen size={20} strokeWidth={2} />
            ) : (
              <PanelLeftClose size={20} strokeWidth={2} />
            )}
          </button>
        </div>

        <div className="recent-chats">
          <h2>Recent Chats</h2>
          <div className="query" style={{ height: "auto", overflow: "visible", gap: "0.2rem" }}>
            {visibleChats.map((chat) => {
              const isActive = activeChatId === chat.id;
              return (
                <Link
                  key={chat.id}
                  href={`/app/${chat.id}`}
                  className="chat-title"
                  onClick={() => setMobileSidebarOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    backgroundColor: isActive ? "#e8ecfc" : "transparent",
                    alignItems: "flex-start",
                    padding: "0.8rem",
                    gap: "0.8rem",
                  }}
                >
                  <button
                    className="chatIcon"
                    style={{
                      flexShrink: 0,
                      marginTop: "0.2rem",
                      background: isActive ? "#e0dff8" : "#f2f2f2",
                    }}
                  >
                    <MessageSquare size={15} strokeWidth={2} color={isActive ? "#6e6cc8" : "#888"} />
                  </button>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{
                      fontSize: "1.35rem",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "#3d3baa" : "#1d1d1f",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      lineHeight: 1.4,
                      marginLeft: 0,
                    }}>
                      {chat.title}
                    </p>
                    <p style={{
                      fontSize: "1.15rem",
                      color: "#b0b0b8",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      marginTop: "0.3rem",
                      marginLeft: 0,
                      lineHeight: 1.3,
                      fontWeight: 400,
                    }}>
                      {chat.preview}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {staticChats.length > VISIBLE_COUNT && (
            <div className="show-more" onClick={() => setShowAll((v) => !v)} style={{ cursor: "pointer" }}>
              <button className="chatIcon" style={{ height: "31px" }}>
                {showAll ? <ChevronUp size={16} strokeWidth={2} /> : <ChevronDown size={16} strokeWidth={2} />}
              </button>
              <p>Show {showAll ? "less" : "more"}</p>
            </div>
          )}
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
