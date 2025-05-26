import StarIcon from "../../../assets/icons/StarFill";

const Rating = () => {
  return (
    <div className="flex gap-1 justify-end  items-center ">
      <aside className="bg-[var(--red)] flex gap-1 px-2 rounded-sm items-center">
        <StarIcon fill="white" size={20} />
        <p className="text-lg font-bold text-white">4.4</p>
      </aside>
      <p className="text-sm text-[var(--white-500)]">(41, 238)</p>
    </div>
  );
};

export default Rating;
