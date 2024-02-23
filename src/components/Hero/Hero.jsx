import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Creating the Dream with a Button</h2>
            <p>Pure Passion for Technology | New Developer in <b>React Community</b> and Ready to Evolve</p>  
        </div>
          
        <div className="hero-img">
            <div>
                <img src="./assets/images/stockimg1.jpg" alt="" />
            </div>
            
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/react.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/html5.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/css3.svg" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/js.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero