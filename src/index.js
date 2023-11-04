import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppData from "./context/AppData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppData>
      <App />
    </AppData>
  </React.StrictMode>
);
