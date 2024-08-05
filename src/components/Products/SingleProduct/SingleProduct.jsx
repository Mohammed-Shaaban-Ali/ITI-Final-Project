import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ImageSlider from "./ImageSlider";
import SingleProductDetails from "./SingleProductDetails";
import PageDirection from "../PageDirection/PageDirection";
import "./SingleProduct.css";
export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const PORT = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${PORT}/products/${id}`)
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
        <SingleProductDetails product={product} />
        <ImageSlider product={product} />
      </div>
    </div>
  );
}
