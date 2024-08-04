// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";

import { useEffect } from "react";
import ProductsAddUpdateForm from "../components/Products/Product Form/ProductForm";

function ProductForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ProductsAddUpdateForm />
    </>
  );
}

export default ProductForm;
