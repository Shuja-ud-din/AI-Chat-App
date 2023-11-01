import React from 'react'
import logo from "../assets/images/logo.png";
import AskMe from "../assets/icons/ask-me.svg";
import settingsIcon from '../assets/icons/settings.svg'
import logoutIcon from '../assets/icons/logout.svg'

const StaticBar = () => {
    return (
        <>
            <div className="main-btns static-top">
                <div style={{ display: 'flex' }}>
                    <button className="first-btn">
                        <img src={logo} alt="loading" />
                        Internal Knowledge
                    </button>
                    <button>
                        <img src={AskMe} alt="loading" />
                        Internal Knowledge
                    </button>
                </div>
                <div className="icon-box staticBar">
                    <button className="mid-btn">
                        <img src={settingsIcon} alt="loading" />
                    </button>
                    <button className="mid-btn">
                        <img src={logoutIcon} alt="loading" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default StaticBar