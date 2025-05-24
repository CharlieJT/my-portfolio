import { useState, useEffect } from "react";
import NavLinks from "../components/NavLinks";
import SideDrawer from "../components/SideDrawer";
import HamburgerIcon from "../components/HamburgerIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Check scroll position to add background effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the drawer if the page width exceeds mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const closeDrawerOnBackdropClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-70 h-12" : "bg-transparent h-16"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => navigateToSection("home")}
        >
          My Portfolio
        </div>
        <NavLinks
          className="hidden md:flex space-x-6 text-white"
          navigateToSection={navigateToSection}
        />
        <HamburgerIcon toggleDrawer={toggleDrawer} />
      </div>

      {/* Backdrop that closes the drawer when clicked */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeDrawerOnBackdropClick}
        />
      )}

      {/* Side Drawer */}
      <SideDrawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        navigateToSection={navigateToSection}
      />
    </nav>
  );
};

export default Navbar;
