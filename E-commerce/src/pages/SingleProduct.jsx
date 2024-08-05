import React, { useEffect } from "react";
import ProductCompont from "../components/Products/SingleProduct/SingleProduct";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductCompont />
    </>
  );
};

export default ProductDetail;
