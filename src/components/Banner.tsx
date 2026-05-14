"use client";

import { useState } from "react";
import Image from "next/image";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="bg-[#e7eeff] text-black flex items-center px-12 py-6 gap-2 rounded-[24px] my-6 relative">
      <Image
        src="/assets/images/Lower-Sidebar-Vector.png"
        alt=""
        width={48}
        height={48}
        className="mr-2 w-12"
      />
      <p className="lg:text-[1rem] xl:text-[1.2555rem] sm:text-[1.2555rem] font-medium w-[90%]">
        Ask me a question or ask me to summarize a document for you! While like
        humans, I&apos;m not perfect and have my limitations, your feedback is
        the key to my improvement.
      </p>
      <Image
        src="/assets/icons/cross-main.svg"
        alt="Close"
        width={20}
        height={20}
        onClick={() => setShowBanner(false)}
        className="absolute top-8 right-8 cursor-pointer w-[3%] min-w-[20px]"
      />
    </div>
  );
};

export default Banner;
