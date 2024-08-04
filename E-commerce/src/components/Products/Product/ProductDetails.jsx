import axios from "axios";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export default function ProductDetails({ product }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        toast.success("Product deleted successfully");
        navigate("/products");
      })
      .catch((error) => {
        toast.error("Error deleting product. Please try again.");
      });
  };
  return (
    <div className="product-details">
      <div className="store-number">Store Number: 56hp90</div>
      <h1 className="product-title">{product?.name}</h1>
      <div className="product-price">$ {product?.price}</div>

      <div className="button-group" style={{ marginBottom: "24px" }}>
        <button className="product-button btn-primary">Contact us</button>
        <button className="product-button btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="chat-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          Chat with Store owner
        </button>
      </div>

      <table className="details-table">
        <tbody>
          {[
            { label: "Store Number", value: "56hp90" },
            { label: "Gender", value: ` ${product?.gender}` },
            { label: "Age", value: ` ${product?.age}` },
            { label: "Quantity", value: ` ${product?.quantity}` },
            { label: "Size", value: "Medium adult" },
            { label: "Color", value: "Brown and yellow" },
            { label: "Measurement request", value: "Yes" },
            { label: "Location", value: "Nation wide" },
            { label: "Published Date", value: "16/11/2022" },
          ].map((item, index) => (
            <tr key={index}>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="additional-info">
        <strong>Additional Information:</strong>
        <br />
        Lorem ipsum dolor sit amet consectetur. Auctor enim semper egestas felis
        metus volutpat cursus tortor. Sit.
      </div>

      <div className="button-group">
        <div className="btns">
          <Link to={`/products/${product.id}/edit/`} className="edit">
            <AiFillEdit />
          </Link>
          <button onClick={() => handleDelete(product.id)} className="delete">
            <RiDeleteBin3Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
