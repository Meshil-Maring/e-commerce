import HeartIcon from "../../assets/icons/HeartIcon";

const BestPickCart = ({ props }) => {
  return props.map((items) => {
    return (
      <li className="bg-[#D9D9D9] w-fit rounded-2xl">
        <img className="w-64 px-4 pt-4 rounded-t-3xl" src={items.image}></img>

        <div className="flex flex-col w-full p-3 bg-[#E8E8E8] rounded-2xl">
          <aside className="flex justify-between">
            <h2 className="font-bold text-sm">{items.title} </h2>
            <HeartIcon size={16} />
          </aside>
          <p className="text-[11px]">{items.subtitle}</p>
          <aside className="flex justify-between">
            <del className="text-[12px]">₹ 2,499</del>
            <p className="font-bold text-[12px]">₹ 1,999</p>

            <p className="font-bold text-[12px] text-red-600"> 60% OFF</p>
          </aside>
        </div>
      </li>
    );
  });
};

export default BestPickCart;
