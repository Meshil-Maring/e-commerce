import Header from "../components/shared/header";
import ImagePreview from "../components/mobile/product-details/Image-preview";
import SliderNav from "../components/shared/slider-nav";
import TitleRating from "../components/mobile/product-details/Title-rating";
import ProductVariants from "../components/mobile/product-details/Product-Variants";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <ImagePreview />
      <SliderNav />
      <TitleRating />
      <ProductVariants />
    </>
  );
};

export default ProductDetails;
