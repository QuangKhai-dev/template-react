import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation()
  console.log(location)
  return <div></div>;
};

export default ProductDetail;
