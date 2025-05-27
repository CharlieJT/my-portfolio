import { Typed } from "react-typed";
import DeveloperIcons from "@components/DeveloperIcons";
import Text from "@UI/Text";
import { CgChevronDown } from "react-icons/cg";
import ButtonLink from "@UI/ButtonLink";

const MainText = () => (
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
          <span
            className="typed-text"
            ref={(el) => {
              new Typed(el, {
                strings: ["Senior Developer"],
                typeSpeed: 50,
                backSpeed: 30,
                startDelay: 1000,
                loop: false,
              });
            }}
          ></span>
        </span>
      </h2>
      <Text
        className="max-w-md lg:max-w-lg opacity-0 animate-fade-in-up z-10"
        style={{ animationDelay: "0.6s" }}
      >
        I'm a UK-based Senior Developer with 7+ years of experience,
        specializing in Front-End development—especially with React and
        TypeScript. I've built responsive, component-driven UIs from Figma
        designs, integrated APIs seamlessly, and worked with stacks using
        Next.js, AWS (Serverless, Lambda, API Gateway), REST & GraphQL. I have
        also used CSS libraries such as Bootstrap, Tailwind & MUI.
      </Text>
      <DeveloperIcons />
      <ButtonLink href="#about">
        See more <CgChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
      </ButtonLink>
    </div>
  </>
);

export default MainText;
