import React from "react"
import "./portfolio.css"
import imageSrc from '../images/PortfolioSiteSs.png'

export default function PortfolioItem() {
    return(
        <div className="portfolioItem">
                <img src={imageSrc} className="portfolioImg" alt="Project preview"/>
                <h3 className="projTitle">Project Title</h3>
                <div className="itemDescription">
                    <p>Description of project</p>
                    <ul className="techUsed">
                        <li>React.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
        </div>
    )
}