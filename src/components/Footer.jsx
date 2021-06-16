import React from "react";
import { FaInstagram , FaLinkedin , FaGithub , FaTwitter} from 'react-icons/fa';
import Aos from "aos";
import "aos/dist/aos.css"; 

function Footer(){
    return(
        <div className="footer">
            <footer  className="footer-container">
                    <ul data-aos-duration="3000" data-aos="fade-right" data-aos="fade-right" className="list-footer">
                        <li className="item-footer"><a href="https://github.com/Omar-Al-Azzawi"><FaGithub /></a></li>
                        <li className="item-footer"><a href="https://www.instagram.com/omarromar/"><FaInstagram /></a></li>
                        <li className="item-footer"><a href="https://www.linkedin.com/in/omar-al-azzawi-4a085a197/"><FaLinkedin /></a></li>
                        <li className="item-footer"><a><FaTwitter /></a></li>
                    </ul>
                    <div className="footer-bottom">
                        <p >Designed and Build by Omar Al-Azzawi</p>
                    </div>
            </footer>
        </div>
    )
}
export default Footer;