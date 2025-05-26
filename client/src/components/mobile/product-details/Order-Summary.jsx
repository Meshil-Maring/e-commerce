import CartIcon from "../../../assets/icons/CartIcon";
import CardIcon from "../../../assets/icons/Card";

const OrderSummary = () => {
  return (
    <section className="m-4">
      <div className="grid grid-cols-2">
        <p className="text-2xl text-[var(--text)] font-bold">Quantity: </p>
        <aside className="flex justify-center items-center justify-self-end">
          <button className="text-4xl text-center rounded-full bg-[var(--text)] text-white w-8 h-8">
            -
          </button>

          <p className="text-lg p-1 bg-[var(--white-100)] rounded-lg mx-2 w-8 text-center">
            1
          </p>
          <button className="text-4xl text-center rounded-full bg-[var(--text)] text-white w-8 h-8">
            +
          </button>
        </aside>

        <aside className="flex justify-start items-center gap-1">
          <p className="w-2 h-2 bg-red-600 rounded-full"></p>
          <p className="text-lg text-red-600">In Stock</p>
        </aside>
        <p className="text-lg justify-self-end">Maximum order 8</p>
      </div>

      <div className="flex gap-2 mt-6">
        <p className="text-2xl font-bold">Total: 1,879</p>
        <del className="text-lg font-medium text-[var(--white-500)]">1,999</del>

        <p className="text-lg text-red-600 font-bold">8% OFF</p>
      </div>

      <div className="flex gap-2 mt-2">
        <button className="flex justify-center items-center rounded-lg w-full py-2 border-1 gap-1">
          <CartIcon fill="var(--text)" />
          <p className="text-lg font-bold text-[var(--text)]">Add to Cart</p>
        </button>

        <button className="flex justify-center items-center rounded-lg w-full bg-[var(--primary)] gap-1 ">
          <CardIcon />
          <p className="text-lg font-bold text-[var(--text)]">Buy Now</p>
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
