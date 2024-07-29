import React, { useContext } from "react";
import MessageBox from "./MessageBox";
import FeedbackResponse from "./FeedbackResponse";
import { AppContext } from "../../context/AppData";

// Define types for message and feedback
interface Feedback {
  response?: string;
}

interface Message {
  messageText: string;
  feedback: Feedback;
}

interface AppContextType {
  messages: Message[];
}

const Chat: React.FC = () => {
  // Use the context with the defined type
  const { messages } = useContext(AppContext) as AppContextType;

  return (
    <>
      {messages.map((message, index) => (
        <React.Fragment key={index}>
          <div className="text-container">
            <h3 className="mid-btn">F</h3>
            <p>{message.messageText}</p>
          </div>
          <div className="main-mid response-box">
            <MessageBox answerIndex={index} />
            {message.feedback.response && (
              <FeedbackResponse feedback={message.feedback} />
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Chat;
