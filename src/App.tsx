import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import PageDivider from "./components/PageDivider";
import ScrollIndicator from "./components/ScrollIndicator";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <ErrorBoundary>
      <ScrollIndicator />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <Navbar />
        <Hero />
        <About />
        <PageDivider />
        <Projects />
        <PageDivider />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
