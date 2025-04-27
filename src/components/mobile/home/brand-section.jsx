import React from "react";
import { Link } from "react-router-dom";
import NikeLogo from "../../../assets/images/nike.png";
import PumaLogo from "../../../assets/images/puma.png";
import HandMLogo from "../../../assets/images/handm.png";
import ChevronRightIcon from "../../../assets/icons/ChevronRight.jsx";

const BrandSection = () => {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex p-4 justify-between items-center ">
        <p>Select your Brand</p>
        <ChevronRightIcon />
      </div>

      <div className="flex justify-between p-4">
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
    </div>
  );
};

export default BrandSection;
