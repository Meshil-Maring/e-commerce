import React from "react";
import Hat from "../../../assets/images/hat.png";
import ShortPants from "../../../assets/images/t-shirt2.png";
import TShirt from "../../../assets/images/t-shirt3.png";
import HeartIcon from "../../../assets/icons/HeartIcon.jsx";

const ContinueShopping = () => {
  return (
    <div>
      <p className="p-4 font-medium">Continue Shopping</p>

      <div>
        <ul className="flex gap-6 p-4 overflow-x-auto">
          <li
            className="w-[140px] h-[180px] bg-cover bg-no-repeat bg-center rounded-xl flex justify-between"
            style={{ backgroundImage: `url(${Hat})` }}
          >
            <div className="mt-auto w-full bg-gradient-to-t from-black/60 to-white/0 p-2 rounded-xl">
              <div className="flex justify-between items-center text-white">
                <p className="text-xl">Glitchez</p>
                <HeartIcon size={18} />
              </div>
              <p className="text-white">Hat</p>

              <div className="flex gap-4 text-white">
                <del>₹599</del>
                <p>₹449</p>
              </div>
            </div>
          </li>

          <li
            className="w-[140px] h-[180px] bg-cover bg-no-repeat bg-center rounded-xl flex justify-between "
            style={{ backgroundImage: `url(${ShortPants})` }}
          >
            <div className="mt-auto w-full bg-gradient-to-t from-black/60 to-white/0 p-2 rounded-xl">
              <div className="flex justify-between items-center text-white">
                <p className="text-xl">Glitchez</p>
                <HeartIcon size={18} />
              </div>
              <p className="text-white">T-shirt</p>

              <div className="flex gap-4 text-white">
                <del>₹1399</del>
                <p>₹1199</p>
              </div>
            </div>
          </li>

          <li
            className="w-[140px] h-[180px] bg-cover bg-no-repeat bg-center rounded-xl flex justify-between "
            style={{ backgroundImage: `url(${ShortPants})` }}
          >
            <div className="mt-auto w-full bg-gradient-to-t from-black/60 to-white/0 p-2 rounded-xl">
              <div className="flex justify-between items-center text-white">
                <p className="text-xl">Glitchez</p>
                <HeartIcon size={18} />
              </div>
              <p className="text-white">T-shirt</p>

              <div className="flex gap-4 text-white">
                <del>₹1399</del>
                <p>₹1199</p>
              </div>
            </div>
          </li>

          <li
            className="w-[140px] h-[180px] bg-cover bg-no-repeat bg-center rounded-xl flex justify-between "
            style={{ backgroundImage: `url(${TShirt})` }}
          >
            <div className="mt-auto w-full bg-gradient-to-t from-black/60 to-white/0 p-2 rounded-xl">
              <div className="flex justify-between items-center text-white">
                <p className="text-xl">Boycorst</p>
                <HeartIcon size={18} />
              </div>
              <p className="text-white">T-shirt</p>

              <div className="flex gap-4 text-white">
                <del>₹1399</del>
                <p>₹1199</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContinueShopping;
