import "./CartSummary.css";
import React from "react";
import { useSelector } from "react-redux";

export default function CartSummary({ gstRate = 12 }) {
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const gstAmount = +(subtotal * gstRate / 100).toFixed(2);
  const total = +(subtotal + gstAmount).toFixed(2);

  return (
    <div className="cart-summary">
      <h3>Bill Summary</h3>
      <div className="summary-line">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>
      <div className="summary-line">
        <span>GST ({gstRate}%)</span>
        <span>₹{gstAmount}</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
}
