import React, { useState } from 'react'
import Cross from "../../assets/icons/cross-main.svg";

const FeedbackResponse = ({ feedback }) => {

    const [renderCom, setRenderComps] = useState(true)

    return (
        <>
            <div className="main-mid feedback-box">
                {
                    renderCom === true ? <>
                        <p>
                            {feedback && feedback.response}
                        </p>
                        <div className="feedback-btns">
                            {feedback && feedback.buttons.map((text, index) => {
                                return <button key={index} className='outline-btn' onClick={() => setRenderComps(false)}>{text}</button>
                            })}
                        </div>
                    </> : <p>Thanks for the valuable feedback!</p>
                }
                <img src={Cross} className="crossIcon" alt="loading" />
            </div>
        </>
    )
}

export default FeedbackResponse