import React from 'react'
import logo from '../../assets/images/logo.png'

const MessageBox = ({ text }) => {
    return (
        <>
            <div className='text-container'>
                <h3 className='mid-btn' style={{ height: '50px', width: '50px', fontSize: '2rem' }}>F</h3>
                <p>{text}</p>
            </div>
            <div className='main-mid'>
                <img src={logo} style={{ borderRadius: '50px', height: '40px', width: '40px' }} />
            </div>
        </>
    )
}

export default MessageBox