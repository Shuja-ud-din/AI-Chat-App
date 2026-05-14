"use client";

import React, { createContext, useState, useContext } from "react";

export interface Feedback {
  response?: string;
  buttons?: string[];
  [key: string]: unknown;
}

export interface Message {
  messageText: string;
  feedback: Feedback;
}

interface AppContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;

  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  conditional: boolean;
  setConditional: React.Dispatch<React.SetStateAction<boolean>>;
  conditional2: boolean;
  setConditional2: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType>({
  messages: [],
  setMessages: () => {},
  activeTab: "aramco_knowledge",
  setActiveTab: () => {},
  conditional: false,
  setConditional: () => {},
  conditional2: true,
  setConditional2: () => {},
});

export const useAppContext = () => useContext(AppContext);

const AppData = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState<string>("aramco_knowledge");
  const [conditional, setConditional] = useState<boolean>(false);
  const [conditional2, setConditional2] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        messages,
        setMessages,
        activeTab,
        setActiveTab,
        conditional,
        setConditional,
        conditional2,
        setConditional2,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppData;
export { AppContext };
