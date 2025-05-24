import React from "react";

type IconLinkProps = {
  IconComponent: React.ElementType;
  text: string;
  href: string;
  style?: { animationDelay: string };
  colour?: string;
  className?: string;
};

const IconLink = ({
  IconComponent,
  text,
  href,
  style,
  colour,
  className,
}: IconLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={
      className ??
      "group relative w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full shadow-lg opacity-0 animate-fade-in-up cursor-pointer z-20"
    }
    style={{ ...style, animationDelay: style?.animationDelay ?? "0s" }}
  >
    <IconComponent
      className={`text-xl text-${colour ?? "gray"}-400`}
      size={20}
    />
    <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-200">
      {text}
    </span>
  </a>
);

export default IconLink;
