import "../App";
import React from 'react';
import logo from "../assets/images/logo.png";
import AskMe from "../assets/icons/ask-me.svg";


const MainBar = () => {
    return (
        <div className="main-top">
            <div className="main-inner">
                <div className="content-box">
                    <div className="main-top-upper">
                        <img src={logo} alt="" className="main-logo" />
                        <h2 >
                            Welcome to <span className="lorem-para">Lorem Ipsum</span> 👋
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                        </p>
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