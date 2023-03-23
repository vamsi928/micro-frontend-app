import { mount as marketingMount } from "marketing/marketingIndex";
import React, { useRef, useEffect } from "react";

export const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    marketingMount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};
