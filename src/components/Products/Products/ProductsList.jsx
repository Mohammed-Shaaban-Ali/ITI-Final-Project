import React, { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";
import LoadingProductCard from "../../Loading/LoadingProductCard";

export default function ProductsList({
  currentItems,
  RenderPageNumbers,
  productRef,
  loading,
}) {
  // Handler to delete a product
  const handleDelete = useCallback((id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/products/${id}`)
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
      {loading ? (
        <LoadingProductCard />
      ) : (
        <div className="products-grid">
          {currentItems?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
      {/* Pagination Buttons */}
      <div className="pagination">{RenderPageNumbers()}</div>
    </div>
  );
}
