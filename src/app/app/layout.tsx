import AppData from "../../context/AppData";
import Sidebar from "../../components/Sidebar";
import MainBar from "../../components/MainBar";
import ScrollToBottom from "../../components/ScrollToBottom";
import SidebarBackdrop from "../../components/SidebarBackdrop";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppData>
      <Sidebar />
      <SidebarBackdrop />
      <div className="main" id="main">
        <MainBar />
        {children}
      </div>
      <ScrollToBottom />
    </AppData>
  );
}
