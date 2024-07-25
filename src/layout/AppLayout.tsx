import MainBar from "../components/MainBar";
import Sidebar from "../components/Sidebar";

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <Sidebar />
      <div className="main" id="main">
        <MainBar />
        {children}
      </div>
    </>
  );
};

export default AppLayout;
