import React from "react";

import Cart from "../../shared/cart";
import MenuIcon from "../../../assets/icons/MenuIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";

const HeaderComponent = () => {
  return (
    <header
      className="text-red-700 flex
    justify-between p-3 w-full bg-[var(--bg-surface)]"
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

export default HeaderComponent;
