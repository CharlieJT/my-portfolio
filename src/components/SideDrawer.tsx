import NavLinks from "./NavLinks";

type SideDrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
  navigateToSection: (id: string) => void;
};

const SideDrawer = ({
  isOpen,
  toggleDrawer,
  navigateToSection,
}: SideDrawerProps) => (
  <div
    className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white shadow-lg z-50 transform transition-transform duration-300 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <button
      onClick={toggleDrawer}
      className="absolute top-4 right-4 text-2xl focus:outline-none"
    >
      &times;
    </button>
    <NavLinks
      className="flex flex-col mt-16 space-y-6 px-6"
      navigateToSection={navigateToSection}
    />
  </div>
);

export default SideDrawer;
