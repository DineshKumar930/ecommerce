import "./Header.css";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { filterByCategory, filterBySearch } from "../../features/products/productSlice";

export default function Header({ active }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCount = useSelector((state) =>
    state.cart.items.reduce((s, i) => s + i.qty, 0)
  );
  const user = useSelector((state) => state.auth.user);

  // ✅ get categories dynamically from slice
  const categories = useSelector((state) => state.products.categories);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setIsDark(!isDark);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close dropdown on outside click or ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const getInitials = (name = "") =>
    name
      .trim()
      .split(/\s+/)
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="pro-header">
        <div className="header-container pro-inner">
          <span>Best Deals Everyday!</span>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <Link to="/" className="brand" onClick={() => dispatch(filterByCategory("All"))}>
          <span className="logo">🛍️</span>
          <span className="brand-name">Crazycart</span>
        </Link>

        {/* ✅ Search Bar */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
          />
          <button>Search</button>
        </div>

        {/* Auth Area */}
        {user ? (
          <div className="auth-area">
            {/* Profile dropdown trigger */}
            <div className="user-menu" ref={dropdownRef}>
              <button
                className="user-chip"
                onClick={() => setIsDropdownOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={isDropdownOpen}
              >
                <div className="avatar-circle">
                  {user.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt="avatar"
                      className="avatar-img"
                    />
                  ) : (
                    <span>{getInitials(user.name || user.email || "U")}</span>
                  )}
                </div>
                <span className="user-name">{user.name}</span>
                <span className="chev">▾</span>
              </button>

              {isDropdownOpen && (
                <div className="account-dropdown" role="menu">
                  <Link
                    to="/profile"
                    className="menu-item"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="menu-item"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Your Orders
                  </Link>
                  <Link
                    to="/profile/edit"
                    className="menu-item"
                    role="menuitem"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Edit Profile
                  </Link>
                  <button
                    className="menu-item danger"
                    role="menuitem"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <Link to="/login" className="login-header">
              <span style={{ marginRight: "5px" }}>👤</span>
              Login
            </Link>
          </div>
        )}

        {/* Actions */}
        <div className="header-actions">
         

          {/* Mobile Menu Toggle */}
          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle categories menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* ✅ Category Nav */}
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="container nav-inner">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/?category=${cat}`}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => dispatch(filterByCategory(cat))}
            >
              {cat}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
  );
}
