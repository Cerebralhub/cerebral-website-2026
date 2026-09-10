import React from "react";
import {Link} from "react-router-dom";
import joinOurTeamImg from "../assets/svg/progressiveCareer.svg";

const TheExperience = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* YouTube video */}
      <div className="h-full w-full flex-1 relative">
        <iframe
          width="560"
          height="500"
          className=" w-full "
          src="https://www.youtube.com/embed/91wWCkmO5H0?si=Hh4zKg3442EVtC6W&autoplay=1&mute=1&loop=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
      {/* writeup */}
      <div className="bg-cerebralOrange-500 flex items-center text-white py-16 lg;py-0 flex-1">
        <div className="w-10/12 md:w-8/12 mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
            Bringing stories to life, one frame at a time.
          </h1>
          {/* <button className="text-cerebralOrange-600 bg-white rounded-full px-5 py-3">
            <Link to="/join-us">See Job Vacancies</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TheExperience;

{
  /* <div className="flex flex-col lg:flex-row"> */
}
{
  /* image  */
}
{
  /* <div className="h-full w-full flex-1">
  <img src={joinOurTeamImg} className="object-cover h-full w-full" />
</div> */
}
{
  /* writeup */
}
{
  /* <div className="bg-cerebralOrange-500 flex items-center text-white py-16 lg;py-0 flex-1">
  <div className="w-10/12 md:w-8/12 mx-auto">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
      The Experience
    </h1> */
}
{
  /* <button className="text-cerebralOrange-600 bg-white rounded-full px-5 py-3">
      <Link to="/join-us">See Job Vacancies</Link>
    </button> */
}
//   </div>
// </div>
// </div>
