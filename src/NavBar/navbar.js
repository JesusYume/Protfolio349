// This file will contain code for the navbar for the website
import React from "react";
import './navbar.css'; // Importing css file
import logo from '../images/earth-logo.png';
import {Link} from 'react-scroll';

// Navbar component
const Navbar = () =>  {
    return (
        // Navbar
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo'/>
            <div className="menu">
                <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="menuItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} offset={-50} duration={500} className="menuItem">Skills</Link>
                <Link activeClass='active' to='projects' spy={true} offset={-50} duration={500} className="menuItem">Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;