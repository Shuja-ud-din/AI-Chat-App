import React, { createContext, useState } from "react";

// interface IContextProps {
//   messages: string[];
//   setMessages: React.Dispatch<React.SetStateAction<any>>;
//   activeTab: string;
//   setActiveTab: React.Dispatch<React.SetStateAction<string>>;
//   conditional: boolean;
//   setConditional: React.Dispatch<React.SetStateAction<boolean>>;
//   conditional2: boolean;
//   setConditional2: React.Dispatch<React.SetStateAction<boolean>>;
// }

const AppContext = createContext<any | undefined>({
  messages: [],
  setMessages: () => {},
  activeTab: "",
  setActiveTab: () => {},
  conditional: false,
  setConditional: () => {},
  conditional2: false,
  setConditional2: () => {},
});

interface IProps {
  children: React.ReactNode;
}

const AppData = ({ children }: IProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("aramco_knowledge");
  const [conditional, setConditional] = useState<boolean>(false);
  const [conditional2, setConditional2] = useState<boolean>(true);

  const dataObject = {
    messages,
    setMessages,
    activeTab,
    setActiveTab,
    conditional,
    setConditional,
    conditional2,
    setConditional2,
  };
  return (
    <AppContext.Provider value={dataObject}>{children}</AppContext.Provider>
  );
};

export default AppData;
export { AppContext };
