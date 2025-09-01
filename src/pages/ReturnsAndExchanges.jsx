import "./ReturnsAndExchanges.css";
import React from "react";

export default function ReturnsAndExchanges() {
  return (
    <section className="returns-exchanges">
      <div className="container">
        <h2>Returns & Exchanges</h2>
        <p>
          At Crazycart, we want you to be fully satisfied with your purchase. You can return
          or exchange products within 30 days of delivery, provided they are in original condition.
        </p>
        <ul>
          <li>Items must be unused and in original packaging.</li>
          <li>Refunds will be processed within 7 business days after receiving the returned items.</li>
          <li>Exchanges are subject to product availability.</li>
        </ul>
      </div>
    </section>
  );
}
