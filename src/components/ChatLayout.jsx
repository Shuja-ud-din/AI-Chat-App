import { useContext } from "react";

import InputBar from "./InputBar";
import Chat from "./messageBox/Chat";
import Banner from "./Banner";
import ChatQuickActions from "./ChatQuickActions";
import { AppContext } from "./../context/AppData";
import {
  aramcoKnowledgeQuickActions,
  worldKnowledgeQuickActions,
} from "./../utils/chatQuickActions";

const ChatLayout = () => {
  const { activeTab } = useContext(AppContext);

  const getActiveQuickActions = () => {
    const quickActions = {
      world_knowledge: worldKnowledgeQuickActions,
      aramco_knowledge: aramcoKnowledgeQuickActions,
    };

    return quickActions[activeTab];
  };

  return (
    <div className="chat-interface">
      <Banner />
      <ChatQuickActions quickActions={getActiveQuickActions()} />
      <Chat />
      <InputBar />
    </div>
  );
};

export default ChatLayout;
