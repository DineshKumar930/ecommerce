import "./Help.css";
import React from "react";

export default function Help() {
  return (
    <section className="help-support">
      <div className="container">
        <h2>Help & Support</h2>
        <p>
          Welcome to Crazycart Help Center. Here you can find answers to common questions, 
          get support on orders, or reach out to our customer care team.
        </p>

        <div className="help-list">
          <div className="help-item">
            <h4>Order Issues</h4>
            <p>If you have problems with your order, such as missing items or delayed delivery, contact us immediately.</p>
          </div>
          <div className="help-item">
            <h4>Account & Login</h4>
            <p>Having trouble logging in or managing your account? We are here to help you resolve account-related issues.</p>
          </div>
          <div className="help-item">
            <h4>Payments</h4>
            <p>Need assistance with payments, refunds, or transactions? Our support team will guide you.</p>
          </div>
          <div className="help-item">
            <h4>Shipping & Returns</h4>
            <p>Learn about shipping timelines, return policies, and how to request a return or exchange.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
