import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductForm.css";
const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    gender: "",
    quantity: "",
    age: "",
    images: [],
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = async (event) => {
    const files = Array.from(event.target.files);
    setIsLoading(true);
    try {
      const urls = await generateImageURLs(files);
      setProduct((prev) => ({ ...prev, images: urls }));
      console.log(product);
    } catch (error) {
      setError("Error generating image URLs. Please try again.");
      console.log("Error generating image URLs:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const PORT = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name: product.name,
      price: product.price,
      gender: product.gender,
      quantity: product.quantity,
      age: product.age,
      images: product.images,
    };
    try {
      if (id == 0) {
        await axios.post(`${PORT}/products`, newProduct);
        toast.success("Product added successfully!");
      } else {
        await axios.put(`${PORT}/products/${id}`, newProduct);
        toast.success("Product updated successfully!");
      }
      setProduct({
        name: "",
        price: "",
        gender: "",
        quantity: "",
        age: "",
        images: [],
      });
      navigate("/products");
    } catch (error) {
      toast.error("Error adding product. Please try again.");
    }
  };

  const generateImageURLs = async (imageFiles) => {
    const apiKey = "f41682ac2d92cb34d7e0a66808d86636";
    const uploadPromises = imageFiles.map(async (file) => {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      return data.data.url;
    });

    return Promise.all(uploadPromises);
  };

  useEffect(() => {
    if (id != 0) {
      axios
        .get(`http://localhost:4000/products/${id}`)
        .then(function (response) {
          setProduct(response.data);
        })
        .catch(function (error) {
          toast.error(error);
        });
    }
  }, [id]);

  return (
    <div className="addProduct">
      <div className="Product-form-container">
        <h2 className="Product-form-title">
          {id == 0 ? "Add New Product" : "Update Product"}
        </h2>
        <form onSubmit={handleSubmit} className="Product-product-form">
          <div className="inGroup">
            <div className="Product-form-group flex2">
              <label htmlFor="name" className="Product-form-label">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="Product-form-input"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Product-form-group">
              <label htmlFor="price" className="Product-form-label">
                Price:
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="Product-form-input"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="inGroup">
            <div className="Product-form-group">
              <label htmlFor="gender" className="Product-form-label">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                className="Product-form-input"
                value={product.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="Product-form-group">
              <label htmlFor="quantity" className="Product-form-label">
                quantity:
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                className="Product-form-input"
                value={product.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Product-form-group">
              <label className="Product-form-label">Age:</label>
              <div className="Product-radio-group">
                <label className="Product-radio-label">
                  <input
                    type="radio"
                    name="age"
                    value="Adult"
                    className="Product-radio-input"
                    checked={product.age === "Adult"}
                    onChange={handleChange}
                  />
                  Adult
                </label>
                <label className="Product-radio-label">
                  <input
                    type="radio"
                    name="age"
                    value="Children"
                    className="Product-radio-input"
                    checked={product.age === "Children"}
                    onChange={handleChange}
                  />
                  Children
                </label>
              </div>
            </div>
          </div>

          <div className="Product-form-group">
            <label htmlFor="images" className="Product-form-label">
              IMAGES:
            </label>
            <input
              id="images"
              name="images"
              type="file"
              className="Product-form-input"
              onChange={handleImageChange}
              multiple
              accept="image/*"
            />
          </div>

          {isLoading && (
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}

          <div className="images-product">
            {product.images.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Preview ${index + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  margin: "5px",
                }}
              />
            ))}
          </div>

          {error && toast.error(error)}

          <button
            disabled={isLoading}
            type="submit"
            className="Product-submit-button"
          >
            {id == 0 ? "Add New Product" : "Update Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
