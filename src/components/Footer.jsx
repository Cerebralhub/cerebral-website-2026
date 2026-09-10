import React from "react";
import footerLogo from "../assets/png/cerebralFooterLogo.png";
import facebookSvg from "../assets/svg/facebook.svg";
import instagramSvg from "../assets/svg/instagram.svg";
import youtubeSvg from "../assets/svg/youtube.svg";
import twitterSvg from "../assets/svg/twitter.svg";
import linkedinSvg from "../assets/svg/linkedin.svg";

const Footer = () => {
  return (
    <div className="relative bg-black text-white">
      <div className="z-40 bg-cerebralOrange-600 text-cerebralOrange-500 w-6 md:w-10 h-[12rem] md:h-[16rem] rounded-l-3xl absolute top-10 right-0">
        .
      </div>

      <div className="hidden md:block z-0 bg-cerebralOrange-600 text-cerebralOrange-600 w-6 md:w-10 h-24 md:h-32 rounded-tr-3xl absolute bottom-0 left-0">
        .
      </div>

      <div className="max-w-7xl mx-auto pt-12 md:pt-20 pb-8 md:pb-16 px-4 sm:px-16 2xl:px-0">
        {/* main footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* logo */}
          <div className="flex justify-center sm:justify-start mb-6 sm:mb-0">
            <img src={footerLogo} alt="" className="max-w-[200px]" />
          </div>
          {/* contact column */}
          <div className="text-center sm:text-left">
            <h3 className="mb-4 text-cerebralOrange-600 font-semibold">
              Contact Us
            </h3>
            {/* addresses  */}
            <div className="flex flex-col space-y-2 mb-4">
              <p>47, Oba Yekini Street,Ikate Elegushi,Lekki, Lagos.</p>
              <p>35, Julius Nyerere Crescent,Asokoro District,Abuja.</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start space-y-4 sm:space-y-0">
              {/* phone number and email  */}
              <div className="text-sm">
                <p>info@cerebralhub.com</p>
                <p>+234 704 000 6622</p>
              </div>
              {/* social media links */}
              <div className="flex space-x-4">
                {/* facebook link */}
                <a href="">
                  <img src={facebookSvg} alt="" className="w-6 h-6" />
                </a>
                {/* linkedin link */}
                <a href="https://www.linkedin.com/company/cerebral-hub/">
                  <img src={linkedinSvg} alt="" className="w-6 h-6" />
                </a>
                {/* youtube link */}
                <a href="https://www.youtube.com/@cerebralhub">
                  <img src={youtubeSvg} alt="" className="w-6 h-6" />
                </a>
                {/* instagram link */}
                <a href="https://www.instagram.com/cerebral.hub/profilecard/?igsh=ZmExZG0xdTJyZXY0">
                  <img src={instagramSvg} alt="" className="w-6 h-6" />
                </a>
                {/* twitter link */}
                <a href="https://x.com/CerebralHub?t=PrVPHnKnXAzWJbGh0z0Kjw&s=09">
                  <img src={twitterSvg} alt="" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          {/* newsletter form */}
          <div className="flex flex-col items-center lg:items-end">
            <h3 className="mb-4 text-cerebralOrange-600 font-semibold">
              Join Newsletter
            </h3>
            <input
              type="text"
              placeholder="Type email here"
              className="rounded-full py-2 px-4 w-full max-w-[17rem] text-sm mb-4"
            />
            <div>
              <button className="bg-cerebralOrange-600 hover:bg-cerebralOrange-500 font-semibold py-2 px-4 rounded-full text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* sub footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm space-y-2 sm:space-y-0">
          <span>© All rights reserved | Cerebralhub</span>
          <div className="flex space-x-4 sm:space-x-9">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
