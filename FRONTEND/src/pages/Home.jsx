import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // ✅ Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") setIsDarkMode(false);
  }, []);

  // ✅ Save theme to localStorage when changed
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleOrderClick = () => {
    setIsNavigating(true);
    setTimeout(() => navigate("/menu"), 500); // Smooth transition
  };

  const handleReservationClick = () => {
    setIsNavigating(true);
    setTimeout(() => navigate("/reservation"), 500); // Smooth transition
  };

  return (
    <div
      className={`home-page section ${
        isDarkMode ? "dark-mode" : "light-mode"
      } ${isNavigating ? "fade-out" : ""}`}
    >
      {/* <div className="theme-toggle">
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div> */}

      <div className="home-container">
        <h2>Welcome to Golden Spoon</h2>
        <p>Experience 5-star dining at the comfort of your home.</p>

        <div className="button-group">
          <button className="order-btn" onClick={handleOrderClick}>
            Order Now
          </button>
          
          <button className="reserve-btn" onClick={handleReservationClick}>
            Reservation
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
