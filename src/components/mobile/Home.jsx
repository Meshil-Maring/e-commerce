import React from "react";
import Cart from "../shared/common/cart";
import MenuIcon from "../../assets/icons/MenuIcon";
import SearchIcon from "../../assets/icons/SearchIcon";

const Home = () => {
  return (
    <header
      className="text-red-700 flex
    justify-between p-4 w-full"
    >
      <button className="text-zinc-900 text-3xl">
        <MenuIcon size={28} />
      </button>

      <div className="flex gap-4">
        <button className="text-zinc-900 text-3xl">
          <SearchIcon size={28} />
        </button>

        <Cart size={28} />
      </div>
    </header>
  );
};

export default Home;
