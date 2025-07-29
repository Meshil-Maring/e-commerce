const RatingRate = ({ star, percentage }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <p className="text-2xl">{star}</p>

      <div className="w-40 bg-blue-200 h-3 rounded-[900px]">
        <div
          className="bg-blue-900 h-3 rounded-4xl"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-2xl">{percentage}%</p>
    </div>
  );
};

export default RatingRate;
