import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppData from "./context/AppData.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppData>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppData>
  </React.StrictMode>
);
