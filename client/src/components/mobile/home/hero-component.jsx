import React from "react";
import HeroImage from "../../../assets/images/image1.png";
import ChevronRightIcon from "../../../assets/icons/ChevronRight";

const HeroComponent = () => {
  return (
    <div className="w-11/12 m-auto mt-8 relative">
      <img src={HeroImage} alt="Hero" className="w-full h-auto" />

      <ul className="flex justify-center items-center mt-4 gap-3">
        <li className="flex w-[36px] h-[7px] bg-[#1d1d1d] rounded-full"></li>
        <li className="flex w-[7px] h-[7px] bg-[#d8d8d8] rounded-full"></li>
        <li className="flex w-[7px] h-[7px] bg-[#d8d8d8] rounded-full"></li>
        <li className="flex w-[7px] h-[7px] bg-[#d8d8d8] rounded-full"></li>
        <li className="flex w-[7px] h-[7px] bg-[#d8d8d8] rounded-full"></li>
      </ul>

      <button className="absolute bg-amber-50 rounded-full p-2 bottom-10 right-5 cursor-pointer">
        <ChevronRightIcon fill="none" stroke="red" strokeWidth="1" />
      </button>
    </div>
  );
};

export default HeroComponent;
