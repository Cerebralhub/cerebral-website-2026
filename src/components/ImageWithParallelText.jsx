import React from "react";

const ImageWithParallelText = ({
  imageSrc = "/src/assets/svg/positiveStoryPFP.svg",
  content,
  imageOnRight = true,
}) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {!imageOnRight && <ImageSection imageSrc={imageSrc} />}
        <ContentSection content={content} imageOnRight={imageOnRight} />
        {imageOnRight && <ImageSection imageSrc={imageSrc} />}
      </div>
    </div>
  );
};

const ContentSection = ({content, imageOnRight}) => (
  <div
    className={`md:w-1/2 order-2 ${imageOnRight ? "md:order-1" : "md:order-2"}`}
  >
    <div className="md:w-10/12">{content}</div>
  </div>
);

const ImageSection = ({imageSrc}) => (
  <div className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2">
    <div className="relative h-full w-full">
      <img
        src={imageSrc}
        alt="Professional"
        className="rounded-2xl object-cover w-full h-full"
      />
    </div>
  </div>
);

export default ImageWithParallelText;
