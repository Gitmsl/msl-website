import React from 'react'
import './header.css'
import imageSrc from '../images/michael.jpg'

export default function Header() {
    return(
        <div className="head">
            <div className="openElementItem">
                <i className="fa-solid fa-chevron-left"></i>
            </div>
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
                <img 
                    src={imageSrc} 
                    alt="Michael LoCascio" 
                    className="michaelPic"
                />
                <h1 className="name"></h1>
                <h3 className="title"></h3>
            </div>
            <div className="closedElementItem">
                <span className='backslashSubitem'>/</span>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div className='skillsItemContainer'>
                <h3 className='skillsItemTitle'>Skills:</h3>
                <i className="skillItem htmlLogo fa-brands fa-html5"> HTML 5</i>
                <i className="skillItem cssLogo fa-brands fa-css3-alt"> CSS 3</i>
                <i className="skillItem jsLogo fa-brands fa-js"> Javascript</i>
                <i className="skillItem reactLogo fa-brands fa-react"> React.js</i>
            </div>
        </div>
    )
}