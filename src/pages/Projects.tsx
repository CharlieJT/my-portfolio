import { useState, useEffect } from "react";
import type React from "react";
import Modal from "@components/Modal";
import snakeGameImage from "@assets/snake-game-image.png";
import tetrisGameImage from "@assets/tetris-game-image.png";
import simonMemoryGameImage from "@assets/simon-memory-game-image.png";
import myWeatherAppImage from "@assets/my-weather-image.png";
import virtualRubiksCubeImage from "@assets/virtual-rubiks-cube.png";
import Heading from "@UI/Heading";
import Text from "@UI/Text";
import useAnimation from "@hooks/useAnimation";
import { FaFolderOpen, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  link: string;
  demo: string;
  technologies: string[];
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Virtual Rubik's Cube",
    description:
      "An interactive 3D Rubik's Cube simulator built with Three.js, featuring realistic rotations, smooth animations, and intuitive mouse/touch controls for a fully immersive solving experience.",
    detailedDescription:
      "A fully interactive 3D Rubik's Cube application that brings the classic puzzle into the browser. Built with React, TypeScript, and Three.js, the cube features realistic face rotations with smooth, physics-inspired animations. Users can manipulate the cube using intuitive drag controls on both desktop and mobile. The app includes a scramble function that randomises the cube state, and each move is visually fluid with precise 3D transformations. Styled with Tailwind CSS for a clean, modern interface that lets the 3D experience take centre stage. Demonstrates advanced 3D rendering, state management for complex spatial transformations, and polished UX design.",
    link: "https://github.com/CharlieJT/virtual-rubiks-cube",
    demo: "https://virtual-rubiks-cube.netlify.app/",
    technologies: ["React", "TypeScript", "Three.js", "Tailwind CSS"],
    image: virtualRubiksCubeImage,
  },
  {
    id: 2,
    title: "Tetris Game",
    description:
      "A modern React-based Tetris game with retro aesthetics, responsive controls, and dynamic gameplay features like level progression and high score tracking.",
    detailedDescription:
      "This app is a modern React-based take on Tetris with a retro aesthetic and modern UI. It features desktop and mobile controls, including movement, rotation, and fast drops. \nThe game tracks lines, points, and levels, with level increases speeding up the game. A landing indicator helps players, and the high score is saved in local storage. \nModern music and retro sound effects enhance the experience. You can start, pause, resume, or restart the game at any time.",
    link: "https://github.com/CharlieJT/tetris-clone",
    demo: "https://tetris-charlie-jt.netlify.app/",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "HTML",
      "Styled Components",
    ],
    image: tetrisGameImage,
  },
  {
    id: 3,
    title: "MyWeather App",
    description:
      "MyWeather is a React app using Redux and OpenWeather API to display current and weekly forecasts, with Chart.js graphs, reusable components, and responsive Bootstrap styling",
    detailedDescription:
      "MyWeather is a responsive weather application built with React and Redux using ES6 JavaScript. Users can search by city and country to view current weather conditions, a 7-day forecast, and a detailed hourly graph for temperature and wind speed using Chart.js. The app features reusable components, Redux state management, and a clean UI with Bootstrap styling. Data is sourced from the OpenWeather API, with support for metric and imperial units. While overengineered for its scope, the project demonstrates scalable architecture, reusable utilities, and thoughtful UX.",
    link: "https://github.com/CharlieJT/myWeather",
    demo: "https://charlie-jt-my-weather.netlify.app/",
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "CSS",
      "HTML",
      "Chart.js",
      "Bootstrap",
    ],
    image: myWeatherAppImage,
  },
  {
    id: 4,
    title: "Snake Game",
    description:
      "A nostalgic React-based Snake game inspired by the classic Nokia 5110, featuring simple controls, retro design, and high score tracking.",
    detailedDescription:
      "This app is a modern version of the classic Snake game, inspired by the original Nokia 5110. Built with React, it features simple controls and a nostalgic design. You navigate the snake using arrow keys, with the goal of eating food to grow longer. The game ends if the snake hits a wall or itself. The score is tracked, and the highest score is saved in local storage. The retro theme enhances the experience, offering a fun, old-school gaming vibe.",
    link: "https://github.com/CharlieJT/snake-game-clone",
    demo: "https://snake-charlie-jt.netlify.app/",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "HTML",
      "Styled Components",
    ],
    image: snakeGameImage,
  },
  {
    id: 5,
    title: "Simon Memory Game",
    description:
      "Simon Game is a classic memory challenge from 1978, featuring colorful buttons, fun sounds, a strict mode for extra difficulty, and a win condition for an engaging, rewarding experience for all ages",
    detailedDescription:
      "Simon Game is a very popular memory game dating back as far as 1978. It's a game fit for all ages to test memory and skill. This particular game features a strict option to make the game more challenging yet rewarding and a winning feature is also included to give the player a goal to achieve. In addition to friendly colours & sounds. You will have many hours of fun playing!",
    link: "https://github.com/CharlieJT/Simon-Memory-Game",
    demo: "https://charliejt.github.io/Simon-Memory-Game/",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: simonMemoryGameImage,
  },
];

