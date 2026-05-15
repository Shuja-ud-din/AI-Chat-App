"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ThumbsUp, ThumbsDown, Copy, Check } from "lucide-react";
import { getChatById } from "../../../data/chats";
import { useAppContext } from "../../../context/AppData";
import Chat from "../../../components/messageBox/Chat";
import InputBar from "../../../components/InputBar";
import MarkdownRenderer from "../../../components/MarkdownRenderer";

interface PageProps {
  params: Promise<{ chatId: string }>;
}

export default function ChatPage({ params }: PageProps) {
  const { chatId } = use(params);
  const router = useRouter();
  const { messages } = useAppContext();

  const staticChat = getChatById(chatId);
  const isSession = chatId === "session";

  useEffect(() => {
    if (!staticChat && !isSession && messages.length === 0) {
      router.replace("/app");
    }
  }, [staticChat, isSession, messages.length, router]);

  if (!staticChat && !isSession && messages.length === 0) return null;

  return (
    <div className="chat-interface">
      {staticChat ? (
        <StaticMessages messages={staticChat.messages} />
      ) : (
        <Chat />
      )}
      <InputBar />
    </div>
  );
}

function AssistantMessage({
  content,
  index,
}: {
  content: string;
  index: number;
}) {
  const [liked, setLiked] = useState<"up" | "down" | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnBase: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "0.5rem",
    transition: "background 0.15s",
    color: "#9090b0",
  };

  return (
    <div className="main-mid response-box">
      <div className="response-container">
        <Image
          src="/assets/icons/MetaBrain_icon.svg"
          alt="MetaBrain"
          width={40}
          height={40}
          style={{ borderRadius: "50px", flexShrink: 0 }}
        />
        <div style={{ flex: 1, minWidth: 0, padding: "0 1rem" }}>
          <MarkdownRenderer content={content} />
        </div>
      </div>

      {/* Action buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.4rem 3rem 1.4rem",
        }}
      >
        <button
          style={{
            ...btnBase,
            color: liked === "up" ? "#6e6cc8" : "#9090b0",
            background: liked === "up" ? "#f0effc" : "transparent",
          }}
          title="Good response"
          onClick={() => setLiked(liked === "up" ? null : "up")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              liked === "up" ? "#e8e7f8" : "#f5f5f8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              liked === "up" ? "#f0effc" : "transparent")
          }
        >
          <ThumbsUp size={15} strokeWidth={2} />
        </button>

        <button
          style={{
            ...btnBase,
            color: liked === "down" ? "#e05555" : "#9090b0",
            background: liked === "down" ? "#fef0f0" : "transparent",
          }}
          title="Bad response"
          onClick={() => setLiked(liked === "down" ? null : "down")}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              liked === "down" ? "#fde8e8" : "#f5f5f8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              liked === "down" ? "#fef0f0" : "transparent")
          }
        >
          <ThumbsDown size={15} strokeWidth={2} />
        </button>

        <button
          style={{
            ...btnBase,
            color: copied ? "#22c55e" : "#9090b0",
            background: copied ? "#f0fdf4" : "transparent",
          }}
          title="Copy response"
          onClick={handleCopy}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = copied ? "#e8faf0" : "#f5f5f8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = copied
              ? "#f0fdf4"
              : "transparent")
          }
        >
          {copied ? (
            <Check size={15} strokeWidth={2.5} />
          ) : (
            <Copy size={15} strokeWidth={2} />
          )}
        </button>
      </div>
    </div>
  );
}

function StaticMessages({
  messages,
}: {
  messages: { role: "user" | "assistant"; content: string }[];
}) {
  let assistantIndex = 0;

  return (
    <div style={{ paddingBottom: "4rem" }}>
      {messages.map((msg, i) => {
        if (msg.role === "user") {
          return (
            <div key={i} className="text-container">
              <h3 className="mid-btn">U</h3>
              <p style={{ fontSize: "1.5rem", lineHeight: 1.6 }}>
                {msg.content}
              </p>
            </div>
          );
        }
        return (
          <AssistantMessage
            key={i}
            content={msg.content}
            index={assistantIndex++}
          />
        );
      })}
    </div>
  );
}
