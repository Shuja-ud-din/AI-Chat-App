"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { Feedback } from "../../context/AppData";

const FeedbackResponse = ({
  feedback,
}: {
  feedback: Feedback & { buttons: string[] };
}) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="main-mid feedback-box">
      {submitted ? (
        <p className="text-[1.4rem]">Thanks for the valuable feedback!</p>
      ) : (
        <>
          <p className="text-[1.4rem]">{feedback.response}</p>
          <div className="feedback-btns">
            {feedback.buttons.map((text, index) => (
              <button
                key={index}
                className="outline-btn"
                onClick={() => setSubmitted(true)}
              >
                {text}
              </button>
            ))}
          </div>
        </>
      )}
      <button className="crossIcon absolute top-[1.5rem] right-[1.5rem] cursor-pointer bg-transparent border-none p-1 hover:opacity-70">
        <X size={16} strokeWidth={2.5} color="#6e6e73" />
      </button>
    </div>
  );
};

export default FeedbackResponse;
