"use client";

import { useState } from "react";
import { Sparkles, X } from "lucide-react";

const Banner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f7f6ff 0%, #f0fdfb 100%)",
        border: "1px solid #e8e6f8",
        borderRadius: "1.6rem",
        padding: "1.4rem 1.8rem",
        display: "flex",
        alignItems: "center",
        gap: "1.4rem",
      }}
    >
      {/* Icon */}
      <div
        style={{
          flexShrink: 0,
          width: "3.8rem",
          height: "3.8rem",
          borderRadius: "1rem",
          background: "linear-gradient(135deg, #6e6cc8 0%, #7bd8c3 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(110,108,200,0.25)",
        }}
      >
        <Sparkles size={16} color="#fff" strokeWidth={2} />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: "1.35rem",
            lineHeight: "1.65",
            color: "#5a5880",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Ask me anything —{" "}
          <span style={{ color: "#1d1d1f", fontWeight: 500 }}>
            document summaries, OKR insights, or knowledge search.
          </span>{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #6e6cc8, #7bd8c3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 600,
            }}
          >
            Your feedback makes me smarter.
          </span>
        </p>
      </div>

      {/* Dismiss */}
      <button
        onClick={() => setVisible(false)}
        style={{
          flexShrink: 0,
          width: "2.8rem",
          height: "2.8rem",
          borderRadius: "0.8rem",
          border: "none",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#aaa",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "#eeedf8")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background =
            "transparent")
        }
      >
        <X size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Banner;
