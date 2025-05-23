import Header from "../components/shared/header";
import SurfCuz from "../assets/images/surf-cuz.png";
import ShareIcon from "../assets/icons/share";
import HeartIcon from "../assets/icons/HeartIcon";

const ProductDetails = () => {
  return (
    <>
      <Header />

      <div className="bg-[#C8C8C8] m-4 rounded-2xl">
        <img className="bg-cover" src={SurfCuz} alt="surf cuz"></img>
      </div>
      <aside>
        <ShareIcon size={24} strokeW="1.5" />
        <HeartIcon size={24} strokeW="1.5" />
      </aside>
    </>
  );
};

export default ProductDetails;
