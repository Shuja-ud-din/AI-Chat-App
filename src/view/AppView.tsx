import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import ChatPage from "../pages/ChatPage";

const AppView = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<ChatPage />} />
        </Routes>
      </AppLayout>
    </>
  );
};

export default AppView;
