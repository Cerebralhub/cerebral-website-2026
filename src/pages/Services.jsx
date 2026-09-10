import React from "react";
import {Link} from "react-router-dom";
import servicesHeaderImage from "../assets/webp/servicesHeaderImage.webp";
import ImageWithParallelText from "../components/ImageWithParallelText";
import scImg from "../assets/webp/strategicCommsImg.webp";
import pmImg from "../assets/webp/perceptionMgntImg.webp";
import paImg from "../assets/webp/policyAdvisoryService.webp";
import ccImg from "../assets/webp/contentCreationService.webp";

export const Services = () => {
  const heroContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        We are, practically speaking, crusaders against all manner of boring,
        apathetic, and unoriginal expressions of ideas.
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        Our content and solutions are authentic and tailor-fit for each unique
        client.
      </p>
      <Link
        to="/contact"
        className="text-white bg-cerebralOrange-600 rounded-full px-5 py-3"
      >
        Work With Us
      </Link>
    </>
  );

  const strategicCommunicationContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        STRATEGIC COMMUNICATION
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        <span className="font-bold">
          {" "}
          How the public perceives your brand is of utmost importance to your
          success.{" "}
        </span>
        That is why we deploy our expertise to portray your organization in the
        best light. We utilize various channels and tools to communicate your
        mission effectively to your audience through diverse means, thereby
        strengthening your communication profile across targeted networks.
      </p>
    </>
  );

  const perceptionManagementContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        PERCEPTION MANAGEMENT
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        <span className="font-bold">
          {" "}
          We understand that the right optics can breed leverage,{" "}
        </span>
        that&apos;s why we employ the mechanics of perception management to
        create an end-to-end visual roadmap for our client, using our vast media
        and PR network to tell stories that embody our client&apos;s ethos. So,
        if you are looking to represent your brand seamlessly across new media,
        we can help you create compelling brand stories to help unpack your
        offerings.
      </p>
    </>
  );

  const policyAdvisoryContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        POLICY ADVISORY
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        <span className="font-bold">
          We help create, fine-tune, and implement policies{" "}
        </span>
        that promote national values, by offering strategic guidance to help
        fast-track economic development and competitiveness. We analyze and
        advocate sustainable strategies at the national and local level
        pinpointing, designing, and implementing patterns that drive structural
        change.
      </p>
    </>
  );

  const contentCreationContent = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        CONTENT CREATION
      </h1>
      <p className="text-cerebralGrey-500 mb-8 text-sm sm:text-base">
        <span className="font-bold">
          With our team of creative experts, we create authentic content from
          scratch to finish.{" "}
        </span>
        Through our processes of research, writing, design, animation, and
        production, we refine your ideas into compelling text, visuals, and
        audio-visuals - telling your brand story in the best way
      </p>
    </>
  );

  return (
    <div>
      {/* hero section */}
      <ImageWithParallelText
        content={heroContent}
        imageSrc={servicesHeaderImage}
      />
      {/* strategic communication */}
      <ImageWithParallelText
        content={strategicCommunicationContent}
        imageSrc={scImg}
        imageOnRight={false}
      />
      {/* perception management */}
      <ImageWithParallelText
        content={perceptionManagementContent}
        imageSrc={pmImg}
      />
      {/* policy advisory */}
      <ImageWithParallelText
        content={policyAdvisoryContent}
        imageSrc={paImg}
        imageOnRight={false}
      />
      {/* content creation */}
      <ImageWithParallelText
        content={contentCreationContent}
        imageSrc={ccImg}
      />
    </div>
  );
};
