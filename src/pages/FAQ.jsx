import "./FAQ.css";
import React from "react";

export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How do I return a product?</h4>
          <p>You can return a product within 30 days of delivery. Please check our Returns & Exchanges page for details.</p>
        </div>
        <div className="faq-item">
          <h4>How long does shipping take?</h4>
          <p>Shipping typically takes 3-7 business days depending on your location.</p>
        </div>
        <div className="faq-item">
          <h4>How can I track my order?</h4>
          <p>Use your order ID on the Track Order page to get real-time updates.</p>
        </div>
      </div>
    </section>
  );
}
