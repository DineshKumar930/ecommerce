import "./ProductList.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

export default function ProductList({ onSelectProduct }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Get filtered products from Redux slice
  const products = useSelector((state) => state.products.filteredProducts);

  // ⭐ Generate stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (halfStar) stars.push("☆");
    while (stars.length < 5) stars.push("☆");

    return stars.join(" ");
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="product-list-container">
      <h2 className="section-title">Our Products</h2>

      <div className="product-list">
        {products.length > 0 ? (
          products.map((p) => (
            <div className="product-card" key={p.id}>
              <div
                className="product-image"
                onClick={() => {
                  onSelectProduct(p);   // ⭐ product state update karega
                  navigate("/details"); // ⭐ aur route change karega
                }}
              >
                <img src={p.image} alt={p.name} />
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <div className="price-rating">
                  <p className="price">₹{formatPrice(p.price)}</p>
                  <p className="rating">
                    {renderStars(p.rating)}{" "}
                    <span className="rating-count">
                      ({p.reviews || Math.floor(Math.random() * 100)})
                    </span>
                  </p>
                </div>
              </div>
              <button
                className="add-btn"
                onClick={() => dispatch(addToCart(p))}
                aria-label={`Add ${p.name} to cart`}
              >
                <span className="btn-icon">+</span>
                <span className="btn-text">Add to Cart</span>
              </button>
              <button
                className="mobile-add-btn"
                onClick={() => dispatch(addToCart(p))}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>
    </div>
  );
}
