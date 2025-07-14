import "./App.css";
import LandingPage from "./pages/LandingPage";
import FlavourGraveyeardPage from "./pages/FlavourGraveyardPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Navbar is fixed at the top */}
      <Navbar />

      {/* Container for the pages */}
      <div className="flex flex-col text-pink-300 ">
        {/* Each page takes up the full height of the screen */}

        <section id="landing" className="min-h-screen pt-8">
          <LandingPage />
        </section>

        <section id="about" className="min-h-screen pt-8 ">
          <AboutPage />
        </section>
        <section id="flavourGraveyardPage" className="min-h-screen pt-8">
          <FlavourGraveyeardPage />
        </section>
      </div>
    </>
  );
}

export default App;
