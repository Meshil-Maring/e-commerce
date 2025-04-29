const PriceSection = () => {
  return (
    <div>
      <ul className="flex gap-2 overflow-x-auto m-4 mt-8">
        <li className="p-8 rounded-2xl flex gap-1 justify-center items-center flex-col border-6 border-[#7979794f] w-fit">
          <p>Under</p>
          <p className="font-bold text-2xl text-center">₹99</p>
          <p>Only</p>
        </li>

        <li className="p-8 rounded-2xl flex gap-1 justify-center items-center flex-col border-6 border-[#7979794f] w-fit">
          <p>Under</p>
          <p className="font-bold text-2xl text-center">₹299</p>
          <p>Only</p>
        </li>

        <li className="p-8 rounded-2xl flex gap-1 justify-center items-center flex-col border-6 border-[#7979794f] w-fit">
          <p>Under</p>
          <p className="font-bold text-2xl text-center">₹799</p>
          <p>Only</p>
        </li>

        <li className="p-8 rounded-2xl flex gap-1 justify-center items-center flex-col border-6 border-[#7979794f] w-fit">
          <p>Above</p>
          <p className="font-bold text-2xl text-center">₹999</p>
          <p>Only</p>
        </li>
      </ul>
    </div>
  );
};

export default PriceSection;
