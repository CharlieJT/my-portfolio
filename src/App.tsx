import Projects from "@pages/Projects";
import ErrorBoundary from "@components/ErrorBoundary";
import Footer from "@components/Footer";
import PageDivider from "@components/PageDivider";
import ScrollIndicator from "@components/ScrollIndicator";
import ScrollToTop from "@components/ScrollToTop";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Experience from "@pages/Experience";
import Hero from "@pages/Hero";
import Navbar from "@pages/Navbar";
import TechStack from "@pages/TechStack";

function App() {
  return (
    <ErrorBoundary>
      <ScrollIndicator />
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
        <Navbar />
        <Hero />
        <About />
        <PageDivider />
        <TechStack />
        <PageDivider />
        <Projects />
        <PageDivider />
        <Experience />
        <PageDivider />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
