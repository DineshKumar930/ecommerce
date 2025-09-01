import "./ShippingInfo.css";
import React from "react";

export default function ShippingInfo() {
  return (
    <section className="shipping-info">
      <div className="container">
        <h2>Shipping Information</h2>
        <p>
          We offer fast and reliable shipping options across India. Your order will be delivered
          within 3-7 business days depending on the location.
        </p>
        <ul>
          <li>Standard Delivery: 5-7 business days</li>
          <li>Express Delivery: 2-3 business days</li>
          <li>Free shipping on orders above ₹999</li>
        </ul>
      </div>
    </section>
  );
}
