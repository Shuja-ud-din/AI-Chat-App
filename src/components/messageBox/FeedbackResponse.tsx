import React, { useState } from 'react';
import Cross from "../../assets/icons/cross-main.svg";

// Define types for the feedback and buttons
interface Feedback {
    response?: string;
    buttons: string[];
}

interface FeedbackResponseProps {
    feedback: Feedback;
}

const FeedbackResponse: React.FC<FeedbackResponseProps> = ({ feedback }) => {
    const [renderFeedbackButton, setRenderFeedbackButton] = useState(true);

    return (
        <div className="main-mid feedback-box">
            {
                renderFeedbackButton ? (
                    <>
                        <p>{feedback && feedback.response}</p>
                        <div className="feedback-btns">
                            {feedback && feedback.buttons.map((text, index) => (
                                <button key={index} className="outline-btn" onClick={() => setRenderFeedbackButton(false)}>
                                    {text}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Thanks for the valuable feedback!</p>
                )
            }
            <img src={Cross} className="crossIcon" alt="loading" />
        </div>
    );
};

export default FeedbackResponse;
