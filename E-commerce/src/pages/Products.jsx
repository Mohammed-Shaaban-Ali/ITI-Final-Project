import { Link } from "react-router-dom";
import bander from "../assets/Banner.svg";
import PageDirection from "../components/Products/Page direction/PageDirection";
import MainProducts from "../components/Products/Products Featured/MِِِAinProducts";
import { useEffect } from "react";

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
      <MainProducts />
    </>
  );
};

export default Products;
