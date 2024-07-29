import { useContext } from "react";
import { AppContext } from "../context/AppData";
import {
  aramcoKnowledgeQuickActions,
  worldKnowledgeQuickActions,
} from "../utils/chatQuickActions";
import Banner from "../components/Banner";
import ChatQuickActions from "../components/ChatQuickActions";
import InputBar from "../components/InputBar";
import Chat from "../components/messageBox/Chat";

const ChatPage = () => {
  const { activeTab, conditional2 } = useContext(AppContext);

  const getActiveQuickActions = () => {
    const quickActions = {
      world_knowledge: worldKnowledgeQuickActions,
      aramco_knowledge: aramcoKnowledgeQuickActions,
    };

    // @ts-ignore
    return quickActions[activeTab];
  };

  return (
    <div className="chat-interface">
      {conditional2 && (
        <>
          <Banner />
          <ChatQuickActions quickActions={getActiveQuickActions()} />
        </>
      )}
      <Chat />
      <InputBar />
    </div>
  );
};

export default ChatPage;
