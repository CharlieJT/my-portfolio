import SocialIcons from "@components/SocialIcons";
import Background from "@components/Background";
import DownChevron from "@components/DownChevron";
import MainContent from "@components/MainContent";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative text-white h-screen w-screen flex justify-center items-center text-center px-6 lg:px-12 font-sans"
    >
      <Background />
      <MainContent />
      <SocialIcons />
      <DownChevron />
    </section>
  );
};

export default Hero;
