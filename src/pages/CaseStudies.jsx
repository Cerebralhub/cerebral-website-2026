import React from "react";
import CaseStudyCard from "../components/CaseStudyCard";
import nerc from "../assets/png/NERC.png";
import nercLogo from "../assets/png/NERC-Logo.png";
import total from "../assets/png/Total.png";
import totalLogo from "../assets/png/total-logo.png";
import npa from "../assets/png/NPA.png";
import npaLogo from "../assets/png/npa-logo.png";
import colloquim from "../assets/png/colloquim.png";
import colloquimLogo from "../assets/png/colloquim-logo.png";
import fccpc from "../assets/png/FCCPC.png";
import fccpcLogo from "../assets/png/FCCPC-Logo.png";
import nextLevel from "../assets/png/nextlevel.png";
import nextlevelLogo from "../assets/png/apcLogo.png";
import nesp from "../assets/png/nesp.png";
import nespLogo from "../assets/png/nesp-logo.png";
import gamsu from "../assets/png/gamsu.png";
import gamsuLogo from "../assets/png/gamsu-logo.png";
import sagegrey from "../assets/png/sage-grey.png";
import sagegreyLogo from "../assets/png/sage-grey-logo.png";

const CaseStudies = () => {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-10 text-cerebralGrey-600 lg:w-1/2">
          Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              image={caseStudy.image}
              icon={caseStudy.icon}
              title={caseStudy.title}
              description={caseStudy.description}
              pdfPath={caseStudy.pdfPath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

const caseStudies = [
  {
    image: nerc,
    icon: nercLogo,
    title: "Nigerian Electricity Regulatory Commission",
    description:
      "Understanding the constitution, laws and policies can seem complex and cumbersome to the average man.",
    pdfPath: "/pdfs/NERC.pdf",
  },
  {
    image: fccpc,
    icon: fccpcLogo,
    title: "Federal Competition & Consumer Protection Commission ",
    description:
      "With our expertise in storytelling, 2D and 3D animation, graphic design, and other digital skills, we interpreted complex...",
    pdfPath: "/pdfs/fccpc.pdf",
  },
  {
    image: total,
    icon: totalLogo,
    title: "Keeping Up The Spirit",
    description:
      "Through creative storytelling, we develop character scripts and explainer videos that showcase detailed notable events",
    pdfPath: "/pdfs/Total.pdf",
  },
  {
    image: nextLevel,
    icon: nextlevelLogo,
    title: "NEXT LEVEL - All Progressive Congress",
    description:
      "Winning elections is about strategic, creative and responsive thinking engineered towards shaping and... ",
    pdfPath: "/pdfs/Total.pdf",
  },
  {
    image: npa,
    icon: npaLogo,
    title: "Nigerian Ports Authority",
    description:
      "With concise detailing and simplified analysis, we projected complex information with our creative...",
    pdfPath: "/pdfs/NPA.pdf",
  },
  {
    image: colloquim,
    icon: colloquimLogo,
    title: "The Bola Tinubu Colloquium",
    description:
      "As content partners, we produced thematic content – publications, illustrated books, posters, magazines...",
    pdfPath: "/pdfs/Colloquium.pdf",
  },
  {
    image: nesp,
    icon: nespLogo,
    title: "Nigeria Economic Sustainability Plan",
    description:
      "As content partners, we produced thematic content – publications, illustrated books, posters, magazines...",
    pdfPath: "/pdfs/Colloquium.pdf",
  },
  {
    image: gamsu,
    icon: gamsuLogo,
    title: "Gamaliel & Susan Onosode Foundation",
    description:
      "As content partners, we produced thematic content – publications, illustrated books, posters, magazines...",
    pdfPath: "/pdfs/gamsu.pdf",
  },
  {
    image: sagegrey,
    icon: sagegreyLogo,
    title: "Sage Grey Finance Limited",
    description:
      "As content partners, we produced thematic content – publications, illustrated books, posters, magazines...",
    pdfPath: "/pdfs/sageGray.pdf",
  },
];
