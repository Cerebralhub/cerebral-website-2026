import React from "react";
import {Link} from "react-router-dom";
import PositiveStory from "../sections/PositiveStory";
import ImageWithParallelText from "../components/ImageWithParallelText";
import aboutHeroImage from "../assets/webp/aboutHero2.webp";
import aboutImg2 from "../assets/svg/aboutImg2.svg";
import staff1 from "../assets/webp/staff/Group 2074.webp";
import staff2 from "../assets/webp/staff/Group 2075.webp";
import staff3 from "../assets/webp/staff/Group 2076.webp";
import staff4 from "../assets/webp/staff/Group 2077.webp";
import FAQ from "../components/FAQ";

const AboutUs = () => {
  const staffImages = [staff1, staff2, staff3, staff4];
  const heroContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        “Building Brands with Bold, Creative Vision”
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        At Cerebral Hub, we are dedicated to bringing brands to life through
        purposeful, engaging digital experiences.
      </p>
      {/* <button className="text-white bg-cerebralOrange-600 rounded-full px-5 py-3">
        <Link to="/contact"> Work With Us</Link>
      </button> */}
    </>
  );

  const sec2Content = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        We are here to work with you in every step of the journey
      </h1>
    </>
  );

  return (
    <div>
      {/* hero section */}
      <ImageWithParallelText content={heroContent} imageSrc={aboutHeroImage} />
      {/* our work speaks for us */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        {/* parallel texts */}
        <div className="mb-8 sm:mb-12 md:mb-16 flex flex-col lg:flex-row justify-between lg:gap-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-0 text-cerebralGrey-600 lg:w-1/2">
            Our Works Speak For Us
          </h2>
          <p className="text-sm sm:text-base text-cerebralGrey-500 lg:w-1/2">
            We&apos;re not just a service provider; we&apos;re your strategic
            partner, committed to driving meaningful growth and helping your
            brand leave a lasting impression.
          </p>
        </div>
        {/* grid statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600">30+</p>
            <p className="text-cerebralGrey-500 font-bold">
              Local and International Clients served
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600">8+</p>
            <p className="text-cerebralGrey-500 font-bold">
              Registrations and Certifications
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600">40+</p>
            <p className="text-cerebralGrey-500 font-bold">
              Creatives in various fields
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-cerebralOrange-600"> 105+ </p>
            <p className="text-cerebralGrey-500 font-bold">
              Creative customized content/solutions
            </p>
          </div>
        </div>
      </div>

      {/* our work speaks for us */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl"> */}
      {/* parallel texts */}
      {/* <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
            Meet the Team
          </h2>
        </div> */}
      {/* grid images */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {staffImages.map((image, index) => {
            return <img src={image} alt="" />;
          })}
        </div> */}
      {/* </div> */}
      {/* faq */}
      <FAQ />
    </div>
  );
};

export default AboutUs;
