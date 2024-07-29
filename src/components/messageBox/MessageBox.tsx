import React, { useContext, useState } from "react";
import logo from "../../assets/icons/MetaBrain_icon.svg";
// import CopyIcon from "../customs/icons/CopyIcon";
// import LikeIcon from "../customs/icons/LikeIcon";
// import DislikeIcon from "../customs/icons/DislikeIcon";
import { AppContext } from "../../context/AppData";
import { Snackbar } from "@mui/material";

interface Message {
  feedback: Record<string, unknown>;
}

interface AppContextType {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  conditional: boolean;
}

interface SnackState {
  open: boolean;
  vertical: "top" | "bottom";
  horizontal: "left" | "right" | "center";
}

interface MessageBoxProps {
  answerIndex: number;
}

const MessageBox: React.FC<MessageBoxProps> = ({ answerIndex }) => {
  const { messages, setMessages, conditional } = useContext(AppContext) as AppContextType;

  const goodFeedback = {
    response: "We’re happy to hear that, what made the response good? (optional)",
    buttons: ["Correct answer", "Response is helpful", "Easy to grasp"],
  };

  const badFeedback = {
    response: "Sorry to hear that, what was the issue with this response? (optional)",
    buttons: ["Incorrect answer", "Response isn't helpful", "Offensive / Harmful"],
  };

  const [color1, setColor1] = useState<string>("black");
  const [color2, setColor2] = useState<string>("black");
  const [color3, setColor3] = useState<string>("black");
  const [openSnack, setOpenSnack] = useState<SnackState>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const activeIcon = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter("white");
  };

  const deactiveIcon = (setter: React.Dispatch<React.SetStateAction<string>>) => {
    setter("black");
  };

  const likeAnswer = () => {
    const updatedArr = messages.map((message, index) => {
      if (index === answerIndex) return { ...message, feedback: goodFeedback };
      return message;
    });
    setMessages(updatedArr);
  };

  const disLikeAnswer = () => {
    const updatedArr = messages.map((message, index) => {
      if (index === answerIndex) return { ...message, feedback: badFeedback };
      return message;
    });
    setMessages(updatedArr);
  };

  const copyText = (textId: string) => {
    const textBox = document.getElementById(textId)?.innerHTML;
    if (textBox) {
      navigator.clipboard.writeText(textBox);
      setOpenSnack({ ...openSnack, open: true });
    }
  };

  return (
    <div className="response-container">
      <img
        src={logo}
        style={{ borderRadius: "50px", height: "40px", width: "40px" }}
        alt="loading"
      />
      {conditional && (
        <p id={`response${answerIndex + 1}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ut
          ullam iusto aspernatur quibusdam eaque aliquam ratione ad architecto
          dolores non illo facilis error velit culpa, iste magni quae quas!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed
          incidunt omnis dolores harum est magni ipsam ipsa laboriosam error
          delectus modi, expedita quos molestias ducimus eos earum porro veniam
          temporibus quidem eaque! Perferendis perspiciatis fugit doloremque
          mollitia aliquid accusamus.
        </p>
      )}
      {conditional && (
        <div className="response-icons">
          <button
            onMouseOver={() => activeIcon(setColor1)}
            onMouseOut={() => deactiveIcon(setColor1)}
            onClick={likeAnswer}
          >
            {/* <LikeIcon color={color1} /> */}
          </button>
          <button
            onMouseOver={() => activeIcon(setColor2)}
            onMouseOut={() => deactiveIcon(setColor2)}
            onClick={disLikeAnswer}
          >
            {/* <DislikeIcon color={color2} /> */}
          </button>
          <button
            className=""
            onMouseOver={() => activeIcon(setColor3)}
            onMouseOut={() => deactiveIcon(setColor3)}
            onClick={() => copyText(`response${answerIndex + 1}`)}
          >
            {/* <CopyIcon color={color3} /> */}
          </button>
          <Snackbar
            anchorOrigin={{
              vertical: openSnack.vertical,
              horizontal: openSnack.horizontal,
            }}
            open={openSnack.open}
            onClose={() => setOpenSnack({ ...openSnack, open: false })}
            message="Text Copied"
            key={openSnack.vertical + openSnack.horizontal}
          />
        </div>
      )}
    </div>
  );
};

export default MessageBox;
