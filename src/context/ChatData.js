import React, { createContext, useState } from 'react'

const ChatContext = createContext()

const ChatData = ({ children }) => {
    const [messages, setMessages] = useState([]);

    const dataObject = {
        messages,
        setMessages
    }
    return (
        <ChatContext.Provider value={dataObject}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatData
export { ChatContext }