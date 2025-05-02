const PriceCart = ({ props }) => {
  return props.map((items) => {
    return (
      <li
        key={items.id}
        className="p-4 rounded-2xl flex gap-1 justify-center items-center flex-col border-4 border-[#7979794f] w-fit"
      >
        <p className="text-md">{items.title}</p>
        <p className="font-semibold text-[--var(--text-color)] text-xl text-center">
          ₹{items.price}
        </p>
        <p>Only</p>
      </li>
    );
  });
};

export default PriceCart;
