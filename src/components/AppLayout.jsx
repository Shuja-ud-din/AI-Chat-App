import Sidebar from "./Sidebar";
import MainBar from "./MainBar";

const AppLayout = ({ children }) => {
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
