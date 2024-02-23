import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className='mobile-menu-container'>

                    <img className="logo" src="./assets/images/logo.svg" alt="" />
                    
                    <ul>
                        <li><a className="menu-item">About Me</a></li>
                        <li><a className="menu-item">Portfolio</a></li>
                        <li><a className="menu-item">Contact</a></li>
                        <li><a className="menu-item">Pricing</a></li>

                        <button className="contact-btn" onClick={() => {}}>
                            Contact Me
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav