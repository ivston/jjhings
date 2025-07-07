import React from "react";

const FindUsPage: React.FC = () => {
  return (
    <div className="pt-10 flex flex-col items-center gap-10">
      <div className="flex flex-row gap-10 items-center justify-center">
        <div className="flex flex-col pr-10 gap-5">
          <h1 className="text-4xl">We are open</h1>
          <p className="font-bold">on Thursdays and Fridays</p>
          <p>from 2pm till 10pm</p>
          <p className="font-bold">on Saturdays and Sundays</p>
          <p>from 1pm till 10pm</p>
        </div>
        <div className="flex-col pl-10 w-1/2">
          <img
            src="provisionalmap.png"
            alt="JJ Hings location on the map"
            className="w-2/3"
          />
        </div>
      </div>
      <address className="text-2xl pb-10">46 Rue Bichat, 75010 Paris</address>
    </div>
  );
};

export default FindUsPage;
