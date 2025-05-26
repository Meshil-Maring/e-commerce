import { useState } from "react";

const SizeSelector = () => {
  const [size, setSize] = useState({
    s: false,
    m: true,
    l: false,
    xl: false,
  });

  return (
    <section className="grid grid-cols-2 mt-4 m-4 items-center">
      <p className="text-lg font-semibold">Size: M</p>
      <p className="text-sm font-semibold text-right underline">Size guide</p>

      <ul className="flex gap-3 col-span-2 mt-2">
        <li
          className={`border-1 grid-cols-2 w-10 h-10 rounded-lg text-lg flex justify-center items-center font-bold ${
            size.s == true && "bg-[var(--text)] text-white"
          } `}
        >
          S
        </li>

        <li
          className={`border-1 grid-cols-2 w-10 h-10 rounded-lg text-lg flex justify-center items-center font-bold ${
            size.m == true && "bg-[var(--text)] text-white"
          } `}
        >
          M
        </li>

        <li
          className={`border-1 grid-cols-2 w-10 h-10 rounded-lg text-lg flex justify-center items-center font-bold ${
            size.l == true && "bg-[var(--text)] text-white"
          } `}
        >
          L
        </li>

        <li className="border-1 grid-cols-2 w-10 h-10 rounded-lg text-lg flex justify-center items-center font-bold">
          XL
        </li>
      </ul>
    </section>
  );
};

export default SizeSelector;
