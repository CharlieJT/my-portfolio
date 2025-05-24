import MainImage from "./MainImage";
import MainText from "./MainText";

const MainContent = () => (
  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl z-10">
    <MainImage />
    <MainText />
  </div>
);

export default MainContent;
