import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; 
import { DiHtml5, DiJsBadge, DiCss3, DiSass, DiBootstrap, DiNpm, DiNodejsSmall, DiReact, DiWordpress, DiGit, DiGithubFull } from "react-icons/di";

function About(){

    useEffect(() => {
        Aos.init({ duration : 2000 });
        }, [])

    return(
        <div  className="about">
            <div>
                <div data-aos="fade-right" className="about-container">
                    <h2 > /* About me */</h2>
                    <p>Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
                <div className="experience-container">
                    <h2>/* skills */</h2>
                    <ul className="skills">
                        <li><DiHtml5 /></li>
                        <li><DiCss3 /></li>
                        <li><DiSass /></li>
                        <li><DiJsBadge /></li>
                        <li><DiNodejsSmall /></li>
                        <li><DiNpm /></li>
                        <li><DiBootstrap /></li>
                        <li><DiReact /></li>
                        <li><DiWordpress /></li>
                        <li><DiGit /></li>
                        <li><DiGithubFull /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default About;