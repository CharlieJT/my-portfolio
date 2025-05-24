type HamburgerIconProps = {
  toggleDrawer: () => void;
};

const HamburgerIcon = ({ toggleDrawer }: HamburgerIconProps) => (
  <div className="md:hidden">
    <button onClick={toggleDrawer} className="focus:outline-none">
      <div className="w-6 h-0.5 bg-white mb-1"></div>
      <div className="w-6 h-0.5 bg-white mb-1"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </button>
  </div>
);

export default HamburgerIcon;
