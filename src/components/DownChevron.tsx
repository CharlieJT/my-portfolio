import { FaChevronDown } from "react-icons/fa";

const DownChevron = () => (
  <div className="absolute bottom-8 flex justify-center z-10">
    <a
      href="#about"
      className="text-primary text-3xl animate-bounce cursor-pointer"
      aria-label="Scroll down"
    >
      <FaChevronDown />
    </a>
  </div>
);

export default DownChevron;
