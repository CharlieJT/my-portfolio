import {
  FaUserCircle,
  FaCode,
  FaProjectDiagram,
  FaLaptopCode,
} from "react-icons/fa";
import ButtonLink from "@UI/ButtonLink";
import { CgChevronDown } from "react-icons/cg";
import Heading from "@UI/Heading";
import useAnimation from "@hooks/useAnimation";
import aboutMeImage from "@assets/about-me-image.png";

const stats = [
  { icon: FaCode, value: "8+", label: "Years Experience" },
  { icon: FaProjectDiagram, value: "10+", label: "Projects" },
  { icon: FaLaptopCode, value: "12+", label: "Technologies" },
];

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS / CSS", level: 90 },
  { name: "AWS / Cloud", level: 70 },
  { name: "GraphQL / REST", level: 85 },
  { name: "Testing (Jest / Cypress)", level: 78 },
];

const About = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full flex justify-center items-center py-24 px-6 lg:px-12 bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-100"
    >
      <div className="relative max-w-6xl w-full mx-auto z-10">
        <FaUserCircle
          className={`mx-auto mb-4 text-primary transition-all duration-1000 ${
            hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          size={56}
          style={{ transitionDelay: "0.1s" }}
        />
        <Heading hasAnimated={hasAnimated}>About Me</Heading>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column — Image & Stats */}
          <div
            className={`flex flex-col items-center transition-all duration-1000 ${
              hasAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl group-hover:bg-primary/20 transition-all duration-500" />
              <img
                src={aboutMeImage}
                alt="Charlie Jeffries-Tipton"
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl border-2 border-primary/30 shadow-primary"
              />
            </div>

            {/* Stats Row */}
            <div className="flex gap-6 sm:gap-10 mt-8">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className={`text-center transition-all duration-1000 ${
                    hasAnimated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${0.5 + i * 0.15}s` }}
                >
                  <Icon className="text-primary mx-auto mb-1" size={22} />
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    {value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Bio & Skills */}
          <div
            className={`transition-all duration-1000 ${
              hasAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I am a passionate Senior Developer with 8+ years of experience
              building dynamic, user-friendly web applications. My expertise
              lies in React, TypeScript, Node.js, and modern cloud
              architectures. I thrive on solving complex problems while
              delivering efficient, scalable solutions with a keen eye for
              detail and clean, maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 text-sm sm:text-base">
              Beyond coding, I enjoy collaborating with cross-functional teams,
              mentoring junior developers, and staying at the forefront of
              emerging technologies to continuously sharpen my craft.
            </p>

            {/* Skill Bars */}
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Core Skills
              </h3>
              {skills.map(({ name, level }, i) => (
                <div
                  key={name}
                  className={`transition-all duration-700 ${
                    hasAnimated
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${0.6 + i * 0.1}s` }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-xs sm:text-sm text-gray-300">
                      {name}
                    </span>
                    <span className="text-xs text-primary font-semibold">
                      {level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out ${
                        hasAnimated ? "" : "!w-0"
                      }`}
                      style={{
                        width: hasAnimated ? `${level}%` : "0%",
                        transitionDelay: `${0.8 + i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action */}
            <div
              className={`mt-8 transition-all duration-1000 ${
                hasAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "1.6s" }}
            >
              <ButtonLink href="#tech-stack">
                My tech stack <CgChevronDown className="w-8 h-8" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
