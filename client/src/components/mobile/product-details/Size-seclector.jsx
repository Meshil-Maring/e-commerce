const SizeSelector = () => {
  return (
    <section className="grid grid-cols-2 mt-8 m-4 items-center">
      <p className="text-lg font-semibold">Size: M</p>
      <p className="text-lg font-semibold text-right">Size guide</p>

      <ul className="flex gap-3 col-span-2 mt-2">
        <li className="border-1 grid-cols-2 w-10 h-10 rounded-lg text-lg flex justify-center items-center font-bold">
          S
        </li>

        <li className="border-1 grid-cols-2 w-10 h-10 rounded-lg text-lg flex justify-center items-center font-bold bg-[var(--text)] text-white">
          M
        </li>

        <li className="border-1 grid-cols-2 w-10 h-10 rounded-lg text-lg flex justify-center items-center font-bold">
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
