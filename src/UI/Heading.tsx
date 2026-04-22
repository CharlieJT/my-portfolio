import React from "react";
import Divider from "./Divider";

type HeadingProps = {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  style?: React.CSSProperties;
  hasAnimated?: boolean;
  dividerStyle?: React.CSSProperties;
};

const Heading = ({
  children,
  variant = "h2",
  className = "",
  hasAnimated = true,
  style,
  dividerStyle,
}: HeadingProps) => {
  const Tag = variant as React.ElementType;

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative inline-flex items-center justify-center px-5">
        <div
          className={`absolute -inset-x-3 -inset-y-2 rounded-full bg-primary/20 blur-xl transition-all duration-1000 ${
            hasAnimated ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{ transitionDelay: "0.25s" }}
        />

        <span
          className={`hidden sm:block absolute -left-12 lg:-left-28 w-8 lg:w-24 h-px bg-gradient-to-l from-primary/70 to-transparent transition-all duration-1000 ${
            hasAnimated ? "opacity-100" : "opacity-0"
          }`}
        />
        <span
          className={`hidden sm:block absolute -right-12 lg:-right-28 w-8 lg:w-24 h-px bg-gradient-to-r from-primary/70 to-transparent transition-all duration-1000 ${
            hasAnimated ? "opacity-100" : "opacity-0"
          }`}
        />

        <Tag
          className={`relative inline-block pb-1 text-4xl sm:text-5xl leading-[1.15] font-extrabold tracking-wide text-center bg-gradient-to-r from-sky-300 via-sky-600 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(29,161,242,0.3)] transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }${className ? ` ${className}` : ""}`}
          style={{ transitionDelay: "0.2s", ...style }}
        >
          {children}
        </Tag>
      </div>

      <Divider hasAnimated={hasAnimated} style={dividerStyle} />
    </div>
  );
};

export default Heading;
