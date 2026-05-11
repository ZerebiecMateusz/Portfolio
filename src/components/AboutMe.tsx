import { useEffect, useState } from 'react';
import './AboutMe.css'
import ParticlesBackground from './ParticlesBackground';
import HeroGif from '../assets/images/AboutHero.gif'; // Importujemy gif do sekcji "About me"
import reactIcon from '../assets/images/react.svg';
import htmlIcon from '../assets/images/html5.svg';
import cssIcon from '../assets/images/css.svg';
import viteIcon from '../assets/images/vite.png';   
import gitHubIcon from '../assets/images/GithubIcon.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import javaScriptIcon from '../assets/images/javascript.svg';
import sassIcon from '../assets/images/sass.svg'
import typeScript from '../assets/images/typescript-svgrepo-com.svg'
import mongoDBIcon from '../assets/images/mongo-db.png';
import nodeJSIcon from '../assets/images/node.png';


const AboutMe = () => {
    
    return ( 
        <>
            <div id="about-container">
                // About me section
                <article className="about" id="about">
                    <div className="particles-full-bg">
                    <ParticlesBackground id="particles-about-section" showLinks={false} count={150} />
                </div>
                    <div className="section__title">
                        <p className="section__title-main">Who</p>
                        <span className="section__title-sub">Am I?</span>
                    </div>
                    <div className="about__content">
                        <div className="description__container">
                            <p className="description__about">
                                My drive comes from understanding how 
                                things work from the ground up. As a <span className="highlight">Frontend Developer</span>, 
                                I treat code like a finely tuned machine.
                            </p>
                            <p className="description__about">
                                When I’m not exploring the latest web technologies, I’m likely 
                                restoring <span className="highlight">vintage motorcycles</span> or 
                                uncovering forgotten history with my metal detector deep in the woods. 
                                For me, building a website is like restoring a classic: it requires 
                                patience, precision, and a deep respect for the foundations.
                            </p>
                            <span className="about_quote">
                                "It is only with the heart that one can see rightly; what is essential is invisible to the eye."
                            </span>
                        </div>
                        <div className="about__image-wrapper">
                        <div className="tech-orbit" style={{ "--total": 11 } as any}>
                            <div className="orbit-icon" style={{ "--i": 0 } as any}>
                                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                                    <img src={reactIcon} alt="React" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 1 } as any}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                                    <img src={htmlIcon} alt="HTML" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 2 } as any}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                                    <img src={cssIcon} alt="CSS" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 3 } as any}>
                                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                                    <img src={viteIcon} alt="Vite" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 4 } as any}>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={gitHubIcon} alt="GitHub" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 5 } as any}>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedinIcon} alt="LinkedIn" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 6 } as any}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                                    <img src={javaScriptIcon} alt="JavaScript" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 7 } as any}>
                                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={sassIcon} alt="Sass" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 8 } as any}>
                                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                                    <img src={typeScript} alt="TypeScript" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 9 } as any}>
                                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={mongoDBIcon} alt="MongoDB" />
                                </a>
                            </div>
                            <div className="orbit-icon" style={{ "--i": 10 } as any}>
                                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                                    <img src={nodeJSIcon} alt="Node.js" />
                                </a>
                            </div>
                        </div>
                            <img className="about__gif" src={HeroGif} alt="about-image"/>
                        </div>
                    </div>
                </article>  
            </div>
            
        </>
     );
}
 
export default AboutMe;