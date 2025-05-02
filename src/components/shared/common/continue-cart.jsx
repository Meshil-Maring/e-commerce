import HeartIcon from "../../../assets/icons/HeartIcon.jsx";

const ContinueCart = ({ props }) => {
  return props.map((items) => {
    return (
      <li
        key={items.id}
        className="w-[120px] h-[180px] bg-cover bg-no-repeat bg-center rounded-xl flex justify-between"
        style={{ backgroundImage: `url(${items.image})` }}
      >
        <div className="mt-auto w-full bg-gradient-to-t from-black/60 to-white/0 p-2 rounded-xl">
          <div className="flex justify-between items-center text-white">
            <h2 className="text-sm font-semibold">{items.title}</h2>
            <HeartIcon size={16} />
          </div>
          <p className="text-white text-sm font-light">{items.subtitle}</p>

          <div className="flex gap-4 text-white">
            <del className="text-sm font-light">{items.oldPrice}</del>
            <p className="text-sm font-semibold">{items.price}</p>
          </div>
        </div>
      </li>
    );
  });
};

export default ContinueCart;
