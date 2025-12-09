import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // ✅ hook for programmatic navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email: email.trim(), password: password.trim() };

    try {
      const res = await fetch("http://127.0.0.1:8081/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert(data.message);
        sessionStorage.setItem("isAuthenticated", "true");
        sessionStorage.setItem("userEmail", data.email);

        navigate("/"); // ✅ navigate to dashboard/home
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("❌ Server not responding. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="login-body">
      <div className="overlay"></div>
      <div className="container">
        <div className="left">
          <h2>🔐 Login to Golden Spoon Restaurant</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login Now</button>
          </form>

          <div className="register-link">
            <p>
              Don’t have an account?{" "}
              <Link to="/register" className="link-text">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
