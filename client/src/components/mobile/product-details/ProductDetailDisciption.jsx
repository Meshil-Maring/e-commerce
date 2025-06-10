const ProductDetailDisciption = () => {
  return (
    <section className="p-4">
      <p className="text-xl font-bold">Product Details</p>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="bg-[var(--white-100)] p-2 rounded-xl">
          <p className="text-lg font-bold">Material</p>
          <p className="text-lg text-zinc-500">100% Polyester</p>
        </div>

        <div className="bg-[var(--white-100)] p-2 rounded-xl">
          <p className="text-lg font-bold">Pattern Style</p>
          <p className="text-lg text-zinc-500">Solid</p>
        </div>

        <div className="bg-[var(--white-100)] p-2 rounded-xl">
          <p className="text-lg font-bold">Fit type</p>
          <p className="text-lg text-zinc-500">Regular fit</p>
        </div>

        <div className="bg-[var(--white-100)] p-2 rounded-xl">
          <p className="text-lg font-bold">Collar</p>
          <p className="text-lg text-zinc-500">Band Collar</p>
        </div>
      </div>

      <div className="flex gap-4 flex-col mt-8">
        <div className=" gap-2 flex">
          <div className="h-auto items-center justify-center bg-[var(--primary)] w-6 max-w-[8px] rounded-r-full"></div>
          <p className="text-lg w-full">
            <b>Meterial:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque, quis.
          </p>
        </div>

        <div className=" gap-2 flex">
          <div className="h-auto items-center justify-center bg-[var(--primary)] w-6 max-w-[8px] rounded-r-full"></div>
          <p className="text-lg w-full">
            <b>Fit Type:</b> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque, quis.
          </p>
        </div>

        <div className=" gap-2 flex">
          <div className="h-auto items-center justify-center bg-[var(--primary)] w-6 max-w-[8px] rounded-r-full"></div>
          <p className="text-lg w-full">
            <b>Collar:</b> Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Odio incidunt expedita facere voluptatum explicabo quisquam
            magnam debitis, molestias excepturi voluptatem iusto facilis
            perspiciatis enim veritatis, harum fuga impedit nisi ea.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailDisciption;
