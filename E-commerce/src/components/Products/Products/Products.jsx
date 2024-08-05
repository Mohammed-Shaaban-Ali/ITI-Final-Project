import React, { useEffect, useState, useCallback } from "react";
import "./Products.css";

import axios from "axios";
import toast from "react-hot-toast";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    gender: { Male: true, Female: true },
    ageGroup: { Adult: true, Children: true },
    price: { min: "", max: "" },
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products`);
        setProducts(response.data.reverse());
      } catch (error) {
        toast.error("Failed to fetch products. Please try again.");
      }
    };

    fetchProducts();
  }, []);

  // Handle filter changes
  const handleFilterChange = (category, item) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [item]: !prev[category][item] },
    }));
  };

  // Handle price input changes
  const handlePriceChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      price: { ...prev.price, [type]: value },
    }));
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    return (
      filters.gender[product.gender] &&
      (product.age ? filters.ageGroup[product.age] : filters.ageGroup.Adult) &&
      (filters.price.min === "" ||
        product.price >= Number(filters.price.min)) &&
      (filters.price.max === "" || product.price <= Number(filters.price.max))
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Pagination handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render page numbers with previous and next buttons
  const renderPageNumbers = useCallback(() => {
    const pageNumbers = [];

    // Previous page button
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

    // Page number buttons
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

    // Next page button
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
        <ProductsList
          currentItems={currentItems}
          RenderPageNumbers={renderPageNumbers}
        />
      </div>
    </section>
  );
};

export default Products;
