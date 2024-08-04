import React, { useEffect } from "react";
import Product from "../components/Products/Product/Product";

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Product />
    </>
  );
};

export default ProductDetail;
