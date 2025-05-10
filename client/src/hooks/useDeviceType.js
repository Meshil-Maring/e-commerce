import { use, useEffect, useState } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("laptop");

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setDeviceType("mobile");
    } else if (width >= 768 && width < 1024) {
      setDeviceType("tablet");
    } else if (width >= 1440) {
      setDeviceType("laptop");
    } else {
      setDeviceType("tv");
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
