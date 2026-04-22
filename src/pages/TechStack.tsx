import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiRedux,
  SiJest,
} from "react-icons/si";
import Heading from "@UI/Heading";
import useAnimation from "@hooks/useAnimation";
import { FaLayerGroup } from "react-icons/fa";

type TechItem = {
  name: string;
  icon: React.ElementType;
  colour: string;
  href: string;
};

type TechCategory = {
  title: string;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: FaHtml5,
        colour: "text-orange-400",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        colour: "text-blue-400",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        icon: FaJsSquare,
        colour: "text-yellow-400",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        colour: "text-blue-400",
        href: "https://www.typescriptlang.org/",
      },
      {
        name: "React",
        icon: FaReact,
        colour: "text-cyan-400",
        href: "https://react.dev/",
      },
      {
        name: "Redux",
        icon: SiRedux,
        colour: "text-purple-400",
        href: "https://redux.js.org/",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        colour: "text-cyan-300",
        href: "https://tailwindcss.com/",
      },
      {
        name: "Three.js",
        icon: SiThreedotjs,
        colour: "text-white",
        href: "https://threejs.org/",
      },
    ],
  },
  {
    title: "Backend & Cloud",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        colour: "text-green-400",
        href: "https://nodejs.org/",
      },
      {
        name: "AWS",
        icon: FaAws,
        colour: "text-yellow-500",
        href: "https://aws.amazon.com/",
      },
    ],
  },
  {
    title: "Tools & Testing",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        colour: "text-orange-400",
        href: "https://git-scm.com/",
      },
      {
        name: "Jest",
        icon: SiJest,
        colour: "text-red-400",
        href: "https://jestjs.io/",
      },
    ],
  },
];

const TechStack = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-24 px-6 bg-gradient-to-bl from-gray-900 via-gray-800 to-black text-gray-100"
    >
      <FaLayerGroup
        className={`mx-auto mb-4 text-primary transition-all duration-1000 ${
          hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        size={56}
        style={{ transitionDelay: "0.1s" }}
      />
      <Heading hasAnimated={hasAnimated}>Tech Stack</Heading>

      <p
        className={`text-gray-400 text-center mt-6 max-w-2xl text-sm sm:text-base transition-all duration-1000 ${
          hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: "0.3s" }}
      >
        The technologies and tools I use to bring ideas to life.
      </p>

      <div className="mt-12 w-full max-w-5xl space-y-12">
        {techCategories.map((category, catIndex) => (
          <div
            key={category.title}
            className={`transition-all duration-1000 ${
              hasAnimated
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${0.4 + catIndex * 0.2}s` }}
          >
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6 text-center">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {category.items.map(({ name, icon: Icon, colour, href }, i) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center gap-3 bg-gray-800/50 border border-gray-700/50 rounded-xl px-5 py-4 sm:px-6 sm:py-5 hover:border-primary/50 hover:shadow-primary hover:bg-gray-800 hover:-translate-y-1 hover:duration-150 hover:[transition-delay:0ms] transition-all duration-300 cursor-pointer ${
                    hasAnimated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: hasAnimated
                      ? "0ms"
                      : `${0.5 + catIndex * 0.2 + i * 0.08}s`,
                  }}
                >
                  <Icon
                    className={`text-2xl sm:text-3xl ${colour} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
