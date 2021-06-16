import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css"; 

function Contact() {
    return (
        <div  className="contact">
                <div  className="form-container">
                    <form className="form-contant">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <textarea placeholder="Text"/>
                        <button>Send it to me</button>
                    </form>
                </div>
        </div>
    )
}

export default Contact
