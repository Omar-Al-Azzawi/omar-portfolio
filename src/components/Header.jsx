import React, { useEffect } from "react";
import Typical from 'react-typical';
import Aos from "aos";
import "aos/dist/aos.css";

function Header(){
    useEffect(() => {
    Aos.init({ duration : 3000 });
    }, [])

    return(
        <div>
            <div className="circl">
            </div>
            <div className="circl2">
            </div>
            <div className="circl3">
            </div>
            <div className="App-header">
            <h1 data-aos="fade-right" className="title-header">Hello world!, I'm <span className="myName">Omar Al-Azzawi</span>,{ <Typical
            steps={["I'm Software Developer.", 1000, "I'm frontEnd Developer.", 500]}
            loop={Infinity}
            wrapper="p"
            />}</h1>
            <img data-aos="fade-left" className="img" src="https://media-exp1.licdn.com/dms/image/C4D03AQGNG9yjYHV3-g/profile-displayphoto-shrink_200_200/0/1572891502427?e=1626912000&v=beta&t=-Y_TlqVDNV2ze1AlnKVQp1qoIInn8RDweq-7yCmOXpo" alt=""></img>
            </div>
            <div >
            <button data-aos="fade-up" className="btn-header">Get in touch</button>
            </div>
        </div>
    )
}
export default Header;