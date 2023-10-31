import React, { useContext } from 'react'
import MessageBox from './MessageBox'
import { ChatContext } from '../../context/ChatData'

const Chat = () => {

    const { messages } = useContext(ChatContext);
    // console.log(messages);

    return (
        <>
            {
                messages.map((message, index) => {
                    return <MessageBox key={index} text={message.messageText} />
                })
            }
        </>
    )
}

export default Chat