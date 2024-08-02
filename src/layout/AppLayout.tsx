import MainBar from "../components/MainBar";
import Sidebar from "../components/Sidebar";

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: IProps) => {
  return (
    <>
      <Sidebar />
      <div className="main 650px:ml-[0] sm:ml-[0] md:ml-[0] lg:ml-[32rem] xl:ml-[32rem]" id="main">
        <MainBar />
        {children}
      </div>
    </>
  );
};

export default AppLayout;
