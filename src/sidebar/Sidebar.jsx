import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return(
        <>
        <div className='sidebarContainer'>
            <div className='sidebarVerticalLine'></div>
        </div>
        <div className='socialsContainer'>
            <a 
                    className="sidebarSocial fa-brands fa-linkedin" 
                    href="https://www.linkedin.com/in/michael-locascio-1b4803178" 
                    target="_blank" 
                    rel="noreferrer"
                    alt="link to LinkedIn account">
                </a>
                <a 
                    className="sidebarSocial fa-brands fa-github-square" 
                    href="https://github.com/Gitmsl"
                    target="_blank"
                    rel="noreferrer"
                    alt="link to Github account">
                </a> 
        </div>
        </>
    )
}