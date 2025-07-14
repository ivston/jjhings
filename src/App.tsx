import "./App.css";
import { useRef } from "react";
import LandingPage from "./pages/LandingPage";
import FlavourGraveyeardPage from "./pages/FlavourGraveyardPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import useSectionInView from "./hooks/useSectionInView";
import Footer from "./components/Footer";
// import DripScreen from "./components/DripScreen";

function App() {
  // Create refs for each section
  const landingRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const graveyardRef = useRef<HTMLElement>(null);

  // Use the hook to track if each section is in view
  const isLandingInView = useSectionInView(landingRef);
  const isAboutInView = useSectionInView(aboutRef);
  const isFlavourGraveyardInView = useSectionInView(graveyardRef);

  return (
    <>
      {/* <DripScreen /> */}
      {/* Navbar is fixed at the top */}
      <Navbar
        isLandingInView={isLandingInView}
        isAboutInView={isAboutInView}
        isFlavourGraveyardInView={isFlavourGraveyardInView}
      />

      {/* Container for the pages */}
      <div className="flex flex-col text-pink-300">
        {/* Each page takes up the full height of the screen */}
        <section ref={landingRef} id="landing" className="min-h-screen pt-8">
          <LandingPage />
        </section>

        <section ref={aboutRef} id="about" className="min-h-screen">
          <AboutPage />
        </section>

        <section
          ref={graveyardRef}
          id="flavourGraveyardPage"
          className="min-h-screen pt-8"
        >
          <FlavourGraveyeardPage />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
