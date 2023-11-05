import React, { useState } from 'react'
import logo from "../assets/icons/MetaBrain_icon.svg"
import LowerSidebarVector from "../assets/images/Lower-Sidebar-Vector.png";
import PlusIcon from "../assets/icons/plus-icon.svg";
import collapse from '../assets/icons/collapse-menu.svg'
import chatIcon from '../assets/icons/msg-icon.svg'
import showMore from '../assets/icons/show-more.svg'

const Sidebar = () => {

    const [recentChats, setRecentChats] = useState([
        { title: 'simply dummy text of...' },
        { title: 'make a type specimen...' },
        { title: 'was popularised in the...' },
        { title: 'was popularised in the...' },
        { title: 'was popularised in the...' },
    ]);

    const [activeChat, setActiveChat] = useState(0);
    const [showChats, setShowChats] = useState(false);


    const switchChat = (index) => {
        setActiveChat(index);
    }

    const addNewChat = () => {
        setRecentChats([
            {
                title: 'New Chat...'
            },
            ...recentChats
        ])
    }

    const toggleSidebar = () => {
        document.getElementById('main').classList.toggle('bodyCollapse');
        document.getElementById('toggleItem').classList.toggle('short-sidebar');
        document.getElementById('messageField').classList.toggle('long-input');
        document.querySelector('.columnFlex').classList.toggle('padd0')
    }

    const nChats = recentChats.length;

    const toggleShowChats = () => {
        document.getElementById('showChats').classList.toggle('rotate-icon');
        setShowChats(!showChats);
    }


    return (
        <div className="sidebar" id='toggleItem'>
            {/* <div className='stickSidebar'> */}
            <div className="upper-side">
                <div className='columnFlex'>
                    <div className="upper-side-top">
                        <img src={logo} alt="loading" className="logo" />
                        <span className="brand">MetaBrain</span>
                        <span className="version">Beta</span>
                    </div>
                    <p className="tagline">Powered by Aramco.AI</p>
                </div>
                <div className='flex-box buttonBox' style={{ width: '100%' }}>
                    <button className="mid-btn add-chat-btn" onClick={addNewChat}>
                        <img src={PlusIcon} alt="loading" className="add-btn" />
                        <p className='newChat-text'>New Chat</p>
                    </button>
                    <button className="mid-btn collapse-btn" onClick={toggleSidebar}>
                        <img src={collapse} alt="loading" className="add-btn" />
                    </button>
                </div>
                <div className="recent-chats">
                    <h2>Recent Chats</h2>
                    <div className="query" id='chats-menu' style={{ height: (showChats === true) ? `${6 * nChats}rem` : "18rem" }}>
                        {
                            recentChats.map((chat, index) => {
                                let activeClass = '';
                                if (index === activeChat) {
                                    activeClass = 'active-chat'
                                }
                                return (
                                    <div
                                        key={index}
                                        className={'chat-title ' + activeClass}
                                        onClick={() => switchChat(index)}
                                    >
                                        <button className="chatIcon" >
                                            <img src={chatIcon} alt="loading" />
                                        </button>
                                        <p>{chat.title}</p>
                                        <button className="chatIcon deleteChat " >
                                            <img src={chatIcon} alt="loading" />
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='show-more' onClick={toggleShowChats}>
                        <button className="chatIcon" id='showChats' style={{ height: '31px' }}>
                            <img src={showMore} alt="loading" />
                        </button>
                        <p>Show
                            {(showChats) ? ' less' : ' more'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="lower-side">
                <h2>Let's make today a great day for you!</h2>
                <img src={LowerSidebarVector} alt="loading" />
            </div>
        </div>
    )
}

export default Sidebar