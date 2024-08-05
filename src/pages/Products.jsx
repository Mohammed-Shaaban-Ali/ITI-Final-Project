import { Link } from "react-router-dom";
import { useEffect } from "react";
import PageDirection from "../components/Products/PageDirection/PageDirection";
import ProductsConponts from "../components/Products/Products/Products";
import bander from "../assets/Banner.svg";
const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="container-bander"
        style={{ margin: "0 auto", padding: "120px 0 0" }}
      >
        <div className="topProuducts">
          <PageDirection />
          <Link className=" button addProduct-btn" to="/products/0/edit">
            Add New Product
          </Link>
        </div>
        <img src={bander} alt=" bander" />
      </div>
      <ProductsConponts />
    </>
  );
};

export default Products;
