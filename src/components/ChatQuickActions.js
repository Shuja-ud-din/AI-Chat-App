import React from "react";
import "../App";
import EnterIcon from "../assets/icons/enter-icon.svg";

const ChatQuickActions = ({ quickActions }) => {
  const handleActiveAction = (action) => {
    console.log("action => ", action);
  };
  return (
    <div className="btn-section">
      {quickActions.map((action) => (
        <div className="individual-btn-section" onClick={handleActiveAction}>
          <div className="content">
            <h3>{action.title}</h3>
            <p>{action.description}</p>
          </div>
          <div className="enter-btn">
            <img src={EnterIcon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ChatQuickActions;
