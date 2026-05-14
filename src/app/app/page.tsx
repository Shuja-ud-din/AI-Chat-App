"use client";

import { useAppContext } from "../../context/AppData";
import {
  aramcoKnowledgeQuickActions,
  worldKnowledgeQuickActions,
} from "../../utils/chatQuickActions";
import Banner from "../../components/Banner";
import ChatQuickActions from "../../components/ChatQuickActions";
import InputBar from "../../components/InputBar";
import Chat from "../../components/messageBox/Chat";

const quickActionsMap: Record<string, { title: string; description: string }[]> = {
  world_knowledge: worldKnowledgeQuickActions,
  aramco_knowledge: aramcoKnowledgeQuickActions,
};

export default function ChatPage() {
  const { activeTab, conditional2 } = useAppContext();

  return (
    <div className="chat-interface">
      {conditional2 && (
        <>
          <Banner />
          <ChatQuickActions quickActions={quickActionsMap[activeTab] ?? aramcoKnowledgeQuickActions} />
        </>
      )}
      <Chat />
      <InputBar />
    </div>
  );
}
