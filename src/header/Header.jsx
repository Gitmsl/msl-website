import React from 'react'
import './header.css'

export default function Header() {
    return(
        <div className="head">
            <img src="./images/michael.jpg" className="michaelPic" alt="Michael LoCascio in a black suit"/>
            <h1 className="name">Michael LoCascio</h1>
            <h3 className="title">Software Engineer</h3>
            <p className="headText"> This is the content that will appear below the topbar</p>
        </div>
    )
}