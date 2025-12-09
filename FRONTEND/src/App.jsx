// 📂 src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MenuItems from "./pages/MenuItems";
import MenuBrochure from "./pages/MenuBrochure";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Chef from "./pages/Chef";
import ChefDetail from "./pages/ChefDetail";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cart from "./pages/Cart";
import Reservation from "./pages/Reservation"; // 🆕 5-Star Reservation Page
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { CartProvider } from "./state/CartContext";
import BasicBooking from "./pages/BasicBooking";
import StandardBooking from "./pages/StandardBooking";
import PremiumBooking from "./pages/PremiumBooking";

import "./styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // 🌓 Sync theme to body class
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // ❌ Hide footer on Login/Register
  const hideFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <CartProvider>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        {/* 🌟 Universal Header */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* 🌐 Page Routing */}
        <main className="page-container">
          <Routes>
            {/* ===== PUBLIC ROUTES ===== */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ===== PROTECTED ROUTES ===== */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/menu"
              element={
                <ProtectedRoute>
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/menuitems"
              element={
                <ProtectedRoute>
                  <MenuItems />
                </ProtectedRoute>
              }
            />
            <Route
              path="/menucard"
              element={
                <ProtectedRoute>
                  <MenuBrochure darkMode={darkMode} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shipping"
              element={
                <ProtectedRoute>
                  <Shipping />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <Payment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blogs"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blogs/:id"
              element={
                <ProtectedRoute>
                  <BlogDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chef"
              element={
                <ProtectedRoute>
                  <Chef />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chef/:id"
              element={
                <ProtectedRoute>
                  <ChefDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/faqs"
              element={
                <ProtectedRoute>
                  <Faqs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <ProtectedRoute>
                  <PrivacyPolicy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            {/* 🍽️ Reservation Page */}
            <Route
              path="/reservation"
              element={
                <ProtectedRoute>
                  <Reservation />
                </ProtectedRoute>
              }
            />

            {/* 🆕 Individual Reservation Pages */}
            <Route
              path="/basic-booking"
              element={
                <ProtectedRoute>
                  <BasicBooking />
                </ProtectedRoute>
              }
            />
            <Route
              path="/standard-booking"
              element={
                <ProtectedRoute>
                  <StandardBooking />
                </ProtectedRoute>
              }
            />
            <Route
              path="/premium-booking"
              element={
                <ProtectedRoute>
                  <PremiumBooking />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {/* ✅ Footer visible on all pages except Login/Register */}
        {!hideFooter && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
