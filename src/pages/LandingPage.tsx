import React from "react";
import jjhingslogo from "../assets/jjhingsandthingslogo.png";
// import jjhingsMap from "../assets/jjhingsmap.png";

const LandingPage: React.FC = () => {
  return (
    <div className="pt-10 flex-col">
      <div className="flex justify-center w-full pt-5">
        <img className="w-1/2" src={jjhingslogo} alt="JJ Hings Logo" />
      </div>

      <div className="w-full flex justify-center font-gabarito">
        <address className="text-2xl pb-10 font-gabarito not-italic text-4xl">
          46 Rue Bichat, 75010 Paris
        </address>
      </div>

      <div className="pt-10 flex flex-col items-center font-gabarito">
        <div className="flex flex-row gap-10 items-start justify-center">
          <div className="flex flex-col gap-4 text-2xl text-left">
            <div className="flex gap-20">
              <div className="font-bold">Thursday to Saturday</div>
              <div>2pm - 10pm</div>
            </div>
            <div className="flex gap-20 justify-between">
              <div className="font-bold">Sunday</div>
              <div>1pm - 8pm</div>
            </div>
            <div className="pt-6 flex items-center justify-center">
              <p className="text-2xl">Closed on Mondays and Tuesdays</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
