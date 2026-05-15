"use client";

import { useState } from "react";
import Image from "next/image";
import { ThumbsUp, ThumbsDown, Copy } from "lucide-react";
import { useAppContext, type Feedback } from "../../context/AppData";
import MarkdownRenderer from "../MarkdownRenderer";

const goodFeedback: Feedback = {
  response: "We're happy to hear that, what made the response good? (optional)",
  buttons: ["Correct answer", "Response is helpful", "Easy to grasp"],
};

const badFeedback: Feedback = {
  response: "Sorry to hear that, what was the issue with this response? (optional)",
  buttons: ["Incorrect answer", "Response isn't helpful", "Offensive / Harmful"],
};

const MessageBox = ({ answerIndex }: { answerIndex: number }) => {
  const { messages, setMessages, conditional } = useAppContext();
  const [toastVisible, setToastVisible] = useState(false);

  const likeAnswer = () => {
    setMessages(
      messages.map((msg, i) =>
        i === answerIndex ? { ...msg, feedback: goodFeedback } : msg
      )
    );
  };

  const dislikeAnswer = () => {
    setMessages(
      messages.map((msg, i) =>
        i === answerIndex ? { ...msg, feedback: badFeedback } : msg
      )
    );
  };

  const copyText = () => {
    const el = document.getElementById(`response${answerIndex + 1}`);
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    }
  };

  return (
    <div className="response-container">
      <Image
        src="/assets/icons/MetaBrain_icon.svg"
        alt="MetaBrain"
        width={40}
        height={40}
        style={{ borderRadius: "50px" }}
      />
      {conditional && (
        <div id={`response${answerIndex + 1}`} style={{ flex: 1, minWidth: 0 }}>
          <MarkdownRenderer content={`Based on your query, here is the information retrieved from the **Aramco Knowledge Base**:

> The requested data has been processed and summarized below.

- Aramco Knowledge Base is up to date as of **Q4 2024**
- Results are filtered based on your **access permissions**
- For detailed reports, contact your **Knowledge Manager**`} />
        </div>
      )}
      {conditional && (
        <div className="response-icons">
          <button onClick={likeAnswer} title="Like">
            <ThumbsUp size={18} strokeWidth={2} />
          </button>
          <button onClick={dislikeAnswer} title="Dislike">
            <ThumbsDown size={18} strokeWidth={2} />
          </button>
          <button onClick={copyText} title="Copy">
            <Copy size={18} strokeWidth={2} />
          </button>
        </div>
      )}
      {toastVisible && <div className="snack-toast">Text Copied</div>}
    </div>
  );
};

export default MessageBox;
