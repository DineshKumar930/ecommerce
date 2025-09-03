import "./Footer.css";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// components/layout/Footer.jsx

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-col brand">
          <h3 className="footer-logo">🛍️ 
            
            Crazykart</h3>
          <p className="footer-desc-to">
            Crazykart is your one-stop destination for fashion, electronics, and more.
            Shop smart, live better!
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blogs">Blog & News</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter to get the latest deals and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Crazykart. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
