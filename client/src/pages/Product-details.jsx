import Header from "../components/shared/header";
import ImagePreview from "../components/mobile/product-details/Image-preview";
import Rating from "../components/mobile/product-details/Rating";
import SliderNav from "../components/shared/slider-nav";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <ImagePreview />
      <SliderNav />
      <div className="m-4 flex justify-between">
        <h1 className="uppercase text-lg font-bold"> surf CUZ</h1>
        <Rating />
      </div>
    </>
  );
};

export default ProductDetails;
