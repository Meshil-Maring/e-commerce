import React from "react";
import CartIcon from "../../assets/icons/CartIcon";

const Cart = () => {
  return (
    <button className="text-zinc-900 relative">
      <p className=" absolute right-[-4px] top-[-4px] rounded-full bg-green-700 w-5 h-5 text-[10px] flex justify-center items-center text-white">
        3
      </p>
      <CartIcon fill="#1F2937" size={28} />
    </button>
  );
};

export default Cart;
