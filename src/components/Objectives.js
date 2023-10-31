import React from 'react';
import "../App";
import EnterIcon from "../assets/icons/enter-icon.svg";

const Objectives = () => {

    return (

        <div className="btn-section">
            <div className="individual-btn-section">
                <div className="content">
                    <h3>Objectives and Key Results</h3>
                    <p>Let us show you the your OKRs.</p>
                </div>
                <div className="enter-btn">
                    <img src={EnterIcon} alt="" />
                </div>
            </div>

            <div className="individual-btn-section">
                <div className="content">
                    <h3>Objectives and Key Results</h3>
                    <p>Let us show you the your OKRs.</p>
                </div>
                <div className="enter-btn">
                    <img src={EnterIcon} alt="" />
                </div>
            </div>

            <div className="individual-btn-section">
                <div className="content">
                    <h3>Objectives and Key Results</h3>
                    <p>Let us show you the your OKRs.</p>
                </div>
                <div className="enter-btn">
                    <img src={EnterIcon} alt="" />
                </div>
            </div>
        </div>

    )
}
export default Objectives;