import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import ImageSlider from "./ImageSlider";
import SingleProductDetails from "./SingleProductDetails";
import PageDirection from "../PageDirection/PageDirection";
import "./SingleProduct.css";
import toast from "react-hot-toast";
export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
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
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then(function (response) {
        toast.success("Product deleted successfully");
        navigate("/products");
      })
      .catch(function (error) {
        toast.error("Error deleting product. Please try again");
      });
  };
  return (
    <div className="product-container">
      <PageDirection />
      <div className="product-wrapper">
        <SingleProductDetails product={product} handleDelete={handleDelete} />
        <ImageSlider product={product} />
      </div>
    </div>
  );
}
