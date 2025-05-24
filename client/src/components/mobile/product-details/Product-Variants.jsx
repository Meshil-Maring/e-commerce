import InfoIcon from "../../../assets/icons/Info";
import SurPink from "../../../assets/images/sur-cuz-pink.png";
import SurWhite from "../../../assets/images/surf-cuz.png";

const ProductVariants = () => {
  return (
    <ul className="mt-8 ml-4 flex gap-4">
      <li className="flex flex-col items-center relative">
        <img
          className="w-16 h-16 border-2 rounded-2xl border-[var(--white-300)]"
          src={SurPink}
          alt="Surf cuz pink color variants"
        />
        <p className="text-sm font-bold">
          <sm className="text-red-600">-5%</sm> ₹879
        </p>
        <del className="text-sm text-[var(--white-400)]">₹999</del>
      </li>

      <li className="flex flex-col items-center">
        <img
          className="w-16 h-16 border-2 rounded-2xl"
          src={SurWhite}
          alt="Surf cuz pink color variants"
        />
        <p className="text-sm font-bold">
          <sm className="text-red-600">-5%</sm> ₹879
        </p>
        <del className="text-sm text-[var(--white-400)]">₹999</del>
      </li>
    </ul>
  );
};

export default ProductVariants;
