import cvFile from "../assets/charlie-jeffries-tipton-cv.pdf";

const DownloadCvButton = () => (
  <a
    href={cvFile}
    download="charlie-jeffries-tipton-cv.pdf"
    className="inline-block bg-primary bg-opacity-20 border border-primary text-primary font-bold py-2 px-4 rounded-full shadow-primary hover:bg-primary hover:bg-opacity-100 hover:text-gray-800 hover:shadow-lg transition duration-200 opacity-0 animate-bounce-in z-10 text-sm w-40 text-center"
    style={{
      animationDelay: "0.8s",
      animationFillMode: "forwards",
    }}
  >
    Download CV
  </a>
);

export default DownloadCvButton;
