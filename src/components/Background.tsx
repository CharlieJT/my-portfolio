import backgroundImage from "../assets/portfolio-background-image.png";

const Background = () => (
  <>
    <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-black to-black opacity-70 z-10"></div>
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></div>
  </>
);

export default Background;
