import React from "react";

import HeaderComponent from "./home/header-compenent";
import LocationComponent from "./home/location-component";
import HeroComponent from "./home/hero-component";
import CollectionSection from "./home/collection-setion";
import BrandSection from "./home/brand-section";
import ContinueShopping from "./home/Continue-shoping";
import PriceSection from "./home/price-section";
// import BestPickSarees from "./home/best-pick-sarees";
import BestPickForYou from "./home/BestPickForYou";
import FlashSale from "./home/FlashSale";

const Home = () => {
  return (
    <div className="bg-[var(--bg-primary)] h-screen">
      {/* Header component for mobile view */}
      <HeaderComponent />

      {/* Location component for mobile view */}
      <LocationComponent />

      {/* Hero Section */}
      <HeroComponent />

      {/* Collection Section*/}
      <CollectionSection />

      {/* Brand Section */}
      <BrandSection />

      {/* Continue Shoping section */}
      <ContinueShopping />

      {/* Price card */}
      <PriceSection />

      {/* Best pick Sarees */}

      {/* Best pick for you */}
      <BestPickForYou />

      {/* Flash Sale */}
      <FlashSale />
    </div>
  );
};

export default Home;
