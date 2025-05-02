import React from "react";
import Hat from "../../../assets/images/hat.png";
import ShortPants from "../../../assets/images/t-shirt2.png";
import TShirt from "../../../assets/images/t-shirt3.png";
import ContinueCart from "../../shared/common/continue-cart.jsx";

const continueCartData = [
  {
    id: 1,
    image: Hat,
    title: "Glitchez",
    subtitle: "Hat",
    oldPrice: "₹599",
    price: "₹449",
  },
  {
    id: 2,
    image: ShortPants,
    title: "Froxy",
    subtitle: "T-Shirt",
    oldPrice: "₹799",
    price: "₹659",
  },
  {
    id: 3,
    image: TShirt,
    title: "Stitch",
    subtitle: "T-Shirt",
    oldPrice: "₹1699",
    price: "₹1299",
  },
];

const ContinueShopping = () => {
  return (
    <div>
      <p className="p-4 font-medium">Continue Shopping</p>

      <div>
        <ul className=" grid grid-flow-col gap-6 p-4 overflow-x-auto">
          <ContinueCart props={continueCartData} />
        </ul>
      </div>
    </div>
  );
};

export default ContinueShopping;
