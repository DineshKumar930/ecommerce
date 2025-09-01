import "./Checkout.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { addOrder } from "../features/order/orderSlice";

export function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);

  const [shipping, setShipping] = useState({ name: "", phone: "", address: "" });
  const [paymentMethod, setPaymentMethod] = useState("ATM / Debit Card");

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const gst = +(subtotal * 0.12).toFixed(2);
  const total = +(subtotal + gst).toFixed(2);

  const handlePay = (e) => {
    e.preventDefault();
    if (items.length === 0) return alert("Cart is empty!");
    if (!shipping.name || !shipping.phone || !shipping.address) {
      return alert("Please fill shipping details!");
    }

    const orderData = {
      id: new Date().getTime(),
      userId: user.email, // crucial for user-specific orders
      items,
      subtotal,
      gst,
      total,
      date: new Date().toLocaleString(),
      shipping,
      paymentMethod,
    };

    dispatch(addOrder(orderData));
    dispatch(clearCart());

    alert("Order placed successfully!");
    navigate("/orders");
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShipping((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="checkout container">
      <h2>Checkout</h2>

      {items.length === 0 ? (
        <p className="empty-msg">🛒 Your cart is empty!</p>
      ) : (
        <div className="checkout-layout">

          {/* Shipping Section */}
          <div className="checkout-section shipping-section">
            <h3>Shipping Details</h3>
            {user && (
              <div className="user-info">
                <span role="img" aria-label="user">👤</span>
                <div>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
              </div>
            )}

            <form>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={shipping.name}
                  onChange={handleShippingChange}
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={shipping.phone}
                  onChange={handleShippingChange}
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                Address
                <textarea
                  name="address"
                  value={shipping.address}
                  onChange={handleShippingChange}
                  placeholder="Enter your address"
                  required
                ></textarea>
              </label>
            </form>
          </div>

          {/* Payment Section */}
          <div className="checkout-section payment-section">
            <h3>Payment Method</h3>
            <form onSubmit={handlePay}>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="ATM / Debit Card"
                  checked={paymentMethod === "ATM / Debit Card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> ATM / Debit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="UPI / Google Pay"
                  checked={paymentMethod === "UPI / Google Pay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> UPI / Google Pay
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={paymentMethod === "Cash on Delivery"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> Cash on Delivery
              </label>

              <button type="submit" className="pay-btn">
                Pay ₹{total}
              </button>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="checkout-section order-summary-section">
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

export default Checkout;
