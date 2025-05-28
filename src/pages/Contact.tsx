import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import useAnimation from "@hooks/useAnimation";
import Heading from "@UI/Heading";
import Text from "@UI/Text";

const Contact = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="h-screen w-screen z-10 flex justify-center items-center text-center bg-white text-gray-900 px-6 sm:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <Heading hasAnimated={hasAnimated} style={{ color: "#111827" }}>
          Get in Touch
        </Heading>

        <Text
          className={`text-gray-600 leading-relaxed transition-all duration-1000 mt-8 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          Got a question, a cool project idea, or just want to say hi? I’m
          always up for a chat! Whether you’re looking to team up, need some
          help with a project, or just want to talk tech, feel free to reach
          out. My inbox is always open, and I’ll do my best to get back to you
          as soon as I can!
        </Text>

        <div
          className={`mt-10 flex flex-col sm:flex-row justify-center gap-6 transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <a
            href="mailto:charliejt1992@hotmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 border border-teal-500 text-teal-600 rounded-md hover:bg-teal-500 hover:text-white transition duration-300"
          >
            <EnvelopeIcon className="h-5 w-5" />
            charliejt1992@hotmail.com
          </a>

          <a
            href="https://uk.linkedin.com/in/charlie-jeffries-tipton-720602173"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            <LinkIcon className="h-5 w-5" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
