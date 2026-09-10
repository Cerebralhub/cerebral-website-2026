import React from "react";
import servicesHeaderImage from "../assets/png/servicesHeaderImage.png";

export const SubpageHero = () => {
  return (
    <div className="flex justify-between">
      {/* write-up */}
      <div className="flex flex-col justify-center space-y-5">
        <h2 className=" text-6xl font-semibold">
          We serve clients <br /> with ground <br /> breaking solutions
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
          Aliquam leo odio, sagittis quis ornare quis.
        </p>
        <button className="bg-cerebralOrange-600 text-white font-semibold text-sm px-4 py-2 rounded-full w-fit">
          Work With Us
        </button>
      </div>
      {/* image */}
      <div>
        <img src={servicesHeaderImage} alt="" className="" />
      </div>
    </div>
  );
};
