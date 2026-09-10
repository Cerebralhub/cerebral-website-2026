import React from "react";
import ImageWithParallelText from "../components/ImageWithParallelText";
import workHeroImage from "../assets/svg/workHeroImg.svg";

const Work = () => {
  const jobOpenings = [
    // {
    //   position: "Full Stack Developer",
    //   location: "Lagos",
    //   jobType: "Full Time",
    //   applyLink: "#",
    // },
    // {
    //   position: "Testing Engineer",
    //   location: "Lagos",
    //   jobType: "Full Time",
    //   applyLink: "#",
    // },
    // {
    //   position: "Hr Manager",
    //   location: "Lagos",
    //   jobType: "Full Time",
    //   applyLink: "#",
    // },
  ];
  const heroContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        We take pride in providing customised solutions and engaging content for
        every project.
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        Our work spreads across providing solutions in policy, communication,
        education, business, and content creation.
      </p>
      <button className="text-white bg-cerebralOrange-600 rounded-full px-5 py-3">
        View Positions
      </button>
    </>
  );
  return (
    <div>
      {/* hero section */}
      <ImageWithParallelText content={heroContent} imageSrc={workHeroImage} />
      {/*see our open positions*/}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* parallel texts */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col lg:flex-row justify-between lg:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-0 text-cerebralGrey-600 lg:w-1/2">
            See our open positions
          </h2>
          <p className="text-sm sm:text-base text-cerebralGrey-500 lg:w-1/2">
            We create meaningful content, advise on and incubate public policy
            as well as simplify information. Our team of professionals is always
            on the ground to help interpret and express your idea.
          </p>
        </div>
        {/* grid statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobOpenings.length > 0 ? (
            jobOpenings.map((opening, index) => (
              // Return JSX for each job opening here
              <div className=" bg-cerebralBlue-500 bg-opacity-30 rounded-3xl p-8">
                <p className="text-cerebralGrey-700 font-medium text-2xl">
                  {opening.position}
                </p>
                <div className="flex gap-3 mb-6">
                  <span className="text-sm sm:text-base font-medium text-cerebralGrey-500">
                    {opening.location}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-cerebralGrey-500">
                    {opening.jobType}
                  </span>
                </div>
                <button className="text-cerebralOrange-600">Apply Now</button>
              </div>
            ))
          ) : (
            <p className="col-span-4 text-sm sm:text-base text-cerebralGrey-500">
              Sorry no job openings at this time, please check back later
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
