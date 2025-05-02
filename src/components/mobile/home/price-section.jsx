import PriceCart from "../../shared/common/price-cart";

const PriceSection = () => {
  const priceData = [
    { id: "1", title: "Under", price: 299 },
    { id: "2", title: "Under", price: 799 },
    { id: "3", title: "Under", price: 999 },
    { id: "4", title: "Above", price: 1599 },
  ];

  return (
    <div>
      <ul
        style={{ scrollbarWidth: "none" }}
        className="flex gap-4 overflow-x-auto scrollbar-none m-4 mt-8"
      >
        <PriceCart props={priceData} />
      </ul>
    </div>
  );
};

export default PriceSection;
