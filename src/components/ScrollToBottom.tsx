"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowDown } from "lucide-react";

const THRESHOLD = 120;

const ScrollToBottom = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const checkScroll = useCallback(() => {
    const distanceFromBottom =
      document.documentElement.scrollHeight -
      window.innerHeight -
      window.scrollY;
    setShow(distanceFromBottom > THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  if (pathname === "/app") return null;

  return (
    <button
      onClick={scrollToBottom}
      aria-label="Scroll to bottom"
      className="scroll-to-bottom-btn"
      style={{
        width: "4rem",
        height: "4rem",
        borderRadius: "50%",
        background: "#fff",
        border: "1.5px solid #e5e5e5",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transform: show ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 6px 20px rgba(110,108,200,0.2)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#c8c6ee";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 4px 16px rgba(0,0,0,0.10)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e5e5";
      }}
    >
      <ArrowDown size={17} strokeWidth={2.5} color="#6e6cc8" />
    </button>
  );
};

export default ScrollToBottom;
