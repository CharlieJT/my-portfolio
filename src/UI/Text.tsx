import React from "react";

type TextProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Text = ({ className, style, children }: TextProps) => (
  <p
    className={`mt-2 lg:mt-4 text-[0.75rem] sm:text-sm md:text-md lg:text-base${
      className ? ` ${className}` : ""
    }`}
    style={style}
  >
    {children}
  </p>
);

export default Text;
