import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [user, setUser] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });

   const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:8081/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert(data.message);
        // ✅ Optional: Redirect to login after success
        navigate("/login");
      } else if (res.status === 409) {
        alert("⚠️ User already exists. Please login instead.");
      } else {
        alert("❌ Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("⚠️ Server not responding. Please try again later.");
    }
  };

  return (
    <div className="register-page">
      <div className="overlay"></div>
      <div className="register-container">
        <div className="left">
          <h2>🍽️ Register to Golden Spoon Restaurant</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              value={user.fullname}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={user.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              required
            />

            <button type="submit">Register Now</button>
          </form>

          {/* 👇 Login link below the form */}
          <div className="login-link">
            Already have an account?{" "}
            <Link to="/login" className="login-text">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
