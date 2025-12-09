import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // ✅ Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setIsDarkMode(false);
  }, []);

  return (
    <footer className={`footer ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="footer-top">
        {/* 🌟 Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">GOLDEN SPOON</h2>
          <p>
            Experience the luxury of fine dining with our world-class chefs,
            authentic cuisines, and premium service.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/subhasis.mukherjee.58323?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a href="https://x.com/msubhasis16" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/subhasis.mukherjee.58323"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/subhasis-mukherjee-b43257240"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/+918170857898" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* 🍴 Menu Section */}
        <div className="footer-section">
          <h3>Our Menus</h3>
          <ul>
            <li>Starters</li>
            <li>Main Course</li>
            <li>Desserts</li>
            <li>Drinks</li>
            <li>Chef’s Specials</li>
          </ul>
        </div>

        {/* 🔗 Links Section */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/chef">Our Chefs</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* ☎️ Contact Section */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <FaPhoneAlt /> +91 7003907430
          </p>
          <p>
            <FaEnvelope /> goldenspoon@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt /> Durgapur, Kolkata, New Delhi
          </p>

          <div className="app-links">
            <button className="app-btn google">
              <FaGooglePlay /> Google Play
            </button>
            <button className="app-btn apple">
              <FaAppStoreIos /> App Store
            </button>
          </div>
        </div>
      </div>

      {/* 🧾 Sticky Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 GOLDEN SPOON Restaurant. All Rights Reserved.</p>
        <div className="payment-icons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
          />
          <span>Visa</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
          />
          <span>PayPal</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard"
          />
          <span>Mastercard</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
