import React from 'react'
import "./topbar.css"
import Resume from "../resume/Resume"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          <a
          className="topInitials" 
          href="#top"
          alt="Michael's first and last initials and link to top">
          ML
          </a>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">MICHAEL.S.LOCASCIO@GMAIL.COM</li>
            <li>
              <a 
                href="https://drive.google.com/file/d/1s7JA_iYs3_nUji4qqR2_1jmfKuWFps1a/view?usp=sharing" 
                target="_blank" rel="noreferrer" 
                className="resumeButton">
                Resume
              </a>
            </li>
          </ul>
        </div>
    </div>
  )
}

/* <div className="topCenter">
          <Router className="topList">
            <Link to="/" className="topListItem"><a className="linkStyle" href="#top">HOME</a></li>
            <Link to="/about" className="topListItem"><a className="linkStyle" href="#about">ABOUT</a></li>
            <Link to="/" className="topListItem"><a className="linkStyle" href="#bottom">PORTFOLIO</a></li>
          </Router>
</div> */