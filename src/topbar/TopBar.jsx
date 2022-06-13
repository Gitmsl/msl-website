import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
          </ul>
        </div>
        <div className="topRight">R</div>
    </div>
  )
}
