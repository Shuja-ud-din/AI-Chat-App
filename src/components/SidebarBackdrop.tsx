"use client";

import { useAppContext } from "../context/AppData";

const SidebarBackdrop = () => {
  const { mobileSidebarOpen, setMobileSidebarOpen } = useAppContext();

  return (
    <div
      className={`sidebar-backdrop${mobileSidebarOpen ? " active" : ""}`}
      onClick={() => setMobileSidebarOpen(false)}
      aria-hidden="true"
    />
  );
};

export default SidebarBackdrop;
