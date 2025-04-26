import React from "react";
import HeroImage from "../../../assets/images/image1.png";

const HeroComponent = () => {
  return (
    <div className="w-11/12 m-auto mt-8">
      <img src={HeroImage} alt="Hero" className="w-full h-auto" />

      <ul className="flex justify-center items-center mt-4 gap-3">
        <li className="flex w-[36px] h-[8px] bg-[#1d1d1d] rounded-full"></li>
        <li className="flex w-[8px] h-[8px] bg-[#d8d8d8] rounded-full"></li>
        <li className="flex w-[8px] h-[8px] bg-[#d8d8d8] rounded-full"></li>
        <li className="flex w-[8px] h-[8px] bg-[#d8d8d8] rounded-full"></li>
        <li className="flex w-[8px] h-[8px] bg-[#d8d8d8] rounded-full"></li>
      </ul>
    </div>
  );
};

export default HeroComponent;
