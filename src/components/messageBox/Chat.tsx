"use client";

import React from "react";
import MessageBox from "./MessageBox";
import FeedbackResponse from "./FeedbackResponse";
import { useAppContext, type Feedback } from "../../context/AppData";

const Chat = () => {
  const { messages } = useAppContext();

  return (
    <>
      {messages.map((message, index) => {
        const feedback = message.feedback as Feedback;
        return (
          <React.Fragment key={index}>
            <div className="text-container">
              <h3 className="mid-btn">F</h3>
              <p>{message.messageText}</p>
            </div>
            <div className="main-mid response-box">
              <MessageBox answerIndex={index} />
              {feedback.response && feedback.buttons && (
                <FeedbackResponse
                  feedback={feedback as { response: string; buttons: string[] }}
                />
              )}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Chat;
