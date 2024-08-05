import React, { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";

export default function ProductsList({
  currentItems,
  RenderPageNumbers,
  productRef,
}) {
  // Handler to delete a product
  const handleDelete = useCallback((id) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        toast.success("Product deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Error deleting product. Please try again.");
      });
  }, []);
  return (
    <div className="products-section" ref={productRef}>
      <div className="products-header animation">
        <h2>
          Ankara styles <span>Male & Female</span>
        </h2>
        <select>
          <option>Sort by: Popular</option>
        </select>
      </div>
      <div className="products-grid">
        {currentItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {/* Pagination Buttons */}
      <div className="pagination">{RenderPageNumbers()}</div>
    </div>
  );
}
