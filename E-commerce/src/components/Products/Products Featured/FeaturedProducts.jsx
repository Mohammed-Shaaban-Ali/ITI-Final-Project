import React from "react";
import { FaRegEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
export default function FeaturedProducts({ currentItems, RenderPageNumbers }) {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        toast.success("Product deleted successfully");
      })
      .catch((error) => {
        toast.error("Error deleting product. Please try again.");
      });
  };
  return (
    <div className="products-section">
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
          <div key={product.id} className="product-card ">
            <div className="sale">
              {product.quantity == 0 && (
                <div className="out-Of-stock">Out Of Stock</div>
              )}
              {product.quantity == 1 && (
                <div className="in-Stock">Last One</div>
              )}
            </div>
            <img
              style={product.quantity == 0 ? { filter: "grayscale(100%)" } : {}}
              src={product.images[0]}
              alt={product.name}
            />
            <h3>
              {product.name.length > 20
                ? product.name.slice(0, 20) + "..."
                : product.name}
            </h3>
            <div className="card-footer">
              <div className="card-content">
                <div className="gene-age">
                  <p>
                    Gene: <strong>{product.gender}</strong>
                  </p>
                  <div className="line"></div>
                  <p>
                    Age: <strong>{product.age}</strong>
                  </p>
                </div>
                <div className="price">
                  Price:{" "}
                  <strong>
                    {" "}
                    <span>$</span>
                    {product.price.toLocaleString()}
                  </strong>
                </div>
              </div>
              <div className="btns">
                <Link to={`/products/${product.id}/edit/`} className="edit">
                  <AiFillEdit />
                </Link>
                <Link to={`/products/${product.id}`} className="see">
                  <FaRegEye />
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="delete"
                >
                  <RiDeleteBin3Fill />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination Buttons */}
      <div className="pagination">{RenderPageNumbers()}</div>
    </div>
  );
}
