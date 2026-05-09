import './SpotlightCard.css';
import ParticlesBackground from './ParticlesBackground';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Maski (latarka)
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);

        // Paralaksa dla tekstu (lekki ruch w przeciwną stronę niż myszka)
        const moveX = (x - rect.width / 2) / 50; // 30 to siła oporu (im więcej, tym lżej się rusza)
        const moveY = (y - rect.height / 2) / 50;
        containerRef.current.style.setProperty('--text-move-x', `${moveX}px`);
        containerRef.current.style.setProperty('--text-move-y', `${moveY}px`);
    };

    return (
        <section 
            ref={containerRef} 
            onMouseMove={handleMouseMove} 
            className="spotlight-header"
        >
            <div className="mask-layer dust">
                <ParticlesBackground showLinks={false} count={300} />
            </div>
            <div className="mask-layer network">
                <ParticlesBackground showLinks={true} count={180} />
            </div>

            <motion.div 
    className="content-wrapper" // Framer Motion zajmuje się animacją wejścia
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
>
    <div className="content"> {/* CSS zajmuje się paralaksą */}
        <h1>Hello, I'm <span>Mateusz</span>.</h1>
        <p>Frontend Developer</p>
    </div>
</motion.div> 
        </section>
    );
}

export default SpotlightCard;