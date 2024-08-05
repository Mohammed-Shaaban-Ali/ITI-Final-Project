import React from "react";
import { FaRegEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

// Main ProductCard component to render individual product
export default function ProductCard({ product, onDelete }) {
  return (
    <div key={product.id} className="product-card ">
      <div className="sale">
        {product.quantity == 0 && (
          <div className="out-Of-stock">Out Of Stock</div>
        )}
        {product.quantity == 1 && <div className="in-Stock">Last One</div>}
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
          <button onClick={() => onDelete(product.id)} className="delete">
            <RiDeleteBin3Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
