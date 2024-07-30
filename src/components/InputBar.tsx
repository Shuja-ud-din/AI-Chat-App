import React, { useContext, useEffect, useState, ChangeEvent, KeyboardEvent } from "react";
import EnterIcon from "../assets/icons/enter-icon.svg";
import FileUpload from "../assets/icons/upload-file.svg";
import { AppContext } from "../context/AppData";

interface Message {
    messageText: string;
    feedback: Record<string, unknown>;
}

const InputBar: React.FC = () => {
    const [newMessage, setNewMessage] = useState<string>("");
    const [scroller, setScroller] = useState<number>(0);
    const { messages, setMessages, setConditional, setConditional2 } = useContext(AppContext);

    function scrollToBottom() {
        document
            .getElementById("main")
            ?.scrollIntoView({ behavior: "smooth", block: "end" });
    }

    const handleSendMessage = () => {
        setMessages([
            ...messages,
            {
                messageText: newMessage,
                feedback: {},
            },
        ]);

        timerFunction();

        setNewMessage("");
        setConditional2(false);
        setScroller(scroller + 1);

        document.querySelector('.main-btns')?.classList.add('afterSubmit');
        document.querySelector('.chat-interface')?.classList.add('margin6');
    };

    const timerFunction = () => {
        setTimeout(() => {
            setConditional(true);
        }, 3000);
    };

    useEffect(() => {
        scrollToBottom();
    }, [scroller]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="mt-auto w-full flex flex-col items-center justify-center">
            <div className="w-full min-w-[10%] rounded-full flex items-center justify-center fixed top-[90%]">
                <button className="border-none cursor-pointer rounded-full h-[50px] w-[50px] bg-[#fdfdfd]">
                    <img src={FileUpload} alt="Upload" />
                </button>
                <input
                    type="text"
                    value={newMessage}
                    onChange={handleInputChange}
                    placeholder="Enter your question here"
                    onKeyUp={handleKeyUp}
                    className="w-[65%] min-w-[2rem] outline-none rounded-full border border-[#6e6e73] bg-[#fdfdfd] h-[50px] pl-[2.5rem] mx-[2rem] focus:border-[#6e6cc8]"
                />
                <button
                    onClick={() => (newMessage.trim() ? handleSendMessage() : undefined)}
                    className="border-none cursor-pointer rounded-full h-[50px] w-[50px] bg-[#fdfdfd]"
                >
                    <img src={EnterIcon} alt="Send" />
                </button>
            </div>
        </div>
    );
};

export default InputBar;
