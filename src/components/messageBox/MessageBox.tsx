"use client";

import { useState } from "react";
import Image from "next/image";
import { useAppContext, type Feedback } from "../../context/AppData";

const goodFeedback: Feedback = {
  response:
    "We're happy to hear that, what made the response good? (optional)",
  buttons: ["Correct answer", "Response is helpful", "Easy to grasp"],
};

const badFeedback: Feedback = {
  response:
    "Sorry to hear that, what was the issue with this response? (optional)",
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
        <p id={`response${answerIndex + 1}`} className="text-[1.3rem] leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ut
          ullam iusto aspernatur quibusdam eaque aliquam ratione ad architecto
          dolores non illo facilis error velit culpa, iste magni quae quas!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed
          incidunt omnis dolores harum est magni ipsam ipsa laboriosam.
        </p>
      )}
      {conditional && (
        <div className="response-icons">
          <button onClick={likeAnswer} title="Like">
            <Image
              src="/assets/icons/like.svg"
              alt="Like"
              width={20}
              height={20}
            />
          </button>
          <button onClick={dislikeAnswer} title="Dislike">
            <Image
              src="/assets/icons/dislike.svg"
              alt="Dislike"
              width={20}
              height={20}
            />
          </button>
          <button onClick={copyText} title="Copy">
            <Image
              src="/assets/icons/icon _file copy_.svg"
              alt="Copy"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}
      {toastVisible && (
        <div className="snack-toast">Text Copied</div>
      )}
    </div>
  );
};

export default MessageBox;
