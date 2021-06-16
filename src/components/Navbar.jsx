import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; 

const navStyle = {
    color: 'white'
}

function Navbar(){
    return(
        <nav>
            <ol data-aos="fade-right" className="navbar">
                <Link style={navStyle} to="/home">
                  <li data-aos-duration="1000" data-aos="fade-down" >Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                  <li data-aos-duration="1500" data-aos="fade-down" >About me</li>
                </Link>
                <Link style={navStyle} to="/my work">
                  <li data-aos-duration="2000" data-aos="fade-down">My work</li>
                </Link>
                <Link style={navStyle} to="/contact">
                  <li data-aos-duration="2500" data-aos="fade-down">Contact</li>
                </Link>
            </ol>
        </nav>
    )
}
export default Navbar;

