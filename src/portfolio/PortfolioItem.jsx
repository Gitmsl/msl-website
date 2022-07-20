import React from "react"
import "./portfolio.css"

export default function PortfolioItem(props) {
    console.log(props)
    return(
        <a className="portfolioItem" href={props.projLink} target="_blank" rel="noreferrer">
        <div>
                <img src={props.img} className="portfolioImg" alt="Project preview"/>
                <h3 className="projTitle">{props.projTitle}</h3>
                <div id="itemText">
                    <p className="itemDescription">{props.itemDescription}</p>
                    <p className="techUsed">{props.techUsed}</p>
                </div>
        </div>
        </a>
    )
}