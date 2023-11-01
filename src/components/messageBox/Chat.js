import React, { useContext, useState } from 'react'
import MessageBox from './MessageBox'
import { ChatContext } from '../../context/ChatData'
import FeedbackResponse from './FeedbackResponse';

const Chat = () => {

    const { messages } = useContext(ChatContext);

    return (
        <>
            {
                messages.map((message, index) => {
                    return (
                        <>
                            <div className='text-container' >
                                <h3 className='mid-btn'>F</h3>
                                <p>{message.messageText}</p>
                            </div>
                            <div className='main-mid response-box'>
                                <MessageBox key={index} answerIndex={index} />
                                {message.feedback.response && <FeedbackResponse feedback={message.feedback} />}
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Chat