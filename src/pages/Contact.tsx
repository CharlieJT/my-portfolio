import { useForm, ValidationError } from "@formspree/react";
import {
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import useAnimation from "@hooks/useAnimation";
import Heading from "@UI/Heading";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: "Email",
    value: "charliejt1992@hotmail.com",
    href: "mailto:charliejt1992@hotmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Charlie Jeffries-Tipton",
    href: "https://uk.linkedin.com/in/charlie-jeffries-tipton-720602173",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "CharlieJT",
    href: "https://github.com/CharlieJT",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "United Kingdom",
    href: undefined,
  },
];

const Contact = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();
  const [state, handleSubmit, reset] = useForm("xwvwbyzl");

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen w-full z-10 flex justify-center items-center py-24 px-6 sm:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
    >
      <div className="max-w-5xl w-full mx-auto">
        <EnvelopeIcon
          className={`mx-auto mb-4 text-primary transition-all duration-1000 ${
            hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{ transitionDelay: "0.1s" }}
          height={56}
          width={56}
        />
        <Heading hasAnimated={hasAnimated}>Get in Touch</Heading>

        <p
          className={`text-gray-400 text-center mt-6 max-w-2xl mx-auto text-sm sm:text-base transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          Got a question, a cool project idea, or just want to say hi? I would
          love to hear from you. Drop me a message and I will get back to you as
          soon as I can!
        </p>

        <div
          className={`mt-12 grid lg:grid-cols-2 gap-10 transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
              Contact Details
            </h3>
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <div
                  key={label}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 ${
                    href
                      ? "hover:border-primary/50 hover:shadow-primary hover:-translate-y-0.5 hover:duration-150 hover:[transition-delay:0ms] cursor-pointer"
                      : ""
                  } ${hasAnimated ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  style={{
                    transitionDelay: hasAnimated ? "0ms" : `${0.6 + i * 0.1}s`,
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm sm:text-base text-gray-200">
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 sm:p-8 transition-all duration-1000 ${
              hasAnimated
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircleIcon className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 mb-6">
                  Thanks for reaching out. I will get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => reset()}
                  className="text-primary hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-300 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
                      placeholder="Your name"
                    />
                    <ValidationError
                      field="name"
                      prefix="Name"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                    <ValidationError
                      field="email"
                      prefix="Email"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 resize-none"
                      placeholder="What would you like to say?"
                    />
                    <ValidationError
                      field="message"
                      prefix="Message"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {state.submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
