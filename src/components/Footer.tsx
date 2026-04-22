import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="w-full text-center py-6 bg-gray-900 border-t border-gray-800 text-gray-400 z-10">
    <div className="flex justify-center gap-4 mb-3">
      <a
        href="https://uk.linkedin.com/in/charlie-jeffries-tipton-720602173"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-primary transition-colors duration-200"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={18} />
      </a>
      <a
        href="https://github.com/CharlieJT"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-primary transition-colors duration-200"
        aria-label="GitHub"
      >
        <FaGithub size={18} />
      </a>
    </div>
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Charlie Jeffries-Tipton. All rights
      reserved.
    </p>
  </footer>
);

export default Footer;
