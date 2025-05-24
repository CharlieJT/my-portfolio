import { useEffect, useRef, useState } from "react";
import { CgChevronDown } from "react-icons/cg";

const About = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-screen w-screen flex justify-center items-center text-center px-6 lg:px-12 bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-100"
    >
      {/* Content */}
      <div className="relative max-w-6xl w-full mx-auto z-10 bg-gray-800 p-4 sm:p-8 md:p-32 rounded-xl shadow-lg">
        {/* Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-extrabold tracking-wide text-white transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          About Me
        </h2>

        {/* Divider */}
        <div
          className={`w-16 h-1 bg-primary mx-auto mt-4 transition-all duration-1000 ${
            hasAnimated ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        ></div>

        {/* First Paragraph */}
        <p
          className={`mt-6 text-sm sm:text-xl leading-relaxed text-gray-300 transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          I am a passionate Senior Developer with a strong focus on building
          dynamic, user-friendly web applications. My expertise lies in React,
          Node.js, and Tailwind CSS, and I thrive on solving complex problems
          while delivering efficient and scalable solutions. With a keen eye for
          detail and a love for clean, maintainable code, I aim to create
          experiences that delight users and drive results.
        </p>

        {/* Second Paragraph */}
        <p
          className={`mt-4 text-sm sm:text-xl leading-relaxed text-gray-300 transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          Beyond coding, I enjoy collaborating with teams, mentoring junior
          developers, and staying up-to-date with the latest technologies to
          continuously improve my craft.
        </p>

        {/* Call-to-Action */}
        <div
          className={`mt-8 transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.8s" }}
        >
          <a
            href="#projects"
            className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-full shadow-primary hover:shadow-lg transition duration-200 opacity-0 animate-bounce-in z-10 text-base mt-4"
            style={{
              animationDelay: "0.8s",
              animationFillMode: "forwards",
            }}
          >
            <span className="flex items-center gap-2 text-lg">
              See my work <CgChevronDown className="w-8 h-8" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
