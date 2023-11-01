import "../App";
import React from 'react';
import logo from "../assets/images/logo.png";
import AskMe from "../assets/icons/ask-me.svg";
import refreshIcon from '../assets/icons/refresh.svg'
import settingsIcon from '../assets/icons/settings.svg'
import logoutIcon from '../assets/icons/logout.svg'


const MainBar = () => {
    return (
        <div className="main-top">
            <div className="main-inner">
                <div className="content-box" id="hideOnSub1">
                    <div className="main-top-upper">
                        <img src={logo} alt="" className="main-logo" />
                        <h2 >
                            Welcome to <span className="lorem-para">Lorem Ipsum</span> 👋
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
                    </div>
                    <div className="icon-box">
                        <button className="mid-btn">
                            <img src={refreshIcon} />
                        </button>
                        <button className="mid-btn">
                            <img src={settingsIcon} />
                        </button>
                        <button className="mid-btn">
                            <img src={logoutIcon} />
                        </button>
                    </div>
                </div>
                <div className="main-btns">
                    <button className="first-btn">
                        <img src={logo} alt="" />
                        Internal Knowledge
                    </button>
                    <button>
                        <img src={AskMe} alt="" />
                        Internal Knowledge
                    </button>
                </div>
            </div>
        </div>
    )

}
export default MainBar;