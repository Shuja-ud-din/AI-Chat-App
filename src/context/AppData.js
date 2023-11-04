import React, { createContext, useState } from "react";
const AppContext = createContext();

const AppData = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState("aramco_knowledge");
  const [conditional, setConditional] = useState(false);

  const dataObject = {
    messages,
    setMessages,
    activeTab,
    setActiveTab,
    conditional,
    setConditional
  };
  return (
    <AppContext.Provider value={dataObject}>{children}</AppContext.Provider>
  );
};

export default AppData;
export { AppContext };
