import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          <a 
          className="topSocialIcon fa-brands fa-linkedin" 
          href="https://www.linkedin.com/in/michael-locascio-1b4803178" 
          target="_blank" 
          rel="noreferrer"
          alt="link to LinkedIn account">
          </a>
          <a 
          className="topSocialIcon fa-brands fa-github-square" 
          href="https://github.com/Gitmsl"
          target="_blank"
          rel="noreferrer"
          alt="link to Github account">
          </a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
          </ul>
        </div>
    </div>
  )
}
