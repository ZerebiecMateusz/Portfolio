import './Projects.css';
import UERVideo from '../assets/videos/uer-desktop.mp4?url';
import mobileApp from '../assets/videos/MobileMovieApp.mp4?url';
import code from '../assets/images/code.svg';
import { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        const el = document.getElementById('tilt-element');
        if (!el) return;

        const handleMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = (clientX - left) / width - 0.5;
            const y = (clientY - top) / height - 0.5;

            el.style.transform = `
                perspective(1000px) 
                rotateY(${x * 25}deg) 
                rotateX(${-y * 25}deg)
                scale3d(1.05, 1.05, 1.05)
            `;
        };

        const handleLeave = () => {
            el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);

        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <section className="projects" id="projects">
            <div className="section__title">
                <p className="section__title-main">Proj</p>
                <span className="section__title-sub">ects</span>
            </div>

            <div className="project__content">
                {/* PROJEKT 1: DESKTOP (UER) */}
                <div className="project__content-card project--desktop" id="uer-project">
                    <div className="browser-mockup">
                        <div className="browser-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <video autoPlay loop muted playsInline preload="auto" key={UERVideo} className="project__video">
                            <source src={UERVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="project__info">
                        <p className="project__name">Universal Express Relocations</p>
                        <div className="project__links">
                            <a href="https://uerinternationale.netlify.app/" target="_blank" rel="noreferrer" className="project__link">
                                <span>Live App</span>
                                <img src={code} alt="code icon" className="code-icon" />
                            </a>
                        </div>
                    </div>
                    <p className="project__description">
                        Kompleksowy system relokacji międzynarodowych. Implementacja dynamicznych formularzy, SEO oraz optymalizacja wydajności na Netlify.
                    </p>
                </div>

                {/* PROJEKT 2: MOBILE (MOVIE APP) - FEATURED */}
                <div className="project__featured">
                    <div className="featured__container">
                        <div className="featured__mockup" id="tilt-element">
                            <div className="phone-frame">
                                <video autoPlay loop muted playsInline className="phone-video">
                                    <source src={mobileApp} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div className="featured__info">
                            <span className="featured__label">Featured Project</span>
                            <h3 className="project__name">Movie Mobile App</h3>
                            <div className="project__links">
                                <a href="#" className="project__link">
                                    <span>GitHub</span>
                                    <img src={code} alt="code icon" className="code-icon" />
                                </a>
                            </div>
                            <p className="project__description">
                                Aplikacja mobilna zbudowana w React Native i Appwrite. Pozwala na śledzenie trendów filmowych, wyszukiwanie produkcji i zarządzanie listą ulubionych w czasie rzeczywistym.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="project__content-card" id="todo-project">
                    <div className="todo-preview-container">
                        {/* Tu możemy dać statyczny screen lub bardzo krótkie wideo */}
                        <div className="todo-mockup">
                            <div className="todo-header-dot"></div>
                            <div className="todo-list-item"><span>Done</span></div>
                            <div className="todo-list-item"><span>In Progress</span></div>
                        </div>
                    </div>
                    <div className="project__info">
                        <p className="project__name">React Task Manager</p>
                        <div className="project__links">
                            <a href="#" className="project__link">
                                <span>GitHub</span>
                                <img src={code} alt="code icon" className="code-icon" />
                            </a>
                        </div>
                    </div>
                    <p className="project__description">
                        Minimalistyczna aplikacja do zarządzania zadaniami z wykorzystaniem Local Storage i customowych hooków.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;