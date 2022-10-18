import React from 'react'
import './header.css'
import imageSrc from '../images/michael.jpg'

export default function Header() {
    return(
        <div className="head">
            <div className="aboutItem">
                <h1 className="name">Hi, I'm Mike!</h1>
                <p className="title">
                    Front-end software developer, team-player,
                     communicator, excited to meet, work, and 
                    learn with an enthusiastic group of 
                    developers!
                </p>
                <p className="title">
                    I’m currently open to full-time remote or 
                    hybrid Software Engineer positions; If you’re
                    interested in finding out more about me, I’d 
                    love to connect!
                </p>
            </div>
            <div className="profileItem">
                <img src={imageSrc} alt="Michael LoCascio" className="michaelPic"/>
                <h1 className="name"></h1>
                <h3 className="title"></h3>
            </div>
        </div>
    )
}