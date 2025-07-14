import React from "react";
import jjhingslogo from "../assets/jjhingsandthingslogo.png";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-gabarito">
      {/* Logo Section: Centered between navbar and content */}
      <div className="flex items-center justify-center min-h-[30vh] px-4 pt-24">
        <img className="w-1/2 max-w-md" src={jjhingslogo} alt="JJ Hings Logo" />
      </div>

      {/* Main Content: Address + Opening Hours */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <address className="text-2xl pb-10 not-italic text-3xl text-center">
          <a
            href="https://maps.app.goo.gl/rvcfsFFgcFWmkgUq7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300
            text-amber-700"
          >
            46 Rue Bichat, 75010 Paris
          </a>
        </address>
        <div className="flex flex-col gap-4 text-2xl text-center">
          <div className="flex justify-between gap-10">
            <div className="font-bold ">Thursday to Saturday</div>
            <div className="text-amber-700">2pm - 10pm</div>
          </div>
          <div className="flex justify-between gap-10">
            <div className="font-bold">Sunday</div>
            <div className="text-amber-700">1pm - 8pm</div>
          </div>
          <p className="text-2xl pt-6 text-amber-700 font-bold">
            Closed Mondays, Tuesdays and Wednesdays
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
