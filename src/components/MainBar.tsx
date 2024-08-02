import "../App";
import { useContext } from "react";
import AskMe from "../assets/icons/ask-me.svg";
import refreshIcon from "../assets/icons/refresh.svg";
import settingsIcon from "../assets/icons/settings.svg";
import logoutIcon from "../assets/icons/logout.svg";
import AramcoIcon from "../assets/icons/Aramco_icon.svg";
import WorldIcon from "../assets/icons/world-icon.svg";
import { AppContext } from "../context/AppData";
import { tabs } from "../utils/chatTabs";
import acromoBanner from "../assets/images/acromoBg.png";
import worldBanner from "../assets/images/bannerBg2.png";

const MainBar = () => {
  const { activeTab, setActiveTab, conditional2 } = useContext(AppContext);
  console.log(activeTab);

  return (
    <div className="main-top">
      <div className="main-inner">
        {conditional2 && (
          <div
            className="content-box"
            style={{
              backgroundImage: `url(${activeTab === "aramco_knowledge" ? acromoBanner : worldBanner
                })`,
            }}
          >
            <div className="main-top-upper">
              <img src={AskMe} alt="" className="main-logo" />
              <h2>
                Welcome to <span className="lorem-para">MetaBrain</span> 👋
              </h2>
              <p>
                Explore our knowledge bases. Dive into the heart of Aramco with
                Aramco Knowledge or embark on a world of information with World
                Knowledge.
              </p>
            </div>
            <div className="icon-box">
              <button className="mid-btn">
                <img src={refreshIcon} onClick={() => window.location.reload()} />
              </button>
              <button className="mid-btn">
                <img src={settingsIcon} />
              </button>
              <button className="mid-btn">
                <img src={logoutIcon} />
              </button>
            </div>
          </div>
        )}
        <div className="main-btns h-auto flex flex-wrap xl:flex-nowrap lg:flex-nowrap justify-between">
          <div className="flex flex-col md:flex-row w-full lg:w-[50%] mb-4 lg:mb-0">
            {tabs.map(({ label, value }, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(value)}
                className={`flex items-center w-full md:w-auto mb-2 md:mb-0 ${activeTab === value && "active-btn"}`}
              >
                <img src={index === 0 ? AramcoIcon : WorldIcon} alt="" className="mr-2" />
                {label}
              </button>
            ))}
          </div>
          {!conditional2 && (
            <div className="staticIcons flex  md:flex-row w-full lg:w-[50%] lg:flex-nowrap">
              <button className="mid-btn  md:w-auto mb-2 md:mb-0">
                <img src={settingsIcon} alt="Settings" />
              </button>
              <button className="mid-btn md:w-auto">
                <img src={logoutIcon} alt="Logout" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
export default MainBar;
