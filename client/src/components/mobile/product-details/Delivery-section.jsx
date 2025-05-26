const DeliverySection = () => {
  return (
    <div className="flex justify-between items-center mx-4 mt-4">
      <aside className="flex gap-1">
        <p className="text-sm underline">Free delivery</p>
        <b className="text-sm">Monday, 26 May.</b>
      </aside>

      <aside className="flex gap-1 items-center">
        <p className="text-sm">Order within</p>
        <p className="text-sm bg-[var(--white-200)] rounded-sm p-1">
          <b>12</b>h
        </p>
        <p className="text-sm">: </p>
        <p className="text-sm bg-[var(--white-200)] rounded-sm p-1">
          <b>30</b>m
        </p>
      </aside>
    </div>
  );
};

export default DeliverySection;
