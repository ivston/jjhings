import React from "react";
import scoopingImage from "../assets/scooping.jpeg";

const AboutPage: React.FC = () => {
  return (
    <div className="pt-10 px-6 md:px-36">
      <div className="flex flex-col items-center">
        <img
          className="w-full max-h-[300px] object-contain mb-6 rounded"
          src={scoopingImage}
          alt="Julia scooping ice cream"
        />

        <p className="p-5 max-w-3xl text-left">Hello!</p>
        <p className="p-5 max-w-3xl text-left">
          I'm Julia, Chef/Owner/One Woman Show of JJ HINGS, a Pastry Chef/Ice
          Cream Maker!
        </p>

        <p className="p-5 max-w-3xl text-left">
          I'm passionate about using fresh, responsibly sourced ingredients and
          making flavour combinations inspired by the tastes I grew up with and
          the people I love.
        </p>

        <p className="p-5 max-w-3xl text-left">
          JJ HINGS is named for Jean and Jackson Hing, my grandmother and great
          uncle. Our family has a long tradition of growing and working with the
          freshest produce.
        </p>

        <p className="p-5 max-w-3xl text-left">
          My beautiful logo, designed by the talented @isaacstillart and brought
          to life by the amazing @bee_brown.indd, is a recreation of the logo
          from my great-grandfather’s market garden business (vegetable
          farming), which you can see on their truck!
        </p>

        <p className="p-5 max-w-3xl text-left">
          I'm very proud to bring a part of their history with me into my own
          venture.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
