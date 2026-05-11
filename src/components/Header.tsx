import logoImg from '../assets/images/Logo.svg'; // Importujemy logo
import { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6, // Sekcja zostanie uznana za aktywną, gdy 60% jej powierzchni będzie widoczne
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Obserwujemy wszystkie sekcje, które mają ID
        const sections = document.querySelectorAll('section[id], article[id]');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);


    // Funkcja do płynnego przewijania po kliknięciu
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return ( 
        <header className={activeSection === 'home' ? 'header--hidden' : 'header--visible'}>
                    <div className="logo">
                        <img src={logoImg} alt="logo" />
                    </div>
                    <ul className="menu">
                        {['home', 'about', 'projects', 'contact'].map((item) => (
                            <li
                                key={item}
                                className={`menu__link ${activeSection === item ? 'active' : ''}`}
                                onClick={() => scrollToSection(item)}
                            >
                                {item === 'about' ? 'About me' : item.charAt(0).toUpperCase() + item.slice(1)}
                            </li>
                        ))}
                    </ul>
                    <button className="burger">
                        <span></span><span></span><span></span>
                    </button>
                </header>
     );
}
 
export default Header;