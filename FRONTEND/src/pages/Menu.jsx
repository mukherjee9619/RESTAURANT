import React, { useState, useEffect } from "react";
import MenuContainer from "../components/MenuContainer";
import { ColorRing } from 'react-loader-spinner'
import "../styles/Menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://127.0.0.1:8081/menu");
        const data = await res.json();
        setMenuItems(data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className={`menu-page ${darkMode ? "dark" : "light"}`}>
     
      {loading ? (
        <div className="loader-container">
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
          <p className="loader-text">🍳 Cooking up delicious dishes...</p>
        </div>
      ) : (
        <MenuContainer
          items={menuItems}
          showOrderButtons={true}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default Menu;
