import React from "react";
import ImageWithParallelText from "../components/ImageWithParallelText";
import creativeJumpstartImg from "../assets/png/creativeJumpstart.png";

const CreativeJumpstart = () => {
  const content = (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
        Let&apos;s give your idea a creative jumpstart!
      </h1>
      <p className="text-cerebralGrey-500 mb-16 text-sm sm:text-base">
        With over 10 years&apos; experience in the creative art of storytelling
        for visual interpretation, and the use of animation, illustration,
        motion graphics, whiteboard explainers, and still-image graphics for
        posters and infographics, we are expertly skilled in bringing your idea
        from just a thought to an engaging, visual form, as it should be.
      </p>
      <div className="flex justify-between space-x-8">
        <div className="flex-1">
          <p className="text-4xl font-bold text-cerebralOrange-600">8+</p>
          <p className="text-cerebralGrey-500 font-bold">
            Registrations and Certifications
          </p>
        </div>
        <div className="flex-1">
          <p className="text-4xl font-bold text-cerebralOrange-600">30+</p>
          <p className="text-cerebralGrey-500 font-bold">
            Local and International Clients served (Please put logos of the
            following - NPA, FCCPC, NERC, Simmon Coopers, etc
          </p>
        </div>
      </div>
    </>
  );
  return (
    <>
      <ImageWithParallelText
        content={content}
        imageSrc={creativeJumpstartImg}
      />
    </>
  );
};

export default CreativeJumpstart;
