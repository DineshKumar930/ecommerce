import "./Cart.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, decreaseQty, increaseQty, removeFromCart } from "../../features/cart/cartSlice";

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = +(subtotal * 0.12).toFixed(2); // 12% GST
  const total = +(subtotal + gst).toFixed(2);

  return (
    <div className="cart-page container">
      <h2>Your Shopping Cart</h2>

      {items.length === 0 && <p className="empty-cart">🛒 Your cart is empty!</p>}

      {items.length > 0 && (
        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {items.map((i) => (
              <div className="cart-item" key={i.id}>
                <img src={i.image} alt={i.name} />
                <div className="cart-info">
                  <h4>{i.name}</h4>
                  <p className="price">₹{i.price}</p>

                  {/* Modern Quantity Controls */}
                  <div className="qty-controls-modern">
                    <button className="qty-btn minus" onClick={() => dispatch(decreaseQty(i.id))}>-</button>
                    <span className="qty-count">{i.qty}</span>
                    <button className="qty-btn plus" onClick={() => dispatch(increaseQty(i.id))}>+</button>
                  </div>

                  <p className="total-price">Total: ₹{i.price * i.qty}</p>
                  <button className="remove-btn" onClick={() => dispatch(removeFromCart(i.id))}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h3>Bill Summary</h3>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="summary-line">
              <span>GST (12%)</span>
              <span>₹{gst}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
