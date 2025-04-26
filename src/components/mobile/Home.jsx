import React from "react";

import LocationComponent from "./home/location-component";
import HeaderComponent from "./home/header-compenent";

const Home = () => {
  return (
    <div className="bg-[var(--bg-primary)] h-screen">
      {/* Header component for mobile view */}
      <HeaderComponent />

      {/* Location component for mobile view */}
      <LocationComponent />
    </div>
  );
};

export default Home;
