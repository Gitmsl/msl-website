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
                        projLink="https://github.com/Gitmsl/msl-website"
                        img={portImg}
                        projTitle="Portfolio Website"
                        itemDescription="I built my personal website with a 
                        simple objective in mind: to provide a clear, easy to 
                        navigate layout with easy access to important links; my 
                        resume, LinkedIn account, Github profile, and portfolio 
                        projects (previous version shown). "
                        techUsed="HTML - CSS - React.js"
                    />
                    {/* comment out below two after formatting */}
                    <PortfolioItem
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
                    />
                </div>
            </div>
        </>
    )
}