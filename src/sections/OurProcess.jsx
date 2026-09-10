import React from "react";
import discoverNeedsImage from "../assets/webp/needs.webp";
import tailoredStrategyImage from "../assets/webp/tailored_strategy.webp";
import exceptionalResultsImage from "../assets/webp/exceptional_results.webp";
import arrowSvg from "../assets/svg/right-arrow-svg.svg";
import {Link} from "react-router-dom";

const features = [
  {
    image: discoverNeedsImage,
    title: "Discover Your Needs",
    body: "Describe the initial consultation and research phase.",
    actionButtonText: "Learn More",
  },
  {
    image: tailoredStrategyImage,
    title: "Develop a Tailored Strategy",
    body: "Outline the planning and design process.",
    actionButtonText: "Learn More",
  },
  {
    image: exceptionalResultsImage,
    title: "Deliver Exceptional Results",
    body: "Highlight the execution and delivery",
    actionButtonText: "Learn More",
  },
];

export const OurProcess = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* title and writeup */}
        <div className="mb-16">
          <h2 className=" text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-cerebralGrey-600">
            Our Process
          </h2>
          {/* <p className="xl:w-1/2 text-cerebralGrey-500">
            We interpret and create vivid imagery of your ideas using simple
            storytelling and creative tools to keep your audience thoroughly
            engaged. Whether in print or digital format, we think about what
            your idea should and can be, and then we tell and sell a story where
            your idea takes on a simple, yet distinctive and relatable visual
            form. Your ideas won&apos;t keep, something has to bring them to
            life - and that&apos;s where we come in.
          </p> */}
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8 md:space-y-0 gap-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-3 bg-cerebralBlue-700 text-2xl text-white w-16 h-16 rounded-full flex justify-center items-center font-bold">
                {index + 1}
                {/* <img src={feature.image} className=" shadow-lg w-80" /> */}
              </div>
              <div className="text-center">
                <h3 className="text-xl text-cerebralGrey-700 font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="w-11/12 text-cerebralGrey-500">{feature.body}</p>
              </div>

              {/* <div className="group font-semibold flex items-center py-3 w-fit text-cerebralOrange-600">
                <p>{feature.actionButtonText}</p>
                <img
                  src={arrowSvg}
                  alt="right arrow"
                  className="h-6 ml-2 group-hover:translate-x-2 duration-500"
                />
              </div> */}
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="our-work"
            className="bg-cerebralOrange-600 text-white font-medium px-7 py-3 rounded-full"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};
