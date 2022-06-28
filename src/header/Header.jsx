import React from 'react'
import './header.css'
import imageSrc from '../images/michael.jpg'

export default function Header() {
    return(
        <div className="head">
            <img src={imageSrc} alt="Michael LoCascio" className="michaelPic"/>
            <h1 className="name">Michael LoCascio</h1>
            <h3 className="title">Software Engineer</h3>
        </div>
    )
}