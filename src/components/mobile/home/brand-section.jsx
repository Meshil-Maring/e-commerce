import React from "react";
import { Link } from "react-router-dom";
import NikeLogo from "../../../assets/images/nike.png";
import PumaLogo from "../../../assets/images/puma.png";
import HandMLogo from "../../../assets/images/handm.png";
import ChevronRightIcon from "../../../assets/icons/ChevronRight.jsx";

const BrandSection = () => {
  return (
    <div className="grid grid-cols-3 mt-8 p-4 gap-2">
      <div className="col-span-3 flex justify-between items-center mb-4">
        <p className="font-medium">Select your Brand</p>
        <ChevronRightIcon />
      </div>

      <Link>
        <img src={NikeLogo} />
      </Link>

      <Link>
        <img src={PumaLogo} />
      </Link>

      <Link>
        <img src={HandMLogo} />
      </Link>
    </div>
  );
};

export default BrandSection;
