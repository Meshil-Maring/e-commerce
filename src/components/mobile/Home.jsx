import React from "react";
import Cart from "../shared/common/cart";
import { MenuIcon } from "../../assets/icons/Icons.js";

const Home = () => {
  return (
    <header
      className="text-red-700 flex
    justify-between p-4 w-full"
    >
      <MenuIcon />

      <div className="flex gap-2">
        <h2>Search</h2>
        <h3>Add to cart</h3>
      </div>
    </header>
  );
};

export default Home;
