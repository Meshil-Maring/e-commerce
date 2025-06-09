import Header from "../components/shared/header";
import ImagePreview from "../components/mobile/product-details/Image-preview";
import SliderNav from "../components/shared/slider-nav";
import TitleRating from "../components/mobile/product-details/Title-rating";
import ProductVariants from "../components/mobile/product-details/Product-Variants";
import SizeSelector from "../components/mobile/product-details/Size-seclector";
import DeliverySection from "../components/mobile/product-details/Delivery-section";
import AddressSection from "../components/mobile/product-details/Address-section";
import OrderSummary from "../components/mobile/product-details/Order-Summary";
import ProductDetailDisciption from "../components/mobile/product-details/ProductDetailDisciption.jsx";

const ProductDetails = () => {
  return (
    <section className="bg-[var(--white-200)] flex gap-2 flex-col">
      <div className="bg-white pb-2 rounded-b-2xl">
        <Header />
        <ImagePreview />
        <SliderNav />
        <TitleRating />
        <ProductVariants />
        <SizeSelector />
      </div>

      <div className="bg-white py-2 rounded-2xl">
        <DeliverySection />
        <AddressSection />
      </div>

      <div className="bg-white py-2 rounded-2xl">
        <OrderSummary />
      </div>

      <div className="bg-white py-2 rounded-2xl">
        <ProductDetailDisciption />
      </div>
    </section>
  );
};

export default ProductDetails;
