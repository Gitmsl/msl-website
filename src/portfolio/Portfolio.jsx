import React from 'react'
import "./portfolio.css"
import PortfolioItem from "./PortfolioItem"
import portImg from '../images/PortfolioSiteSs.png'
// import each projImg as variable

export default function Portfolio() {
    return(
        <div>
            <h1 className="portfolioTitle">Portfolio</h1>
        <div className="portfolio">
            <PortfolioItem
                projLink="https://github.com/Gitmsl/msl-website"
                img={portImg}
                projTitle="Portfolio Website"
                itemDescription="Personal website built with React to promote myself as a developer"
                techUsed="HTML, CSS, React"
            />
            {/* <PortfolioItem
                projLink=""
                img={portImg}
                projTitle="Project2"
                itemDescription="Project built for the purpose of solving X problem, provide Y solution"
                techUsed="HTML, CSS, React"
            />
            <PortfolioItem
                projLink=""
                img={portImg}
                projTitle="Project3"
                itemDescription="Project built for the purpose of solving X problem, provide Y solution"
                techUsed="HTML, CSS, React"
            /> */}
        </div>
        </div>
    )
}