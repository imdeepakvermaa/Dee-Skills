import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
const HeroPage = () => {
  return (
    <div className="pt-12  w-full md:pt-32 lg:pt-24 xl:pt-32">
      <div className="flex flex-col  md:flex md:flex-row justify-center items-center md:gap-32">
        <div className="mt-10 md:mt-0">
          <div className="text-purple-800 text-3xl md:text-7xl font-bold flex flex-col md:flex">
            <h1>CODE.</h1>
            <h1>CREATE.</h1>
            <h1>EDIT.</h1>
            <h1>DESIGN.</h1>
            <h1>PUBLISH.</h1>
          </div>

          <div></div>
        </div>

        <div className="md:mt-[50px] lg:mt-0 overflow-hidden dark:mix-blend-screen mix-blend-multiply transition-transform transform duration-300 ease-in-out hover:scale-110">
          <video className="w-[400px] bg-transparent"  controls={false} autoPlay loop muted >
            <source
              src="https://d3fu8elvld6rb5.cloudfront.net/learnyard.com/img/hero-globe-dark.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <button className="flex justify-center items-center text-white text-2xl font-bold border-4 border-purple-700 px-4 py-1 mt-12  ">Check Out <p><MdOutlineKeyboardDoubleArrowDown/></p></button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
