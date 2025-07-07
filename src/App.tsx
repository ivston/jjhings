import "./App.css";
import LandingPage from "./pages/LandingPage";
// import FindUsPage from "./pages/FindUsPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Navbar is fixed at the top */}
      <Navbar />

      {/* Container for the pages */}
      <div className="flex flex-col text-pink-300">
        {/* Each page takes up the full height of the screen */}

        <section id="landing" className="min-h-screen pt-7">
          <LandingPage />
        </section>

        <section id="about" className="min-h-screen pt-7 bg-white">
          <AboutPage />
        </section>
      </div>
    </>
  );
}

export default App;
