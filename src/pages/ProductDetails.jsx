import "./ProductDetails.css";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = ({ product, onBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) return null;

  return (
    <div className="product-details">
      <button className="back-btn" onClick={() => navigate("/")}>
          ⬅️ Back to Products
        </button>

      <div className="product-card-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p className="rating">⭐ {product.rating}</p>
          <p className="desc">{product.description}</p>

          <button
            className="add-btn"
            onClick={() => dispatch(addToCart(product))}
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="btn-icon">+</span>
            <span className="btn-text">Add to Cart</span>
          </button>
          <button
            className="mobile-add-btn"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
