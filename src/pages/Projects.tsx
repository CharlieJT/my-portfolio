import { useState } from "react";
import Modal from "@components/Modal";
import snakeGameImage from "@assets/snake-game-image.png";
import tetrisGameImage from "@assets/tetris-game-image.png";
import simonMemoryGameImage from "@assets/simon-memory-game-image.png";
import myWeatherAppImage from "@assets/my-weather-image.png";
import Heading from "@UI/Heading";
import Text from "@UI/Text";
import useAnimation from "@hooks/useAnimation";

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
    id: 4,
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

const ProjectLink = ({ link, name }: { link: string; name: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    {name}
  </a>
);

const Projects = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-24 w-screen flex flex-col justify-center items-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
    >
      <Heading hasAnimated={hasAnimated}> My Projects</Heading>

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
        {projects
          .slice(0, showAllProjects ? projects.length : 2)
          .map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${0.2 * index + 0.5}s`,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-5 border border-gray-700"
              />
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <Text className="mt-3 text-gray-400 leading-relaxed">
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
              <div className="mt-5">
                <h4 className="text-sm font-medium text-gray-300">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2 mt-2 min-h-[60px]">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full h-7"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                <ProjectLink link={project.link} name="Github" />
                <ProjectLink link={project.demo} name="Live Demo" />
              </div>
            </div>
          ))}
      </div>

      {/* Show More Button */}
      {!showAllProjects && (
        <button
          onClick={() => setShowAllProjects(true)}
          className="mt-6 text-primary hover:underline"
        >
          See More
        </button>
      )}

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
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
              <ProjectLink link={selectedProject.link} name="Github" />
              <ProjectLink link={selectedProject.demo} name="Live Demo" />
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
