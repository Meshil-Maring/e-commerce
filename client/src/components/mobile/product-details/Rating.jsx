import StarIcon from "../../../assets/icons/StarFill";

const Rating = () => {
  return (
    <div className="flex gap-1 justify-end  items-center ">
      <aside className="bg-[var(--red)] flex px-1 rounded-sm justify-center items-center">
        <StarIcon fill="white" size={18} />
        <p className="text-sm font-bold text-white pr-1">4.4</p>
      </aside>
      <p className="text-sm text-[var(--white-500)]">(41, 238)</p>
    </div>
  );
};

export default Rating;
