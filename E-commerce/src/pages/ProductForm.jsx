// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

import { useEffect } from "react";
import ProductFormCompont from "../components/Products/ProductForm/ProductForm";
function ProductForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductFormCompont />
    </>
  );
}

export default ProductForm;
