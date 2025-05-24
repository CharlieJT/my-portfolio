import IconLink from "./IconLink";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    id: 1,
    IconComponent: FaLinkedin,
    href: "https://uk.linkedin.com/in/charlie-jeffries-tipton-720602173",
    text: "LinkedIn",
  },
  {
    id: 2,
    IconComponent: FaGithub,
    href: "https://github.com/CharlieJT",
    text: "GitHub",
  },
];

const SocialIcons = () => {
  return (
    <div className="absolute bottom-10 left-6 lg:left-12 flex gap-4 z-10">
      {SOCIAL_LINKS.map(({ id, IconComponent, href, text }) => (
        <IconLink
          key={id}
          IconComponent={IconComponent}
          href={href}
          text={text}
          className="group w-10 h-10 flex justify-center items-center border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transition duration-200 relative"
          colour="primary"
        />
      ))}
    </div>
  );
};

export default SocialIcons;
