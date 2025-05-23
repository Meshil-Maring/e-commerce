import React from "react";
import HeroImage from "../../../assets/images/image1.png";
import ChevronRightIcon from "../../../assets/icons/ChevronRight";
import SliderNav from "../../shared/slider-nav";

const HeroComponent = () => {
  return (
    <div className="w-11/12 m-auto mt-8 relative">
      <img src={HeroImage} alt="Hero" className="w-full h-auto" />

      <SliderNav />

      <button className="absolute bg-amber-50 rounded-full p-2 bottom-10 right-5 cursor-pointer">
        <ChevronRightIcon fill="none" stroke="red" strokeWidth="1" />
      </button>
    </div>
  );
};

export default HeroComponent;
