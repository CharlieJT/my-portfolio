import { useState } from "react";
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

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (field: keyof FormValues, value: string) => {
  const trimmedValue = value.trim();

  switch (field) {
    case "name":
      if (!trimmedValue) return "Please enter your name.";
      if (trimmedValue.length < 2) {
        return "Name must be at least 2 characters long.";
      }
      if (trimmedValue.length > 80) {
        return "Name must be 80 characters or fewer.";
      }
      return "";
    case "email":
      if (!trimmedValue) return "Please enter your email address.";
      if (!emailRegex.test(trimmedValue)) {
        return "Please enter a valid email address.";
      }
      return "";
    case "message":
      if (!trimmedValue) return "Please enter a message.";
      if (trimmedValue.length < 20) {
        return "Message must be at least 20 characters long.";
      }
      if (trimmedValue.length > 2000) {
        return "Message must be 2000 characters or fewer.";
      }
      return "";
    default:
      return "";
  }
};

const validateForm = (values: FormValues): FormErrors => ({
  name: validateField("name", values.name) || undefined,
  email: validateField("email", values.email) || undefined,
  message: validateField("message", values.message) || undefined,
});

const Contact = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();
  const [state, handleSubmit, reset] = useForm("xwvwbyzl");
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    name: false,
    email: false,
    message: false,
  });

  const errors = validateForm(formValues);
  const isFormValid = !Object.values(errors).some(Boolean);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const field = name as keyof FormValues;

    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as keyof FormValues;

    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const nextErrors = validateForm(formValues);
    const hasErrors = Object.values(nextErrors).some(Boolean);

    if (hasErrors) return;

    await handleSubmit(event);
  };

  const handleReset = () => {
    reset();
    setFormValues(initialValues);
    setTouched({
      name: false,
      email: false,
      message: false,
    });
  };

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
                  onClick={handleReset}
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
                <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
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
                      value={formValues.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors duration-200 ${
                        touched.name && errors.name
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                          : "border-gray-600 focus:border-primary focus:ring-primary"
                      }`}
                      placeholder="Your name"
                    />
                    {touched.name && errors.name && (
                      <p id="name-error" className="text-red-400 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
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
                      value={formValues.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors duration-200 ${
                        touched.email && errors.email
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                          : "border-gray-600 focus:border-primary focus:ring-primary"
                      }`}
                      placeholder="your@email.com"
                    />
                    {touched.email && errors.email && (
                      <p id="email-error" className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
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
                      value={formValues.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.message && errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors duration-200 resize-none ${
                        touched.message && errors.message
                          ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                          : "border-gray-600 focus:border-primary focus:ring-primary"
                      }`}
                      placeholder="What would you like to say?"
                    />
                    <div className="mt-1 flex items-center justify-between gap-3">
                      {touched.message && errors.message ? (
                        <p id="message-error" className="text-red-400 text-xs">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-xs text-gray-500">
                        {formValues.message.trim().length}/2000
                      </span>
                    </div>
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
                  {!isFormValid && Object.values(touched).some(Boolean) && (
                    <p className="text-xs text-red-400 text-center">
                      Please fix the highlighted fields before sending your message.
                    </p>
                  )}
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
