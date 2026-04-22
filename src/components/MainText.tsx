import { Typed } from "react-typed";
import Text from "@UI/Text";
import { CgChevronDown } from "react-icons/cg";
import ButtonLink from "@UI/ButtonLink";
import { useEffect, useRef, useState } from "react";

const taglines = [
  "Building performant UIs",
  "Crafting pixel-perfect experiences",
  "Turning ideas into reality",
  "Writing clean, scalable code",
];

const MainText = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setFadeIn(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ["Senior Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 1000,
      loop: false,
    });
    return () => typed.destroy();
  }, []);

  return (
    <>
      <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
        <h2
          className="text-base sm:text-lg lg:text-xl leading-tight opacity-0 animate-float-in-left z-10"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm
        </h2>
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight opacity-0 animate-float-in-right z-10"
          style={{ animationDelay: "0.4s" }}
        >
          Charlie Jeffries-Tipton
        </h1>
        <h2 className="text-base sm:text-lg lg:text-xl leading-tight mt-2 z-10">
          I am a{" "}
          <span className="text-primary font-bold">
            <span ref={typedRef} className="typed-text"></span>
          </span>
        </h2>

        {/* Animated tagline */}
        <p
          className={`text-sm sm:text-base lg:text-lg text-primary/70 italic mt-1 z-10 transition-all duration-500 opacity-0 animate-fade-in-up ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          {taglines[taglineIndex]}
        </p>

        <Text
          className="max-w-md lg:max-w-lg opacity-0 animate-fade-in-up z-10"
          style={{ animationDelay: "0.6s" }}
        >
          I'm a UK-based Senior Developer with 8+ years of experience,
          specializing in Front-End development—especially with React and
          TypeScript. I've built responsive, component-driven UIs from Figma
          designs, integrated APIs seamlessly, and worked with stacks using
          Next.js, AWS (Serverless, Lambda, API Gateway), REST & GraphQL.
        </Text>
        <ButtonLink href="#about">
          See more <CgChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </ButtonLink>
      </div>
    </>
  );
};

export default MainText;
