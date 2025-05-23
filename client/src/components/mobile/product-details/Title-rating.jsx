import Rating from "./Rating";

const TitleRating = () => {
  return (
    <div className="m-4 grid grid-cols-2 justify-between">
      <h1 className="uppercase text-lg font-bold"> surf CUZ</h1>
      <Rating />

      <p className="col-span-2 text-sm mt-2">
        SURF CUZ Men's Quick Dry Light Weight Pace Running Shorts Active Shorts
      </p>
    </div>
  );
};

export default TitleRating;
