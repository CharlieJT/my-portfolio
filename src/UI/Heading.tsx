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
    <>
      <>
        <Tag
          className={`text-4xl sm:text-5xl font-extrabold tracking-wide text-white transition-all duration-1000 ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }${className ? ` ${className}` : ""}`}
          style={{ transitionDelay: "0.2s", ...style }}
        >
          {children}
        </Tag>
        <Divider hasAnimated={hasAnimated} style={dividerStyle} />
      </>
    </>
  );
};

export default Heading;
