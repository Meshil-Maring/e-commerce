import StarIcon from "../../../assets/icons/Star";

const Rating = () => {
  return (
    <div className="flex gap-1 justify-end items-end">
      <StarIcon />
      <p className="text-lg font-bold">4.4</p>
      <p className="text-sm text-[var(--white-400)]">(41, 238)</p>
    </div>
  );
};

export default Rating;
