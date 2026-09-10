import React from "react";
import simpleSvg from "../assets/svg/simple.svg";
import creativeSvg from "../assets/svg/creative.svg";
import engagingSvg from "../assets/svg/engaging.svg";

const features = [
  {
    image: simpleSvg,
    title: "Creative Expertise",
    body: "With a team dedicated to cutting-edge design and strategy, we deliver high-impact content that speaks to audiences. Our creativity transforms your vision into visuals and messaging that resonate.",
  },
  {
    image: engagingSvg,
    title: "Industry Experience",
    body: "We bring years of industry knowledge to every project, allowing us to anticipate challenges and create solutions that align perfectly with your business goals.",
  },
  {
    image: creativeSvg,
    title: "Client-Centered Approach",
    body: "We work as your partners, immersing ourselves in your brand’s unique needs. Our focus is on achieving your objectives, ensuring each project is as impactful as it is authentic.",
  },
  {
    image: creativeSvg,
    title: "Results-Driven Strategies",
    body: "At Cerebral Hub, we measure success by the results we achieve for you. Every strategy we develop is backed by metrics and insights that translate into meaningful growth and engagement.",
  },
];

export const WhyChooseCerebralHub = () => {
  return (
    <div className="bg-cerebralBlue-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* title and writeup */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col lg:flex-row justify-between lg:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-0 text-cerebralGrey-600 lg:w-1/2">
            Why Choose Cerebral Hub?
          </h2>
          {/* <p className="text-sm sm:text-base text-cerebralGrey-500 lg:w-1/2">
            Your idea needs a simplified transformation tailored for your target
            audience to understand. We are a dedicated team of astute
            professionals in various creative fields with the aim to interpret
            ideas into working, relatable forms.
          </p> */}
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl"
              key={index}
            >
              <img
                src={feature.image}
                alt=""
                className="mb-3 sm:mb-4 md:mb-5"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl text-cerebralGrey-700 font-semibold mb-2 sm:mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-cerebralGrey-500">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
