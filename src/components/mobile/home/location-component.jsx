import React from "react";
import LocationIcon from "../../../assets/icons/LocationIcon";
import ChevronDownIcon from "../../../assets/icons/ChevronDownIcon";

const LocationComponent = () => {
  return (
    <div className="flex justify-center ">
      <button className="bg-[var(--bg-surface)] flex gap-2 justify-center items-center w-auto p-3 border-t-[3px] border-black/20 rounded-b-[12px]">
        <LocationIcon size={24} fill="none" stroke="#1f2937" strokeWidth={1} />
        <p className="text-[var(--text-color)] text-sm font-light">
          Deliver to Quest{" "}
          <b className="font-bold">Group of Institutions Boys Hostel</b>
        </p>

        <ChevronDownIcon size={24} />
      </button>
    </div>
  );
};

export default LocationComponent;