const ProjectLink = ({
  link,
  name,
  icon: Icon,
}: {
  link: string;
  name: string;
  icon: React.ElementType;
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 text-xs font-medium hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
  >
    <Icon size={13} />
    {name}
  </a>
);

const Projects = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [visibleExtras, setVisibleExtras] = useState(false);

  useEffect(() => {
    if (showAllProjects) {
      // slight delay so the DOM nodes mount before the fade kicks in
      const t = setTimeout(() => setVisibleExtras(true), 30);
      return () => clearTimeout(t);
    } else {
      setVisibleExtras(false);
    }
  }, [showAllProjects]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-24 w-full z-10 flex flex-col justify-center items-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
    >
      <FaFolderOpen
        className={`mx-auto mb-4 text-primary transition-all duration-1000 ${
          hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        size={56}
        style={{ transitionDelay: "0.1s" }}
      />
      <Heading hasAnimated={hasAnimated}>My Projects</Heading>

      <p
        className={`my-6 text-center transition-all duration-1000 ${
          hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "0.4s" }}
      >
        Check out some of the work I've done.
      </p>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-6xl">
        {projects.map((project, index) => {
          const isExtra = index >= 2;
          return (
            <div
              key={index}
              className={`relative flex flex-col bg-gray-900 rounded-2xl shadow-lg overflow-hidden ${
                isExtra
                  ? `${
                      showAllProjects ? "block" : "hidden"
                    } transition-all duration-700 ease-out ${
                      visibleExtras
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`
                  : hasAnimated
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: isExtra
                  ? `${(index - 2) * 0.12}s`
                  : hasAnimated
                    ? "0ms"
                    : `${0.2 * index + 0.5}s`,
              }}
            >
              {/* Image with gradient fade */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
                {index === 0 && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-6 pt-4 pb-6">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <Text className="mt-2 text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description.length > 100 ? (
                    <>
                      {`${project.description.slice(0, 100)}... `}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-primary hover:underline"
                      >
                        See More
                      </button>
                    </>
                  ) : (
                    project.description
                  )}
                </Text>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800/80 border border-gray-700 text-gray-300 text-[11px] px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex gap-3">
                  <ProjectLink
                    link={project.link}
                    name="GitHub"
                    icon={FaGithub}
                  />
                  <ProjectLink
                    link={project.demo}
                    name="Live Demo"
                    icon={FaExternalLinkAlt}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More / See Less */}
      <button
        onClick={() => setShowAllProjects((prev) => !prev)}
        className="mt-10 flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/50 text-primary text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all duration-200"
      >
        {showAllProjects ? "See Less ↑" : "See More ↓"}
      </button>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setTimeout(() => setSelectedProject(null), 200)}
      >
        {selectedProject && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              {selectedProject.title}
            </h3>
            <Text className="text-gray-300">
              {selectedProject.detailedDescription}
            </Text>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <ProjectLink
                link={selectedProject.link}
                name="GitHub"
                icon={FaGithub}
              />
              <ProjectLink
                link={selectedProject.demo}
                name="Live Demo"
                icon={FaExternalLinkAlt}
              />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
