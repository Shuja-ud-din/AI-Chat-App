"use client";

import { useState } from "react";
import Image from "next/image";
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
      <Image
        src="/assets/icons/cross-main.svg"
        alt="Close"
        width={16}
        height={16}
        className="crossIcon absolute top-[1.5rem] right-[1.5rem] cursor-pointer"
      />
    </div>
  );
};

export default FeedbackResponse;
