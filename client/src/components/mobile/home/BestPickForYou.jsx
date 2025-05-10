import React from "react";
import HeartIcon from "../../../assets/icons/HeartIcon";
import Jean from "../../../assets/images/others/jeans.jpg";
import BestPickCart from "../../shared/common/best-pick-cart";

const bestPickData = [
  {
    id: 1,
    image: Jean,
    title: "Mast & Harbour",
    subtitle: "Jeans",
    oldPrice: "₹2,499",
    price: "₹1,999",
  },
  {
    id: 2,
    image: Jean,
    title: "PUMA",
    subtitle: "Shoes",
    oldPrice: "₹2,499",
    price: "₹1,999",
  },
  {
    id: 3,
    image: Jean,
    title: "Wedest Range",
    subtitle: "Shoes",
    oldPrice: "₹2,499",
    price: "₹1,999",
  },
];

const BestPickForYou = () => {
  return (
    <div>
      <h1 className="text-md p-4 font-md mt-4">Best Picks For You</h1>
      <ul className="grid grid-cols-2 mt-8 gap-4 mx-2">
        <BestPickCart props={bestPickData} />
      </ul>
    </div>
  );
};

export default BestPickForYou;
