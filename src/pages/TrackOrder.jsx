import "./TrackOrder.css";
import React from "react";

export default function TrackOrder() {
  return (
    <section className="track-order">
      <div className="container">
        <h2>Track Order</h2>
        <p>
          Use your order ID to track the status of your shipment. Enter your details below to see the latest updates.
        </p>
        <form className="track-form">
          <input type="text" placeholder="Enter Order ID" required />
          <button type="submit">Track</button>
        </form>
      </div>
    </section>
  );
}
