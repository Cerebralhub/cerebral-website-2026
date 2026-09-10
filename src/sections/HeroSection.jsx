import React from "react";
import heroImage from "../assets/png/heroImage.png";
import {Link} from "react-router-dom";
import herogif from "../assets/gif/Gif.gif";

const HeroSection = () => {
  return (
    <div className="bg-[#DBE9FB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 xl:py-0 8 sm:pt-12 md:pt-20 max-w-7xl">
        <div className="flex md:py-10">
          {/* hero writeup */}
          <div className="md:mt-16 my-20 md:my-0 flex">
            <div>
              <h1 className="text-cerebralGrey-600 text-5xl md:text-[65px] mb-5 font-semibold">
                Ready to Make a Lasting Impression?
              </h1>

              <p className="text-[#000000] font-semibold">
                If you let us, we'll help you turn viewers into loyal followers.
              </p>
              {/* buttons */}
              <div className="mt-8 flex space-x-9">
                <Link
                  to="/contact"
                  className="hover:bg-cerebralBlue-700 bg-cerebralOrange-600 text-white font-medium px-7 py-3 rounded-full"
                >
                  Get started
                </Link>
              </div>
            </div>

            <div className="w-11/12 hidden lg:block">
              <img src={herogif} alt="A man smiling" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
