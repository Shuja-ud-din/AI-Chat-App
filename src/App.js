import "./App.css";
import AppLayout from "./components/AppLayout";
import ChatLayout from "./components/ChatLayout";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <ChatLayout />
      </AppLayout>
    </div>
  );
}

export default App;
