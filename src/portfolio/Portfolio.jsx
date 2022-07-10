import React from 'react'
import "./portfolio.css"
import PortfolioItem from "./PortfolioItem"

export default function Portfolio() {
    return(
        <div>
            <h1 className="portfolioTitle">Portfolio</h1>
        <div className="portfolio">
            
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
        </div>
    )
}