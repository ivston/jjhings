import { useState } from "react";
import useSectionInView from "../hooks/useSectionInView";
import menuIcon from "../assets/burger-menu-svgrepo-com.svg";
import closeIcon from "../assets/close-md-svgrepo-com.svg";
import jjHingsBannerLogo from "../assets/jjhingsstraightbannerlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLandingInView = useSectionInView("landing");
  const isAboutInView = useSectionInView("about");

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Brand Logo */}
        {!isLandingInView && (
          <div className="flex justify-center w-full">
            <a href="#landing" className="block w-[150px] h-auto">
              <img
                src={jjHingsBannerLogo}
                alt="JJ Hings Logo"
                className="w-full h-auto"
              />
            </a>
          </div>
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 font-gabrito font-bold text-pink-400 text-xl">
          {!isAboutInView && <a href="#about">About Us</a>}
        </ul>

        {/* Burger Icon - Mobile only, hidden on About section */}
        {!isAboutInView && (
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              className="h-8 w-8"
            />
          </button>
        )}
      </div>

      {/* Mobile Dropdown Menu with Slide Effect */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
          isMenuOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 font-gabrito font-bold text-pink-400 text-lg bg-white p-4">
          {!isLandingInView && (
            <a
              href="#landing"
              className="block w-[150px] h-auto"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={jjHingsBannerLogo}
                alt="JJ Hings Logo"
                className="w-full h-auto"
              />
            </a>
          )}
          {!isAboutInView && (
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
