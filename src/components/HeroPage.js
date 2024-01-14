import React from "react";
import HeroImage from "../Assets/HeroImage.jpg";

const HeroPage = () => {
  return (
    <div className="pt-24 md:pt-16 w-full">
      <div className="flex flex-col  md:flex md:flex-row justify-center items-center  gap-8 md:gap-48 ">
        <div className="text-purple-500 text-3xl md:text-7xl font-bold flex flex-col md:flex">
          <h1>CODE.</h1>
          <h1>CREATE.</h1>
          <h1>EDIT.</h1>
          <h1>DESIGN.</h1>
          <h1>PUBLISH.</h1> 
        </div>

        <div className="overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-110">
          <img className="w-[400px] h-[300px] md:w-[800px] md:h-[600px] rounded-2xl" src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
