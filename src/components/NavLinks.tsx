import DownloadCvButton from "./DownloadCvButton";
import NavLink from "./NavLink";

type NavLinksProps = {
  className: string;
  navigateToSection: (id: string) => void;
};

const NAV_LINKS = [
  { id: 1, text: "home", label: "Home" },
  { id: 2, text: "about", label: "About" },
  { id: 4, text: "projects", label: "Projects" },
  { id: 3, text: "experience", label: "Experience" },
  { id: 5, text: "contact", label: "Contact" },
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
