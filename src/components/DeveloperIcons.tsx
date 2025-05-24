import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import IconLink from "./IconLink";

const DEV_LINKS = [
  {
    id: 1,
    IconComponent: FaHtml5,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    text: "HTML5",
    colour: "orange",
  },
  {
    id: 2,
    IconComponent: FaCss3,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    text: "CSS3",
    colour: "blue",
  },
  {
    id: 3,
    IconComponent: FaJs,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    text: "JavaScript",
    colour: "yellow",
  },
  {
    id: 4,
    IconComponent: FaReact,
    href: "https://reactjs.org/docs/getting-started.html",
    text: "React",
    colour: "blue",
  },
  {
    id: 5,
    IconComponent: SiTypescript,
    href: "https://www.typescriptlang.org/docs/",
    text: "TypeScript",
    colour: "blue",
  },
  {
    id: 6,
    IconComponent: FaNodeJs,
    href: "https://nodejs.org/en/docs/",
    text: "Node.js",
    colour: "green",
  },
  {
    id: 7,
    IconComponent: FaGitAlt,
    href: "https://git-scm.com/doc",
    text: "Git",
    colour: "orange",
  },
  {
    id: 8,
    IconComponent: SiTailwindcss,
    href: "https://tailwindcss.com/docs",
    text: "Tailwind CSS",
    colour: "blue",
  },
];

const DeveloperIcons = () => (
  <div className="flex gap-1 mt-6 flex-wrap justify-center lg:justify-start">
    {DEV_LINKS.map((dev) => (
      <IconLink
        key={dev.id}
        {...dev}
        style={{
          animationDelay: `${0.2 * dev.id}s`,
        }}
      />
    ))}
  </div>
);

export default DeveloperIcons;
