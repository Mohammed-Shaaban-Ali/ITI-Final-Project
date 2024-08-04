import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Product.css";
import ImageSlider from "./ImageSlider";
import ProductDetails from "./ProductDetails";
import PageDirection from "../Page direction/PageDirection";
import { useNavigate, useParams } from "react-router-dom";
export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then(function (response) {
        setProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="product-container">
      <PageDirection />
      <div className="product-wrapper">
        <ProductDetails product={product} />
        <ImageSlider product={product} />
      </div>
    </div>
  );
}
