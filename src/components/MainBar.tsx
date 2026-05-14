"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppContext } from "../context/AppData";
import { tabs } from "../utils/chatTabs";

const MainBar = () => {
  const router = useRouter();
  const { activeTab, setActiveTab, conditional2 } = useAppContext();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  };

  return (
    <div className="main-top">
      <div className="main-inner">
        {conditional2 && (
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
              <button
                className="mid-btn"
                onClick={() => window.location.reload()}
              >
                <Image
                  src="/assets/icons/refresh.svg"
                  alt="Refresh"
                  width={20}
                  height={20}
                />
              </button>
              <button className="mid-btn">
                <Image
                  src="/assets/icons/settings.svg"
                  alt="Settings"
                  width={20}
                  height={20}
                />
              </button>
              <button className="mid-btn" onClick={handleLogout}>
                <Image
                  src="/assets/icons/logout.svg"
                  alt="Logout"
                  width={20}
                  height={20}
                />
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

          {!conditional2 && (
            <div className="staticIcons flex md:flex-row w-full lg:w-[50%] lg:flex-nowrap">
              <button className="mid-btn md:w-auto mb-2 md:mb-0">
                <Image
                  src="/assets/icons/settings.svg"
                  alt="Settings"
                  width={20}
                  height={20}
                />
              </button>
              <button className="mid-btn md:w-auto" onClick={handleLogout}>
                <Image
                  src="/assets/icons/logout.svg"
                  alt="Logout"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainBar;
