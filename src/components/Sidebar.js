import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
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
    }

    const toggleShowChats = () => {
        document.getElementById('chats-menu').classList.toggle('showLess');
        document.getElementById('showChats').classList.toggle('rotate-icon');
        setShowChats(!showChats);
    }


    return (
        <div className="sidebar" id='toggleItem'>
            {/* <div className='stickSidebar'> */}
            <div className="upper-side">
                <div className='columnFlex'>
                    <div className="upper-side-top">
                        <img src={logo} alt="" className="logo" />
                        <span className="brand">Lorem Ipsum</span>
                        <span className="version">Beta</span>
                    </div>
                    <p className="tagline">Powered by Lorem Ipsum</p>
                </div>
                <div className='flex-box buttonBox' style={{ width: '100%' }}>
                    <button className="mid-btn add-chat-btn" onClick={addNewChat}>
                        <img src={PlusIcon} alt="" className="add-btn" />
                        <p className='newChat-text'>New Chat</p>
                    </button>
                    <button className="mid-btn collapse-btn" onClick={toggleSidebar}>
                        <img src={collapse} alt="" className="add-btn" />
                    </button>
                </div>
                <div className="recent-chats">
                    <h2>Recent Chats</h2>
                    <div className="query showLess" id='chats-menu'>
                        {
                            recentChats.map((chat, index) => {
                                let activeClass = '';
                                if (index === activeChat) {
                                    activeClass = 'active-chat'
                                }
                                return (
                                    <div
                                        className={'chat-title ' + activeClass}
                                        onClick={() => switchChat(index)}
                                    >
                                        <button className="chatIcon" >
                                            <img src={chatIcon} />
                                        </button>
                                        <p>{chat.title}</p>
                                        <button className="chatIcon deleteChat " >
                                            <img src={chatIcon} />
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='show-more' onClick={toggleShowChats}>
                        <button className="chatIcon" id='showChats' style={{ height: '31px' }}>
                            <img src={showMore} />
                        </button>
                        <p>Show
                            {(showChats) ? ' less' : ' more'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="lower-side">
                <h2>Let's make today a great day for you!</h2>
                <img src={LowerSidebarVector} alt="" />
            </div>
        </div>
        // </div>
    )
}

export default Sidebar