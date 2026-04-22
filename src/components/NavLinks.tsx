import DownloadCvButton from "./DownloadCvButton";
import NavLink from "./NavLink";

type NavLinksProps = {
  className: string;
  navigateToSection: (id: string) => void;
};

const NAV_LINKS = [
  { id: 1, text: "home", label: "Home" },
  { id: 2, text: "about", label: "About" },
  { id: 3, text: "tech-stack", label: "Tech Stack" },
  { id: 4, text: "projects", label: "Projects" },
  { id: 5, text: "experience", label: "Experience" },
  { id: 6, text: "contact", label: "Contact" },
];

const NavLinks = ({ className, navigateToSection }: NavLinksProps) => (
  <div className={className}>
    {NAV_LINKS.map((navLink) => (
      <NavLink
        key={navLink.id}
        navLink={navLink}
        navigateToSection={navigateToSection}
      />
    ))}
    <div className="flex justify-center animate-float-in">
      <DownloadCvButton />
    </div>
  </div>
);

export default NavLinks;
