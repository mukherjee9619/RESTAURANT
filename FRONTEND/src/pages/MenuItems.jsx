import React, { useEffect, useState } from "react";
import MenuContainer from "../components/MenuContainer";

const MenuItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8081/menu");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // if (loading) return <p className="loading-text">🍳 Loading menu items...</p>;

  return (
    <div className="menu-items-page">
      <MenuContainer items={items} showOrderButtons />
    </div>
  );
};

export default MenuItems;
