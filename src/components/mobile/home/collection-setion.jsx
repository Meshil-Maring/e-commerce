import React from "react";
import { Link } from "react-router-dom";

import AllCollection from "../../../assets/images/all-collections.png";
import Shoes from "../../../assets/images/shoes.png";
import Socks from "../../../assets/images/socks.png";
import SunGlass from "../../../assets/images/sun-glass.png";
import TShirt from "../../../assets/images/t-shirt.png";
import ShortPants from "../../../assets/images/short-pant.png";
import Pants from "../../../assets/images/pants.png";

const CollectionSection = () => {
  return (
    <div className="grid grid-cols-4 justify-between gap-4 p-4 text-black mt-12">
      <Link
        to="/all-collections"
        className="bg-no-repeat text-sm bg-center h-[76px] w-full rounded-lg col-span-2 flex items-center justify-center text-white text-md text-shadow-lg "
        style={{
          backgroundImage: `url(${AllCollection})`,
          backgroundSize: "cover",
        }}
      >
        All Collection
      </Link>

      <Link
        to="/shoes"
        className="bg-no-repeat text-sm bg-center h-[76px] w-full rounded-lg  flex items-center justify-center text-white text-md text-shadow-lg"
        style={{
          backgroundImage: `url(${Shoes})`,
          backgroundSize: "cover",
        }}
      >
        Shoes
      </Link>

      <Link
        to="/socks"
        className="bg-no-repeat text-sm bg-center h-[76px] w-full rounded-lg  flex items-center justify-center text-white text-md text-shadow-lg"
        style={{
          backgroundImage: `url(${Socks})`,
          backgroundSize: "cover",
        }}
      >
        Socks
      </Link>

      <Link
        to="/all-collections"
        className="bg-no-repeat text-sm bg-center h-[76px] w-full rounded-lg  flex items-center justify-center text-white text-md text-shadow-lg"
        style={{
          backgroundImage: `url(${SunGlass})`,
          backgroundSize: "cover",
        }}
      >
        Sun Glass
      </Link>

      <Link
        to="/t-shirt"
        className="bg-no-repeat text-sm bg-center h-[76px] w-full rounded-lg  flex items-center justify-center text-white text-md text-shadow-lg"
        style={{
          backgroundImage: `url(${TShirt})`,
          backgroundSize: "cover",
        }}
      >
        T-shirt
      </Link>

      <Link
        to="/t-shirt"
        className="bg-no-repeat text-sm bg-center h-[76px] w-full rounded-lg  flex items-center justify-center text-white text-md text-shadow-lg"
        style={{
          backgroundImage: `url(${ShortPants})`,
          backgroundSize: "cover",
        }}
      >
        Short-pant
      </Link>

      <Link
        to="/t-shirt"
        className="bg-no-repeat text-sm bg-center h-[76px] w-full rounded-lg  flex items-center justify-center text-white "
        style={{
          backgroundImage: `url(${Pants})`,
          backgroundSize: "cover",
        }}
      >
        Pants
      </Link>
    </div>
  );
};

export default CollectionSection;
