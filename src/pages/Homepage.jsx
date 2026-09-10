import React from "react";
import HeroSection from "../sections/HeroSection";
import {OurProcess} from "../sections/OurProcess";
import {WhyChooseCerebralHub} from "../sections/WhyChooseCerebralHub";
import CreativeJumpstart from "../sections/CreativeJumpstart";
import OurCraft from "../sections/OurCraft";
import TheExperience from "../sections/TheExperience";
import PositiveStory from "../sections/PositiveStory";
import ClientsServed from "../sections/ClientsServed";

const Homepage = () => {
  return (
    <div>
      <div>
        {/* hero section */}
        <HeroSection />
        {/* OurProcess */}
        <OurProcess />
        {/* TheExperience */}
        <TheExperience />
        {/* clients served */}
        <ClientsServed />
        {/* WhyChooseCerebralHub */}
        <WhyChooseCerebralHub />
        {/* creating jumpstart */}
        {/* <CreativeJumpstart /> */}
        {/* our craft */}
        {/* <OurCraft /> */}
        {/* positive story */}
        {/* <PositiveStory />  */}
      </div>
    </div>
  );
};

export default Homepage;
