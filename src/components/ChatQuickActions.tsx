import EnterIcon from "../assets/icons/enter-icon.svg";

interface IProps {
  quickActions: {
    title: string;
    description: string;
  }[];
}

const ChatQuickActions = ({ quickActions }: IProps) => {
  const handleActiveAction = (action: any) => {
    console.log("action => ", action);
  };
  return (
    <div className="flex flex-wrap gap-[4rem] lg:mx-[3rem] my-[1.5rem] w-full sm:mx-[0rem]">

      {quickActions.map((action) => (
        <div
          key={action.title}
          className="flex justify-between items-center mt-4 p-8 lg:w-1/4  sm:w-full rounded-3xl bg-white"
          onClick={handleActiveAction}
        >
          <div className="content">
            <h3 className="bg-clip-text text-transparent bg-gradient-to-b from-[#6e6cc8] to-[#7bd8c3] text-2xl font-semibold mb-2.5">
              {action.title}
            </h3>
            <p className="text-lg font-medium text-[#9fa0a6]">
              {action.description}
            </p>
          </div>
          <div className="enter-btn">
            <img src={EnterIcon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatQuickActions;
