type NavLinkProps = {
  navLink: { id: number; text: string; label: string };
  navigateToSection: (id: string) => void;
};

const NavLink = ({
  navLink: { id, text, label },
  navigateToSection,
}: NavLinkProps) => (
  <button
    key={id}
    onClick={() => navigateToSection(text)}
    className="hover:text-primary opacity-0 animate-float-in"
    style={{
      animationDelay: `${id * 0.1}s`,
      animationFillMode: "forwards",
    }}
  >
    {label}
  </button>
);

export default NavLink;
