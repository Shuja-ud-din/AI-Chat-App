import React from 'react'
import logo from "../assets/images/logo.png";
import AskMe from "../assets/icons/ask-me.svg";

const StaticBar = () => {
    return (
        <>
            <div className="main-btns static-top">
                <button className="first-btn">
                    <img src={logo} alt="" />
                    Internal Knowledge
                </button>
                <button>
                    <img src={AskMe} alt="" />
                    Internal Knowledge
                </button>
            </div>
        </>
    )
}

export default StaticBar