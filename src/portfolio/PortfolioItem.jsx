import React from "react"
import "./portfolio.css"

export default function PortfolioItem(props) {
    console.log(props)
    return(
        <a className="portfolioItem" href={props.projLink} target="_blank" rel="noreferrer">
                <img src={props.img} className="portfolioImg" alt="Project preview"/>
                <div id="itemText">
                    <h3 className="projTitle">{props.projTitle}</h3>
                    <p className="itemDescription">{props.itemDescription}</p>
                    <p className="techUsed">{props.techUsed}</p>
                </div>
        </a>
    )
}