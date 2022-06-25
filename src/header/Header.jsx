import React from 'react'
import './header.css'

export default function Header() {
    return(
        <div className="head">
            <img src= "https://images.unsplash.com/photo-1516636052745-e142aecffd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" className="michaelPic" alt="Michael LoCascio in a black suit"/>
            <h1 className="name">Michael LoCascio</h1>
            <h3 className="title">Software Engineer</h3>
        </div>
    )
}