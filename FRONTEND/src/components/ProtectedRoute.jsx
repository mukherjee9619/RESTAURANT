// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");

  // If user not logged in → redirect to login page
  if (isAuthenticated !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
