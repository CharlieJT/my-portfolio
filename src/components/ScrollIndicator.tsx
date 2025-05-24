import { useEffect, useState } from "react";

const sections = ["hero", "about", "projects", "experience", "contact"];

const ScrollIndicator = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = sections.indexOf(active);

  return (
    <div className="hidden md:block md:fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
      {sections.map((id, index) => (
        <div key={id} className="flex flex-col items-center">
          <a
            href={`#${id}`}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              index <= activeIndex
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-800 border-gray-400"
            }`}
          ></a>
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
