"use client";

import Image from "next/image";

interface QuickAction {
  title: string;
  description: string;
}

const ChatQuickActions = ({ quickActions }: { quickActions: QuickAction[] }) => {
  return (
    <div className="flex flex-wrap gap-[4rem] my-[1.5rem] w-full">
      {quickActions.map((action) => (
        <div
          key={action.title}
          className="flex justify-between items-center mt-4 p-8 lg:w-1/4 sm:w-full rounded-3xl bg-white cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => console.log("action =>", action)}
        >
          <div>
            <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-[#6e6cc8] to-[#7bd8c3] text-2xl font-semibold mb-2.5">
              {action.title}
            </h3>
            <p className="text-lg font-medium text-[#9fa0a6]">
              {action.description}
            </p>
          </div>
          <div className="enter-btn ml-4">
            <Image
              src="/assets/icons/enter-icon.svg"
              alt=""
              width={24}
              height={24}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatQuickActions;
