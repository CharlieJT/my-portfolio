import NovunaImage from "@assets/novuna-image.png";
import BoohooImage from "@assets/boohoo-image.png";
import RKWImage from "@assets/rkw-image.png";
import Heading from "@UI/Heading";
import useAnimation from "@hooks/useAnimation";

const ExperienceTimeline = () => {
  const { ref: sectionRef, hasAnimated } = useAnimation();

  const EMPLOYMENT_HISTORY = [
    {
      title: "Senior Developer",
      company: "Novuna",
      period: "December 2022 - Present",
      image: NovunaImage,
      summary:
        "At Novuna, I’m a Senior Developer working on the Mercury Project, helping build and enhance the company’s internal finance portal.",
      highlights: [
        "Developed a live pricing adjustment tool for real-time quoting.",
        "Designed scalable and user-friendly features.",
        "Collaborated with teams to integrate new functionalities.",
        "Optimized performance for a smoother user experience.",
        "Improved internal tools to boost efficiency.",
      ],
    },
    {
      title: "React Developer",
      company: "Boohoo Group PLC",
      period: "February 2021 - December 2022",
      image: BoohooImage,
      summary:
        "Worked on both customer-facing websites and internal business tools using modern technologies including React.js, TypeScript, and GraphQL.",
      highlights: [
        "Helped build and maintain the Debenhams website with 30 developers.",
        "Implemented tests with Jest and Cypress.",
        "Reviewed code to ensure high-quality standards.",
        "Contributed to Boohoo’s internal supplier hub.",
        "Worked across React, Redux, Node.js, and MongoDB.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "RKW Limited",
      period: "June 2019 - February 2021",
      image: RKWImage,
      summary:
        "Focused on building and maintaining the frontend of the RKW website using ReactJS and Redux while collaborating with backend teams.",
      highlights: [
        "Built and maintained the RKW frontend in ReactJS.",
        "Worked with REST APIs and CRUD operations.",
        "Enhanced UI with thoughtful design improvements.",
        "Ensured full frontend-backend integration.",
        "Gained deep expertise in web fundamentals.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-screen px-6 py-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-black"
    >
      <div className="max-w-5xl mx-auto">
        <Heading hasAnimated={hasAnimated} className="text-center">
          Employment History
        </Heading>
        <div className="mt-16 relative">
          <div className="absolute left-4 sm:left-[25px] top-0 w-0.5 bg-primary h-full z-0 rounded-full"></div>
          <div className="space-y-16 pl-12 sm:pl-20">
            {EMPLOYMENT_HISTORY.map((job, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  hasAnimated
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
              >
                <div
                  className="absolute -left-[52px] sm:-left-[93px] top-[40%] w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-cover bg-center border-4 border-primary shadow-md z-10"
                  style={{
                    backgroundImage: `url(${job.image})`,
                  }}
                >
                  <div
                    className="absolute -right-2 sm:-right-[17px] w-2 sm:w-[16px] h-0.5 bg-primary z-0"
                    style={{ top: "50%" }}
                  ></div>
                </div>
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-primary via-blue-300 to-primary">
                  <div className="bg-gradient-to-bl from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl shadow-md">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {job.title}
                          {" -"}
                          <span className="text-primary"> {job.company}</span>
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {job.period}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-300">{job.summary}</p>
                    <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                      {job.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
