import ProductCard from "./ProductCard";
import LoadingProductCard from "../../Loading/LoadingProductCard";

export default function ProductsList({
  currentItems,
  RenderPageNumbers,
  productRef,
  loading,
  handleDelete,
}) {
  // Handler to delete a product

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
