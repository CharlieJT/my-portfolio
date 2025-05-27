import ButtonLink from "@UI/ButtonLink";
import { CgChevronDown } from "react-icons/cg";
import Text from "@UI/Text";
import Heading from "@UI/Heading";
import useAnimation from "@hooks/useAnimation";

const About = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();

  const textClassName = ` transition-all duration-1000 mb-8 ${
    hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-screen w-screen flex justify-center items-center text-center px-6 lg:px-12 bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-100"
    >
      {/* Content */}
      <div className="relative max-w-6xl w-full mx-auto z-10 bg-gray-800 p-16  md:p-16 rounded-xl shadow-lg">
        <Heading hasAnimated={hasAnimated}>About Me</Heading>

        {/* First Paragraph */}
        <Text className={textClassName} style={{ transitionDelay: "0.4s" }}>
          I am a passionate Senior Developer with a strong focus on building
          dynamic, user-friendly web applications. My expertise lies in React,
          Node.js, and Tailwind CSS, and I thrive on solving complex problems
          while delivering efficient and scalable solutions. With a keen eye for
          detail and a love for clean, maintainable code, I aim to create
          experiences that delight users and drive results.
        </Text>

        {/* Second Paragraph */}
        <Text className={textClassName} style={{ transitionDelay: "0.6s" }}>
          Beyond coding, I enjoy collaborating with teams, mentoring junior
          developers, and staying up-to-date with the latest technologies to
          continuously improve my craft.
        </Text>

        {/* Call-to-Action */}
        <div
          className={`mt-8 transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <ButtonLink href="#projects">
            See my work <CgChevronDown className="w-8 h-8" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default About;
