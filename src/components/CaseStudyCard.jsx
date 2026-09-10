import React from "react";

const CaseStudyCard = ({image, icon, title, description, pdfPath}) => {
  const handleMoreClick = () => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="shadow-md rounded-2xl max-w-sm mx-auto">
      {/* case study image  */}
      <div className="w-full h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full object-cover" />
      </div>

      {/* case study details */}
      <div className="p-5">
        {/* case study icon and title  */}
        <div className="flex items-center gap-4 mb-3">
          <img src={icon} alt="" className="w-20 h-20 object-contain" />
          <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        </div>
        {/* case study description */}
        <div className="mb-5">
          <p className="text-sm md:text-base">{description}</p>
        </div>
        {/* action button */}
        <div>
          <button
            className="bg-cerebralOrange-600 text-white rounded-3xl px-6 py-2 text-sm md:text-base hover:bg-cerebralOrange-700 transition-colors duration-300"
            onClick={handleMoreClick}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
