import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Definiujemy typy dla propsów
interface ParticlesProps {
  id?: string; // dodaj opcjonalne ID
  showLinks: boolean;
  count: number;
}

const ParticlesBackground = ({ id, showLinks, count }: ParticlesProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;
  // Tworzymy unikalne ID: jeśli props 'id' istnieje, użyj go. 
  // Jeśli nie, stwórz domyślne na podstawie typu (dust/network).
  const finalId = id || (showLinks ? "particles-network" : "particles-dust");

  return (
    <Particles
      id={finalId} // Używamy przeliczonego, unikalnego ID
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        particles: {
          number: { 
            value: count, // Używamy propsa count
            density: { enable: true, area: 1800 } 
          },
          color: { 
            value: showLinks ? "#16f6ce" : ["#16f6ce", "#fb3816", "#ffffff"] 
          },
          links: {
            enable: showLinks, // Używamy propsa showLinks
            distance: 150,
            color: "#06f60e",
            opacity: 0.8,
            width: 2.5,
          },
          move: { enable: true, speed: 0.8, outModes: "out" },
          size: { value: { min: 1.5, max: showLinks ? 3 : 1 } },
          opacity: {
            value: showLinks ? 0.3 : { min: 0.4, max: 0.7 },
          }
        },
        interactivity: {
          events: {
            onHover: { enable: showLinks, mode: "grab" },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.7 } },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;