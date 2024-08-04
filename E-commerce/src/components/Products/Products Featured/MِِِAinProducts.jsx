import React, { useEffect, useState } from "react";
import "./Featured.css";
import FeaturedFilter from "./FeaturedFilter";
import FeaturedProducts from "./FeaturedProducts";
import axios from "axios";
import toast from "react-hot-toast";
const MainProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    gender: { Male: true, Female: true },
    ageGroup: { Adult: true, Children: true },
    price: { min: "", max: "" },
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products`)
      .then(function (response) {
        // Reverse the array
        const reversedProducts = response.data.reverse();
        setProducts(reversedProducts);
      })
      .catch(function (error) {
        toast.error(error.message);
      });
  }, [products]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
    return (
      filters.gender[product.gender] &&
      (product.age ? filters.ageGroup[product.age] : filters.ageGroup.Adult) &&
      (filters.price.min === "" ||
        product.price >= Number(filters.price.min)) &&
      (filters.price.max === "" || product.price <= Number(filters.price.max))
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <section className="store-container ">
      <h1 className="title animation ">Our featured store</h1>
      <div className="store-content">
        <FeaturedFilter
          filters={filters}
          handleFilterChange={handleFilterChange}
          handlePriceChange={handlePriceChange}
        />
        <FeaturedProducts
          RenderPageNumbers={renderPageNumbers}
          currentItems={currentItems}
        />
      </div>
    </section>
  );
};

export default MainProducts;
