"use client";

import {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { Paperclip, ArrowUp, X, FileText } from "lucide-react";
import { useAppContext } from "../context/AppData";

const InputBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [scroller, setScroller] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { messages, setMessages, setConditional, setConditional2 } =
    useAppContext();

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 200) + "px";
  }, [message]);

  useEffect(() => {
    document
      .getElementById("main")
      ?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [scroller]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([...messages, { messageText: message, feedback: {} }]);
    setTimeout(() => setConditional(true), 3000);
    setMessage("");
    setFiles([]);
    setConditional2(false);
    setScroller((s) => s + 1);
    if (pathname === "/app") {
      router.push("/app/session");
    } else {
      document.querySelector(".main-btns")?.classList.add("afterSubmit");
      document.querySelector(".chat-interface")?.classList.add("margin6");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles((prev) => [...prev, ...Array.from(e.target.files || [])]);
    e.target.value = "";
  };

  const hasContent = message.trim().length > 0;

  return (
    <div className="input-bar-wrapper">
      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          pointerEvents: "auto",
        }}
      >
        {/* File chips */}
        {files.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.8rem",
              marginBottom: "0.8rem",
              padding: "1rem 1.4rem",
              background: "#fff",
              borderRadius: "1.4rem",
              border: "1px solid #e5e5e5",
            }}
          >
            {files.map((file, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "#f5f3ff",
                  border: "1px solid #d8d6f0",
                  borderRadius: "9999px",
                  padding: "0.4rem 1rem 0.4rem 0.8rem",
                  fontSize: "1.2rem",
                  color: "#6e6cc8",
                  fontWeight: 500,
                }}
              >
                <FileText size={12} strokeWidth={2} color="#6e6cc8" />
                <span
                  style={{
                    maxWidth: "14rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {file.name}
                </span>
                <button
                  onClick={() =>
                    setFiles((prev) => prev.filter((_, idx) => idx !== i))
                  }
                  style={{ display: "flex", lineHeight: 1, opacity: 0.7 }}
                >
                  <X size={11} strokeWidth={3} color="#6e6cc8" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Main input container */}
        <div
          style={{
            background: "#fff",
            borderRadius: "2rem",
            border: "1px solid #e5e5e5",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            padding: "1.2rem 1.2rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}
        >
          {/* Textarea */}
          <textarea
            id="messageField"
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message MetaBrain"
            rows={1}
            style={{
              resize: "none",
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "1.5rem",
              lineHeight: "1.6",
              color: "#1d1d1f",
              fontFamily: "inherit",
              width: "100%",
              minHeight: "2.4rem",
              maxHeight: "20rem",
              padding: "0.2rem 0.6rem",
            }}
          />

          {/* Bottom toolbar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left tools */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <button
                onClick={() => fileInputRef.current?.click()}
                title="Attach files"
                style={{
                  width: "3.4rem",
                  height: "3.4rem",
                  borderRadius: "50%",
                  border: "1px solid #e5e5e5",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "#f5f5f5")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "transparent")
                }
              >
                <Paperclip size={16} strokeWidth={2} color="#555" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>

            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={!hasContent}
              title="Send message"
              style={{
                width: "3.4rem",
                height: "3.4rem",
                borderRadius: "50%",
                border: "none",
                cursor: hasContent ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.15s ease",
                background: hasContent ? "#6e6cc8" : "#e5e5e5",
              }}
            >
              <ArrowUp
                size={17}
                strokeWidth={2.5}
                color={hasContent ? "#fff" : "#aaa"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
