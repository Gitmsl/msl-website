import React from "react"
import "./portfolio.css"

export default function PortfolioItem(props) {
    console.log(props)
    return(
        <div className="portfolioItem">
                <img src={props.img} className="portfolioImg" alt="Project preview"/>
                <div id="itemText">
                    <h3 className="projTitle">{props.projTitle}</h3>
                    <p className="itemDescription">{props.itemDescription}</p>
                    <p className="techUsed">{props.techUsed}</p>
                    <a className="portfolioItemButtonContainer" 
                        href={props.siteLink} 
                        target="_blank" 
                        rel="noreferrer">
                            <button className="buttonInterior">Live Site</button>
                    </a>
                    <a className="portfolioItemButtonContainer" 
                        href={props.gitLink} 
                        target="_blank" 
                        rel="noreferrer">
                            <button className="buttonInterior">Github Repo</button>
                    </a>
                </div>
        </div>
    )
}