"use client";

import { useAppContext } from "../../context/AppData";
import {
  aramcoKnowledgeQuickActions,
  worldKnowledgeQuickActions,
} from "../../utils/chatQuickActions";
import Banner from "../../components/Banner";
import ChatQuickActions from "../../components/ChatQuickActions";
import InputBar from "../../components/InputBar";

const quickActionsMap: Record<string, { title: string; description: string }[]> = {
  world_knowledge: worldKnowledgeQuickActions,
  aramco_knowledge: aramcoKnowledgeQuickActions,
};

export default function WelcomePage() {
  const { activeTab } = useAppContext();

  return (
    <div className="chat-interface">
      <Banner />
      <ChatQuickActions
        quickActions={
          quickActionsMap[activeTab] ?? aramcoKnowledgeQuickActions
        }
      />
      <InputBar />
    </div>
  );
}
