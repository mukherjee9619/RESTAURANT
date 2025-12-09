import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiBell,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaUtensilSpoon } from "react-icons/fa";
import "../styles/Header.css";
import logo from "../assets/logo.jfif";
import { useCart } from "../state/CartContext";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const title = "GOLDEN SPOON";
  let oCount = 0;

  const renderTitle = () =>
    title.split("").map((char, index) => {
      if (char.toUpperCase() === "O") {
        oCount++;
        let spoonClass = "";
        if (oCount === 1 || oCount === 3) spoonClass = "spoon-up";
        else if (oCount === 2) spoonClass = "spoon-down";
        return <FaUtensilSpoon key={index} className={`spoon ${spoonClass}`} />;
      } else if (char === " ") {
        return (
          <span key={index} className="space">
            &nbsp;
          </span>
        );
      } else {
        return (
          <span key={index} className="letter">
            {char}
          </span>
        );
      }
    });

  // ✅ Logout
  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("user");
    clearCart();
    navigate("/login");
  };

  // ✅ Total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`navbar ${darkMode ? "dark" : "light"}`}>
      {/* Left Section */}
      <div className="nav-left">
      {/* Hamburger for Mobile */}

        <button
          className="hamburger"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Menu"
        >
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
        <Link to="/" className="logo-link">
          <img src={logo} alt="Golden Spoon Logo" className="nav-logo" />
        </Link>
        <h1 className="nav-title">{renderTitle()}</h1>
      </div>


      {/* Center Links */}
      <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={() => setMobileMenu(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
          onClick={() => setMobileMenu(false)}
        >
          About
        </Link>

        <div className="dropdown">
          <button
            className={`dropdown-btn ${
              location.pathname.includes("/menu") ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menus ▾
          </button>
          <div className={`dropdown-content ${menuOpen ? "active" : ""}`}>
            <Link
              to="/menu"
              onClick={() => {
                setMenuOpen(false);
                setMobileMenu(false);
              }}
            >
              MENU ITEMS
            </Link>
            <Link
              to="/menucard"
              onClick={() => {
                setMenuOpen(false);
                setMobileMenu(false);
              }}
            >
              MENU CARD
            </Link>
          </div>
        </div>

        <Link
          to="/blogs"
          className={location.pathname === "/blogs" ? "active" : ""}
          onClick={() => setMobileMenu(false)}
        >
          Blogs
        </Link>
        <Link
          to="/chef"
          className={location.pathname === "/chef" ? "active" : ""}
          onClick={() => setMobileMenu(false)}
        >
          Chef
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
          onClick={() => setMobileMenu(false)}
        >
          Contact
        </Link>
        <Link
          to="/login"
          className={location.pathname === "/login" ? "active" : ""}
          onClick={() => setMobileMenu(false)}
        >
          Login
        </Link>

        {/* Logout button for mobile menu */}
        <button
          className="logout-btn mobile-only"
          onClick={() => {
            handleLogout();
            setMobileMenu(false);
          }}
        >
          Logout
        </button>
      </nav>

      {/* Right Section */}
      <div className="nav-icons">
        <FiBell className="icon" title="Notifications" />
        <div className="cart-icon-wrapper">
          <Link to="/cart" onClick={() => setMobileMenu(false)}>
            <FiShoppingCart className="icon" title="Cart" />
            {totalItems > 0 && (
              <span className="cart-count animate-bounce">{totalItems}</span>
            )}
          </Link>
        </div>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        <button className="logout-btn desktop-only" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
