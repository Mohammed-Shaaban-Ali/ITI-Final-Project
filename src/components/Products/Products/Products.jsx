import React, {
  useEffect,
  useState,
  useCallback,
  lazy,
  Suspense,
  useRef,
} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Products.css";

import ProductsFilter from "./ProductsFilter";
import LoadingProductCard from "../../Loading/LoadingProductCard";

const ProductsList = lazy(() => import("./ProductsList"));

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    gender: { Male: true, Female: true },
    ageGroup: { Adult: true, Children: true },
    price: { min: "", max: "" },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const productRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/products");
        setProducts(data.reverse());
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = useCallback((id) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        toast.success("Product deleted successfully");
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Error deleting product. Please try again.");
      });
  }, []);

  const handleFilterChange = (category, item) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [item]: !prev[category][item] },
    }));
  };

  const handlePriceChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, [type]: value },
    }));
  };

  const filteredProducts = products.filter((product) => {
    const genderMatch = filters.gender[product.gender];
    const ageMatch = product.age
      ? filters.ageGroup[product.age]
      : filters.ageGroup.Adult;
    const priceMatch =
      (filters.price.min === "" ||
        product.price >= Number(filters.price.min)) &&
      (filters.price.max === "" || product.price <= Number(filters.price.max));

    return genderMatch && ageMatch && priceMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToProduct();
  };

  const renderPageNumbers = useCallback(() => {
    const pageNumbers = [];

    pageNumbers.push(
      <button
        key="prev"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        Previous
      </button>
    );

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={
            currentPage === i ? "active pagination-button" : "pagination-button"
          }
        >
          {i}
        </button>
      );
    }

    pageNumbers.push(
      <button
        key="next"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Next
      </button>
    );

    return pageNumbers;
  }, [currentPage, totalPages]);

  return (
    <section className="store-container">
      <h1 className="title">Our Featured Store</h1>
      <div className="store-content">
        <ProductsFilter
          filters={filters}
          handleFilterChange={handleFilterChange}
          handlePriceChange={handlePriceChange}
        />

        <Suspense fallback={<LoadingProductCard />}>
          <ProductsList
            currentItems={currentItems}
            RenderPageNumbers={renderPageNumbers}
            productRef={productRef}
            loading={loading}
            handleDelete={handleDelete}
          />
        </Suspense>
      </div>
    </section>
  );
};

export default Products;
