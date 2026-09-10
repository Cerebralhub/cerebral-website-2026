import React from "react";
import {Link} from "react-router-dom";
import ImageWithParallelText from "../components/ImageWithParallelText";
import ourCraftImage from "../assets/webp/ourCraft.webp";

const OurCraft = () => {
  const content = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        Our craft lets you get your ideas across.
      </h1>
      <p className="text-cerebralGrey-500 mb-6 text-sm sm:text-base">
        From conceptualisation to the creative production of concepts, our
        clients can relax, rest assured that every part of the narrative is
        well-interpreted, and literally, anyone can get it!
      </p>
      <p className="text-cerebralOrange-600 text-sm sm:text-base underline hover:no-underline cursor-pointer">
        <Link to="/services">See all services</Link>
      </p>
    </>
  );
  return (
    <div className="py-8 sm:py-12 md:py-20 px-3 md:px-5 xl:px-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  max-w-7xl bg-cerebralBlue-200 rounded-3xl">
        <ImageWithParallelText content={content} imageSrc={ourCraftImage} />
      </div>
    </div>
  );
};

export default OurCraft;
