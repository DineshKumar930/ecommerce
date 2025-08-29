import "./Footer.css";
import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="footer-logo">🛒</span>
              <h3>Crazycart</h3>
            </div>
            <p className="footer-description">
              Your one-stop destination for electronics, fashion, home, and more. 
              Quality products at affordable prices.
            </p>
            <div className="payment-methods">
              <div className="payment-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="payment-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8C13.66 8 15 6.66 15 5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5C9 6.66 10.34 8 12 8ZM12 11.54C9.64 11.54 7.5 10.56 6.61 8.84C6.22 8.15 5.71 7.54 5.13 7L3.24 7C4.22 8.92 5.84 10.43 7.84 11.21L6.64 14.75L3.47 14.96C3.18 15.01 3 15.26 3 15.55C3 15.95 3.33 16.25 3.73 16.25H8.5L7.57 20.67C7.54 20.85 7.6 21.03 7.73 21.15C7.97 21.37 8.33 21.35 8.55 21.11L12 17.5L15.45 21.11C15.56 21.24 15.72 21.31 15.89 21.31C15.96 21.31 16.03 21.3 16.1 21.27C16.36 21.18 16.54 20.93 16.54 20.65L16.53 20.56L15.5 16.25H20.27C20.67 16.25 21 15.95 21 15.55C21 15.26 20.82 15.01 20.53 14.96L17.36 14.75L16.16 11.21C18.16 10.43 19.78 8.92 20.76 7L18.87 7C18.29 7.54 17.78 8.15 17.39 8.84C16.5 10.56 14.36 11.54 12 11.54Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="payment-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18Z" fill="currentColor"/>
                  <path d="M11.25 15.5L15.5 9.5H12.5L11 12L9.5 9.5H6.5L10.75 15.5H11.25Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="footer-col">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Shipping Information</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Blog & News</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter-col">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for exclusive deals and updates</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>

            <div className="social-links">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50193 4.84824 2.1613 5.19941C1.82067 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991236 9.97631 1 11.75C0.991236 13.5237 1.14521 15.2944 1.46 17.04C1.59096 17.5158 1.8383 17.9507 2.17814 18.3003C2.51799 18.6499 2.93884 18.9022 3.4 19.04C5.12 19.5 12 19.5 12 19.5C12 19.5 18.88 19.5 20.6 19.04C21.0708 18.9068 21.4981 18.6518 21.8387 18.3006C22.1793 17.9494 22.4212 17.5146 22.54 17.04C22.8528 15.2944 23.0068 13.5237 22.999 11.75C23.0068 9.97631 22.8528 8.20556 22.54 6.42V6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Crazycart. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}