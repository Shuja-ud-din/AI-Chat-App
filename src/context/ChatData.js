import React, { createContext, useState } from 'react'
import MainBar from '../components/MainBar';
import Suggestion from '../components/Suggestion';
import Objectives from '../components/Objectives';

const ChatContext = createContext()

const ChatData = ({ children }) => {

    const [messages, setMessages] = useState([]);
    const [mainDiv, setMainDiv] = useState();
    const [renderComs, setRenderComps] = useState(
        <>
            <MainBar />
            <Suggestion />
            <Objectives />
        </>
    )

    const dataObject = {
        messages,
        setMessages,
        mainDiv,
        setMainDiv,
        renderComs,
        setRenderComps
    }
    return (
        <ChatContext.Provider value={dataObject}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatData
export { ChatContext }