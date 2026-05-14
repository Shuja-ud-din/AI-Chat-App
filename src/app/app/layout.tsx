import AppData from "../../context/AppData";
import Sidebar from "../../components/Sidebar";
import MainBar from "../../components/MainBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppData>
      <Sidebar />
      <div className="main" id="main">
        <MainBar />
        {children}
      </div>
    </AppData>
  );
}
