import "./Header.css";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Header({ onNavigate, active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalCount = useSelector((state) =>
    state.cart.items.reduce((s, i) => s + i.qty, 0)
  );

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const cur =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Pro Header */}
      <div className="pro-header">
        <div className="container pro-inner">
          <span>Welcome to Crazycart - Best Deals Everyday!</span>
          <button onClick={toggleTheme} className="theme-toggle">
            Toggle Theme
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container main-header">
        <div className="brand" onClick={() => onNavigate("products")}>
          <span className="logo">🛒</span>
          <span className="brand-name">Crazycart</span>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search for products..." />
          <button>Search</button>
        </div>

        <div className="header-actions">
          <button
            className={`nav-btn ${active === "cart" ? "active" : ""}`}
            onClick={() => onNavigate("cart")}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalCount}</span>
          </button>
          <button
            className={`nav-btn ${active === "checkout" ? "active" : ""}`}
            onClick={() => onNavigate("checkout")}
          >
            Checkout
          </button>
          <button className="profile-btn">👤</button>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Category Nav */}
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="container nav-inner">
          <button onClick={() => handleNavClick("products")}>All</button>
          <button>Electronics</button>
          <button>Appliances</button>
          <button>Fashion</button>
          <button>Home & Furniture</button>
          <button>Beauty</button>
          <button>Sports</button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
}
