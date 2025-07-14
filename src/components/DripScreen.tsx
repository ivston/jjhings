import { useEffect, useState } from "react";

const DripScreen = () => {
  const [hideDrip, setHideDrip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideDrip(true);
    }, 2000); // duration of the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-yellow-100 flex items-end justify-center transition-opacity duration-700 ${
        hideDrip ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div className="w-full h-[200px] bg-yellow-200 drip-animation" />
    </div>
  );
};

export default DripScreen;
