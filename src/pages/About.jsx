import React from 'react'
import {Link} from "react-router-dom"
import bgImg from "../assets/images/about-hero.png"

const About = () => {
  return (
    // <div>About</div>
    <div className="about-page-container">
      <img src={bgImg} className='about-hero-image' alt="Kaunsi image?"/>
      <div className="about-page-content">
          <h1>Don't squeeze in a sedan when you could relax in a van.</
          h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental.</p>
          <p>Our team is full of vanlife enthusiats who know firsthand the magic of touring the world on 4 wheels.</p>
          <div className="about-page-cta">
            <h2>Your destination is waiting.<br/>Your van is ready.</h2>
            <Link className="link-button">Explore our vans</Link>
          </div>
      </div>
    </div>
  )
}

export default About