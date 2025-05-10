const FlashSale = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center p-4 py-0 mt-8">
        <h3 className="text-md font-medium">Flash Sale</h3>
        <p className="flex gap-2 text-sm justify-center items-center text-[var(--text-secondary)]">
          Closing in:
          <span className="p-2 text-sm px-2 rounded-md text-white bg-[#bdbdbd]">
            02
          </span>
          <span>:</span>
          <span className="p-2 text-sm px-2 rounded-md text-white bg-[#bdbdbd]">
            30
          </span>
        </p>
      </div>

      <ul className="flex w-full gap-4 justify-between p-4 overflow-x-auto">
        <li className="border-[#00000042] border-solid border-3 text-sm px-4 py-2 rounded-full">
          All
        </li>

        <li className="border-solid border-3 border-[var(--bg-active)] text-sm px-4 py-2 rounded-full bg-[var(--bg-active)] text-white">
          Newest
        </li>

        <li className="border-[#00000042] border-solid border-3 text-sm px-4 py-2 rounded-full">
          Popular
        </li>

        <li className="border-[#00000042] border-solid border-3 text-sm px-4 py-2 rounded-full">
          Trending
        </li>

        <li className="border-[#00000042] border-solid border-3 text-sm px-4 py-2 rounded-full">
          Women
        </li>

        <li className="border-[#00000042] border-solid border-3 text-sm px-4 py-2 rounded-full">
          Men
        </li>
      </ul>
    </div>
  );
};

export default FlashSale;
