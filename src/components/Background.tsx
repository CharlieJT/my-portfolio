import ParticlesBackground from "./ParticlesBackground";

const Background = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-black to-black opacity-70 z-10"></div>
    <ParticlesBackground />
  </>
);

export default Background;
