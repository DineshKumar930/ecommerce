import "./Checkout.css";
import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);

  // Bill calculation
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = +(subtotal * 0.12).toFixed(2); // 12% GST
  const total = +(subtotal + gst).toFixed(2);

  return (
    <div className="checkout container">
      <h2>Checkout</h2>

      {items.length === 0 ? (
        <p className="empty-msg">🛒 Your cart is empty!</p>
      ) : (
        <div className="checkout-layout">
          {/* Address & Payment Form */}
          <div className="checkout-form">
            <h3>Shipping Details</h3>
            <form>
              <label>
                Full Name
                <input type="text" placeholder="Enter your name" required />
              </label>
              <label>
                Email
                <input type="email" placeholder="Enter your email" required />
              </label>
              <label>
                Phone
                <input type="tel" placeholder="Enter your phone number" required />
              </label>
              <label>
                Address
                <textarea placeholder="Enter your address" required></textarea>
              </label>

              <h3>Payment Method</h3>
              <div className="payment-options">
                <label>
                  <input type="radio" name="payment" defaultChecked /> ATM / Debit Card
                </label>
                <label>
                  <input type="radio" name="payment" /> UPI / Google Pay
                </label>
                <label>
                  <input type="radio" name="payment" /> Cash on Delivery
                </label>
              </div>

              <button type="submit" className="pay-btn">
                Pay ₹{total}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="checkout-summary">
            <h3>Order Summary</h3>
            {items.map((i) => (
              <div className="summary-item" key={i.id}>
                <span>{i.name} × {i.qty}</span>
                <span>₹{i.price * i.qty}</span>
              </div>
            ))}

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
          </div>
        </div>
      )}
    </div>
  );
}
