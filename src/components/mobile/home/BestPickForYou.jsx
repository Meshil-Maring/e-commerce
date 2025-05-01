import React from "react";
import HeartIcon from "../../../assets/icons/HeartIcon";
import Jean from "../../../assets/images/others/jeans.jpg";

const BestPickForYou = () => {
  return (
    <div>
      <h1 className="text-md p-4 font-medium  mt-4">Best Picks For You</h1>
      <ul className="grid grid-cols-2 mt-8 gap-4 mx-2">
        <li className="bg-[#D9D9D9] w-fit rounded-2xl">
          <img className="w-64 px-4 pt-4" src={Jean}></img>

          <div className="flex flex-col w-full p-4 bg-[#E8E8E8] rounded-2xl">
            <aside className="flex justify-between">
              <h2 className="font-bold">Mast & Harbour </h2>
              <HeartIcon />
            </aside>
            <p>Jeans</p>
            <aside className="flex justify-between">
              <del className="text-sm">₹ 2,499</del>
              <p className="font-bold text-sm">₹ 1,999</p>

              <p className="font-bold text-sm text-red-600"> 60% OFF</p>
            </aside>
          </div>
        </li>

        <li className="bg-[#D9D9D9] w-fit rounded-2xl">
          <img className="w-64 px-4 pt-4" src={Jean}></img>

          <div className="flex flex-col w-full p-4 bg-[#E8E8E8] rounded-2xl">
            <aside className="flex justify-between">
              <h2 className="font-bold">Mast & Harbour </h2>
              <HeartIcon />
            </aside>
            <p>Jeans</p>
            <aside className="flex justify-between">
              <del className="text-sm">₹ 2,499</del>
              <p className="font-bold text-sm">₹ 1,999</p>

              <p className="font-bold text-sm text-red-600"> 60% OFF</p>
            </aside>
          </div>
        </li>

        <li className="bg-[#D9D9D9] w-fit rounded-2xl">
          <img className="w-64 px-4 pt-4" src={Jean}></img>

          <div className="flex flex-col w-full p-4 bg-[#E8E8E8] rounded-2xl">
            <aside className="flex justify-between">
              <h2 className="font-bold">Mast & Harbour </h2>
              <HeartIcon />
            </aside>
            <p>Jeans</p>
            <aside className="flex justify-between">
              <del className="text-sm">₹ 2,499</del>
              <p className="font-bold text-sm">₹ 1,999</p>

              <p className="font-bold text-sm text-red-600"> 60% OFF</p>
            </aside>
          </div>
        </li>
      </ul>
    </div>
    
  );
};

export default BestPickForYou;
