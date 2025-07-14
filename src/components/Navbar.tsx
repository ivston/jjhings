import { useState } from "react";
import menuIcon from "../assets/burger-menu-svgrepo-com.svg";
import closeIcon from "../assets/close-md-svgrepo-com.svg";
import jjHingsBannerLogo from "../assets/jjhingsstraightbannerlogo.png";

interface NavbarProps {
  isLandingInView: boolean;
  isAboutInView: boolean;
  isFlavourGraveyardInView: boolean;
}

const Navbar = ({
  isLandingInView,
  isAboutInView,
  isFlavourGraveyardInView,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 bg-yellow-50 ">
      <div className="flex justify-between items-center w-full">
        {/* Logo (visible when NOT on landing) */}
        <div className="w-[150px]">
          {!isLandingInView && (
            <a
              href="#landing"
              className="block w-full h-auto"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={jjHingsBannerLogo}
                alt="JJ Hings Logo"
                className="w-full h-auto"
              />
            </a>
          )}
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 font-gabrito font-bold text-pink-400 text-xl">
          {!isAboutInView && (
            <li>
              <a href="#about">About Us</a>
            </li>
          )}
          {!isFlavourGraveyardInView && (
            <li>
              <a href="#flavourGraveyardPage">Flavour Graveyard</a>
            </li>
          )}
        </ul>

        {/* Mobile Burger Menu Button - always visible */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
          isMenuOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 font-gabrito font-bold text-pink-400 text-lg bg-yellow-50 p-4">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About Us 🔎
          </a>
          <a href="#flavourGraveyardPage" onClick={() => setIsMenuOpen(false)}>
            Flavour Graveyard 🪦🍦🧟‍♂️
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
