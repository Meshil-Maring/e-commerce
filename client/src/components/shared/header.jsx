import Cart from "../shared/cart";
import MenuIcon from "../../assets/icons/MenuIcon";
import BackIcon from "../../assets/icons/back";
import SearchIcon from "../../assets/icons/SearchIcon";
import PersonIcon from "../../assets/icons/person";

const Header = ({ menu = false }) => {
  return (
    <header
      className="text-red-700 flex
    justify-between p-3 w-full bg-[var(--bg-surface)]"
    >
      {menu ? (
        <button className="text-zinc-900 text-3xl">
          <MenuIcon size={28} />
        </button>
      ) : (
        <button>
          <BackIcon />
        </button>
      )}

      <div className="flex gap-4">
        <button className="text-zinc-900 text-3xl">
          <SearchIcon size={28} />
        </button>

        <button>
          <Cart size={28} />
        </button>

        <button className="flex rounded-full w-7 h-7 items-center justify-center bg-[var(--text)]">
          <PersonIcon stroke="white" size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
