import React from "react";
import LocationIcon from "../../../assets/icons/LocationIcon";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";

const LocationComponent = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-[var(--bg-surface)] flex gap-2 justify-between items-center w-[90%] p-2 border-t-[2px] border-black/20 rounded-b-[12px]">
        <LocationIcon size={24} fill="none" stroke="#1f2937" strokeWidth={1} />
        <p className="w-full text-[var(--text-color)] text-sm font-meduim text-md">
          Deliver to
          <b className="ml-1 font-bold text-[12px]">
            Quest Group of Institutions...
          </b>
        </p>

        <ChevronDownIcon size={24} />
      </button>
    </div>
  );
};

export default LocationComponent;
