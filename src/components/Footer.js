import React from 'react'
import './components.css';

const Footer = ({users}) => {
    return (
        <div className="footer">
            <h1 className="footer__player">{
                users ? users.displayName : "Player"
            }</h1>
            <h1>ScoreBoard</h1>
            <h1 className="footer__player">Score: 0</h1>
        </div>
    )
}

export default Footer
