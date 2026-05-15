"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { RefreshCw, Settings, LogOut } from "lucide-react";
import { useAppContext } from "../context/AppData";
import { tabs } from "../utils/chatTabs";

const MainBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { activeTab, setActiveTab } = useAppContext();

  const isWelcome = pathname === "/app";

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div className={`main-top${!isWelcome ? " is-chat" : ""}`}>
      <div className="main-inner">
        {isWelcome && (
          <div
            className="content-box"
            style={{
              backgroundImage: `url(${
                activeTab === "aramco_knowledge"
                  ? "/assets/images/acromoBg.png"
                  : "/assets/images/bannerBg2.png"
              })`,
            }}
          >
            <div className="main-top-upper">
              <Image
                src="/assets/icons/ask-me.svg"
                alt=""
                width={80}
                height={40}
                className="main-logo"
              />
              <h2>
                Welcome to <span>MetaBrain</span> 👋
              </h2>
              <p>
                Explore our knowledge bases. Dive into the heart of Aramco with
                Aramco Knowledge or embark on a world of information with World
                Knowledge.
              </p>
            </div>
            <div className="icon-box">
              <button className="mid-btn" onClick={() => window.location.reload()}>
                <RefreshCw size={18} strokeWidth={2} />
              </button>
              <button className="mid-btn">
                <Settings size={18} strokeWidth={2} />
              </button>
              <button className="mid-btn" onClick={handleLogout}>
                <LogOut size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        )}

        <div className="main-btns flex flex-wrap xl:flex-nowrap lg:flex-nowrap justify-between">
          <div className="flex flex-col md:flex-row w-full lg:w-[50%] mb-4 lg:mb-0">
            {tabs.map(({ label, value }, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(value)}
                className={`flex items-center w-full md:w-auto mb-2 md:mb-0 ${
                  activeTab === value ? "active-btn" : ""
                }`}
              >
                <Image
                  src={
                    index === 0
                      ? "/assets/icons/Aramco_icon.svg"
                      : "/assets/icons/world-icon.svg"
                  }
                  alt=""
                  width={28}
                  height={28}
                  className="mr-2"
                />
                {label}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainBar;
