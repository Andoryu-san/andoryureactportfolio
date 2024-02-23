import React, { useState } from 'react'
import "./Navbar.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/images/logo.svg" alt=""/>

                    <ul>
                        <li><a className="menu-item">About Me</a></li>
                        <li><a className="menu-item">Portfolio</a></li>
                        <li><a className="menu-item">Contact</a></li>
                        <li><a className="menu-item">Pricing</a></li>

                        <button className="contact-btn" onClick={() => {}}>
                            Contact Me
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <MenuOutlinedIcon />{openMenu ? "" : ""}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar