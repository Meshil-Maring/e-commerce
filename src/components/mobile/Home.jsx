import React from "react";
// import Cart from "../shared/common/cart";
import MenuIcon from "../../assets/icons/MenuIcon";
import SearchIcon from "../../assets/icons/SearchIcon";

const Home = () => {
  return (
    <header
      className="text-red-700 flex
    justify-between p-4 w-full"
    >
      <button className="text-zinc-900 text-3xl">
        <MenuIcon />
        <SearchIcon />
      </button>

      <div className="flex gap-2">
        <h2>Search</h2>
        <h3>Add to cart</h3>
      </div>
    </header>
  );
};

export default Home;
