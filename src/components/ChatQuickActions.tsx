"use client";

import { ArrowUpRight } from "lucide-react";

interface QuickAction {
  title: string;
  description: string;
}

const ChatQuickActions = ({ quickActions }: { quickActions: QuickAction[] }) => {
  return (
    <div
      className="quick-actions-grid"
    >
      {quickActions.map((action) => (
        <div
          key={action.title}
          onClick={() => console.log("action =>", action)}
          style={{
            background: "#fff",
            border: "1px solid #e8e6f5",
            borderRadius: "1.6rem",
            padding: "2rem",
            cursor: "pointer",
            transition: "box-shadow 0.18s, border-color 0.18s, transform 0.18s",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1.2rem",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.boxShadow = "0 6px 24px rgba(110,108,200,0.13)";
            el.style.borderColor = "#c8c6ee";
            el.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.boxShadow = "none";
            el.style.borderColor = "#e8e6f5";
            el.style.transform = "translateY(0)";
          }}
        >
          {/* Title row */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
            <h3
              className="bg-clip-text text-transparent bg-gradient-to-br from-[#6e6cc8] to-[#7bd8c3]"
              style={{
                fontSize: "1.5rem",
                fontWeight: 600,
                lineHeight: 1.4,
                margin: 0,
                flex: 1,
              }}
            >
              {action.title}
            </h3>
            <div
              style={{
                flexShrink: 0,
                width: "3rem",
                height: "3rem",
                borderRadius: "0.9rem",
                background: "#f4f3fc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6e6cc8",
                transition: "background 0.18s",
              }}
            >
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: "1.3rem",
              color: "#9fa0a6",
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 400,
            }}
          >
            {action.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ChatQuickActions;
