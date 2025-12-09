import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Success.css";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear cart after success
    localStorage.removeItem("cartItems");
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="confetti"></div>
        <h1>🎉 Order Successful!</h1>
        <p>Thank you for your order. Your delicious meal will arrive soon!</p>
        <button onClick={() => navigate("/menuitems")} className="home-btn">
          Order More 🍔
        </button>
      </div>
    </div>
  );
};

export default Success;
