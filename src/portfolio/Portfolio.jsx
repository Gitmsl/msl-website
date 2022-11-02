import React from 'react'
import "./portfolio.css"
import PortfolioItem from "./PortfolioItem"
import portImg from '../images/PersonalSite.png'
// import each projImg as variable

export default function Portfolio() {
    return(
        <>
            <div className='portfolioLineContainer'>
                <div className='portfolioLine'></div>
            </div>
            <div className='portfolioContainer'>
                <h1 className="portfolioTitle">Portfolio</h1>
                <div className="portfolio">
                    <PortfolioItem
                        siteLink="http://michaellocascio.com"
                        gitLink="https://github.com/Gitmsl/msl-website"
                        img={portImg}
                        projTitle="Portfolio Website"
                        itemDescription="I built my personal website with a 
                        simple objective in mind: to provide a clear, easy to 
                        navigate layout with easy access to important links; my 
                        resume, LinkedIn account, Github profile, and portfolio 
                        projects (previous version shown). "
                        techUsed="HTML - CSS - React.js"
                    />
                    {/* <PortfolioItem
                        siteLink="http://livewebsitelinkhere"
                        gitLink="https://github.com/Gitmsl/project-link"
                        img={import variable name at top, from source in ../images/}
                        projTitle="Portfolio Website Title"
                        itemDescription="I built my personal website with a 
                        simple objective in mind: to provide a clear, easy to 
                        navigate layout with easy access to important links; my 
                        resume, LinkedIn account, Github profile, and portfolio 
                        projects (previous version shown). "
                        techUsed="HTML - CSS - React.js"
                    /> */}
                </div>
            </div>
        </>
    )
}