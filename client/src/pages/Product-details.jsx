import Header from "../components/shared/header";
import ImagePreview from "../components/mobile/product-details/Image-preview";
import SliderNav from "../components/shared/slider-nav";
import TitleRating from "../components/mobile/product-details/Title-rating";
import ProductVariants from "../components/mobile/product-details/Product-Variants";
import SizeSelector from "../components/mobile/product-details/Size-seclector";
import DeliverySection from "../components/mobile/product-details/Delivery-section";
import AddressSection from "../components/mobile/product-details/Address-section";

const ProductDetails = () => {
  return (
    <>
      <Header />
      <ImagePreview />
      <SliderNav />
      <TitleRating />
      <ProductVariants />
      <SizeSelector />
      <DeliverySection />
      <AddressSection />
    </>
  );
};

export default ProductDetails;
