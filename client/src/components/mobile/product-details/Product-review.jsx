import StartIcon from "../../../assets/icons/Star";
import RatingRate from "../../shared/RatingRate";

const ProductReview = () => {
  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="w-full">
          <h2 className="text-2xl p-4 font-black">Product Reviews</h2>

          <div className="flex flex-col text-center w-full mt-4">
            <p className="text-6xl font-extrabold">4.8/5</p>

            <div className="flex gap-1 justify-center">
              <StartIcon fill="var(--primary)" stroke="var(--primary)" />
              <StartIcon fill="var(--primary)" stroke="var(--primary)" />
              <StartIcon fill="var(--primary)" stroke="var(--primary)" />
              <StartIcon fill="var(--primary)" stroke="var(--primary)" />
              <StartIcon fill="var(--primary)" stroke="var(--primary)" />
            </div>

            <p className="text-sm">Based on 2,458 reviews</p>
          </div>
        </div>

        {/* Rating */}
        <div className="w-full px-4 flex flex-col justify-center items-start">
          <div className="mb-2 flex gap-4">
            <p className="text-xl border-2 w-fit px-2 rounded-[4px] border-[var(--white-200)] relative">
              Videos
              <p className="text-[10px] absolute top-[-10px] right-[-10px] bg-[var(--primary)] rounded-4xl  w-[20px] h-[20px] p-1 text-center">
                20
              </p>
            </p>

            <p className="text-xl border-2 w-fit px-2 rounded-[4px] border-[var(--white-200)] relative">
              Photos
              <p className="text-[10px] absolute top-[-10px] right-[-10px] bg-[var(--primary)] rounded-4xl  w-[20px] h-[20px] p-1 text-center">
                8
              </p>
            </p>

            <p className="text-xl border-2 w-fit px-2 rounded-[4px] border-[var(--white-200)] relative">
              Comments
              <p className="text-[10px] absolute top-[-10px] right-[-10px] bg-[var(--primary)] rounded-4xl  w-[20px] h-[20px] p-1 text-center">
                42
              </p>
            </p>
          </div>

          <RatingRate star={5} percentage={75} />
          <RatingRate star={4} percentage={15} />
          <RatingRate star={3} percentage={5} />
          <RatingRate star={2} percentage={3} />
          <RatingRate star={1} percentage={2} />
        </div>
      </div>
    </>
  );
};

export default ProductReview;
