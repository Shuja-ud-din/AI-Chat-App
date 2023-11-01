import React, { useContext, useState } from 'react'
import logo from '../../assets/images/logo.png'
import CopyIcon from '../customs/icons/CopyIcon'
import LikeIcon from '../customs/icons/LikeIcon'
import DislikeIcon from '../customs/icons/DislikeIcon'
import { ChatContext } from '../../context/ChatData'
import { Snackbar } from '@mui/material'

const MessageBox = ({ answerIndex }) => {

    const { messages, setMessages } = useContext(ChatContext);

    const goodFeedback = {
        response: 'We’re happy to hear that, what made the response good? (optional)',
        buttons: [
            'Correct answer',
            'Response is helpful',
            'Easy to grasp'
        ]
    }

    const badFeedback = {
        response: 'Sorry to hear that, what was the issue with this response? (optional)',
        buttons: [
            'Incorrect answer',
            "Response is'nt helpful",
            'Offensive / Harmful'
        ]
    }

    const [color1, setColor1] = useState('black');
    const [color2, setColor2] = useState('black');
    const [color3, setColor3] = useState('black');
    const [openSnack, setOpenSnack] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    })

    const activeIcon = (setter) => {
        setter('white')
    }

    const deactiveIcon = (setter) => {
        setter('black')
    }

    const likeAnswer = () => {
        const updatedArr = messages.map((message, index) => {
            if (index === answerIndex)
                return { ...message, feedback: goodFeedback }

            return message
        })
        setMessages(updatedArr)
    }

    const disLikeAnswer = () => {
        const updatedArr = messages.map((message, index) => {
            if (index === answerIndex)
                return { ...message, feedback: badFeedback }

            return message
        })
        setMessages(updatedArr)
    }

    const copyText = (textId) => {
        const textBox = document.getElementById(textId).innerHTML;
        // textBox.select();
        navigator.clipboard.writeText(textBox);
        setOpenSnack({ ...openSnack, open: true })
    }

    return (
        <>
            <div className='response-conatiner'>
                <img src={logo} style={{ borderRadius: '50px', height: '40px', width: '40px' }} />
                <p id={`response${answerIndex + 1}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ut ullam iusto aspernatur quibusdam eaque aliquam ratione ad architecto dolores non illo facilis error velit culpa, iste magni quae quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed incidunt omnis dolores harum est magni ipsam ipsa laboriosam error delectus modi, expedita quos molestias ducimus eos earum porro veniam temporibus quidem eaque! Perferendis perspiciatis fugit doloremque mollitia aliquid accusamus.</p>
                <div className="response-icons">
                    <button
                        onMouseOver={() => activeIcon(setColor1)}
                        onMouseOut={() => deactiveIcon(setColor1)}
                        onClick={likeAnswer}
                    >
                        <LikeIcon color={color1} />
                    </button>
                    <button
                        onMouseOver={() => activeIcon(setColor2)}
                        onMouseOut={() => deactiveIcon(setColor2)}
                        onClick={disLikeAnswer}
                    >
                        <DislikeIcon color={color2} />
                    </button>
                    <button className=""
                        onMouseOver={() => activeIcon(setColor3)}
                        onMouseOut={() => deactiveIcon(setColor3)}
                        onClick={() => copyText(`response${answerIndex + 1}`)}
                    >
                        <CopyIcon color={color3} />
                    </button>
                    <Snackbar
                        sx={10}
                        anchorOrigin={{ vertical: openSnack.vertical, horizontal: openSnack.horizontal }}
                        open={openSnack.open}
                        onClose={() => setOpenSnack({ ...openSnack, open: false })}
                        message="Text Copied"
                        key={openSnack.vertical + openSnack.horizontal}
                    />
                </div>
            </div>
        </>
    )
}

export default MessageBox