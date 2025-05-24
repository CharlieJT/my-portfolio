import portfolioImage from "../assets/portfolio-image.png";

const MainImage = () => (
  <div
    className="relative flex-shrink-0 w-80 h-80 scale-75 lg:scale-100 lg:order-2 w-[16rem] h-[16rem] lg:w-[20rem] lg:h-[20rem] border-8 border-primary rounded-full shadow-imagePrimary box-content opacity-0 animate-rise-up"
    style={{ animationDelay: "1s", animationFillMode: "forwards" }}
  >
    <div className="absolute w-64 h-32 lg:w-80 lg:h-40 border-8 border-primary rounded-b-full border-t-0 box-content top-[128px] lg:top-[160px] -left-[8px] z-10"></div>
    <div className="absolute inset-0 m-auto w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-b from-transparent via-transparent-800 to-blue-400 rounded-full"></div>
    <img
      src={portfolioImage}
      alt="Portfolio"
      className="relative w-[30rem] h-[34rem] lg:w-[28rem] lg:h-[44rem] -mt-8 rounded-full object-cover object-top -top-[135px] lg:-top-[195px] shadow-lg"
      style={{
        clipPath: "ellipse(55% 29% at 50% 49%)",
      }}
    />
  </div>
);

export default MainImage;
