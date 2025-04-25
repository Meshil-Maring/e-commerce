import React from "react";
import UseDeviceType from "../hooks/useDeviceType.js";
import HomeMobile from "../components/mobile/Home.jsx";

const Home = () => {
  const device = UseDeviceType();

  switch (device) {
    case "mobile":
      return <HomeMobile />;
    case "tablet":
      return <div>Tablet</div>;
    case "laptop":
      return <div>Laptop</div>;
    case "tv":
      return <div>TV</div>;
    default:
      return <div>Unknown device</div>;
  }
};

export default Home;
