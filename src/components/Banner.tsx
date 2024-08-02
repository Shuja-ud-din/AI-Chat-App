import LowerSidebarVector from "../assets/images/Lower-Sidebar-Vector.png";
import Cross from "../assets/icons/cross-main.svg";
import { useState } from "react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true)
  return (
    <>
      {showBanner &&
        <div className="bg-[#e7eeff] h-[72px] text-black flex items-center px-12 py-6 gap-2 rounded-[24px] my-6  relative">
          <img className="vecIcon mr-2 w-12" src={LowerSidebarVector} alt="loading" />
          <p className="lg:text-[1rem] xl:text-[1.2555rem] sm:text-[1.2555rem] font-medium w-[90%]">
            Ask me a question or ask me to summarize a document for you! While like
            humans, I'm not perfect and have my limitations, your feedback is the
            key to my improvement.
          </p>
          <img src={Cross} onClick={() => setShowBanner(false)} className="w-[3%] crossIcon absolute top-8 right-8 cursor-pointer w-12" alt="loading" />
        </div>

      }</>
  );
};
export default Banner;
