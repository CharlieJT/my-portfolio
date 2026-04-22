import { useEffect, useState } from "react";

const sections = [
  "hero",
  "about",
  "tech-stack",
  "projects",
  "experience",
  "contact",
];

const ScrollIndicator = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 80; // account for navbar height
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = sections.indexOf(active);

  return (
    <div className="hidden md:block md:fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
      {sections.map((id, index) => (
        <div key={id} className="flex flex-col items-center">
          <button
            onClick={() => {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label={`Scroll to ${id}`}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              index <= activeIndex
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-800 border-gray-400"
            }`}
          />
          {index < sections.length - 1 && (
            <div
              className={`w-[2px] h-8 ${
                index < activeIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
