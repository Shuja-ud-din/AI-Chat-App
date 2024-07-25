import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import AppView from "./view/AppView";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/app/*" element={<AppView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
