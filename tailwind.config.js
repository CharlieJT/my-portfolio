// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#333",
      },
      boxShadow: {
        primary: "0 0px 20px -1px rgba(29, 161, 242, 0.5)",
        imagePrimary: "0 0px 30px 5px rgba(29, 161, 242, 0.5)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        "float-in": "floatIn 0.5s ease-out forwards",
        "float-in-left": "floatInLeft 0.8s ease-out forwards",
        "float-in-right": "floatInRight 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "bounce-in": "bounceIn 0.8s ease-out forwards",
        "rise-up": "riseUp 0.7s ease-out forwards",
        "modal-slide-up": "modalSlideUp 0.3s ease-out",
        "modal-slide-down": "modalSlideDown 0.3s ease-in",
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        floatInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        riseUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        modalSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        modalSlideDown: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },
      },
    },
  },
  plugins: [],
};
