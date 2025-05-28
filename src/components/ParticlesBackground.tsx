import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import { IOptions, RecursivePartial } from "@tsparticles/engine";

const ParticleComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonMaskPlugin(engine);
    }).then(() => setInit(true));
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      background: {
        color: { value: "#010514" },
      },
      zIndex: 1,
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 150, duration: 8.8 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          bounce: false,
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 8000 },
          value: 120,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: {
          value: 3,
          random: true,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};

export default ParticleComponent;
