// 📂 src/pages/MenuContainer.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../state/CartContext";
import "../styles/MenuContainer.css";

const MenuContainer = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8081/menu");
        if (!response.ok) throw new Error("Failed to fetch menu items");
        const data = await response.json();

        const processed = data.map((item, index) => ({
          ...item,
          _id: item._id || `temp-${index}`,
        }));

        setMenuItems(processed);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(
          "Unable to load menu. Please start your backend server or check connection."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchMenuItems();
  }, []);

  const capitalizeWords = (str) =>
    str
      ?.split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");

  const truncateText = (text, maxLength) =>
    text?.length > maxLength ? text.slice(0, maxLength) + "…" : text;

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${capitalizeWords(item.itemName)} added to cart 🛒`);
  };

  const handleOrderNow = async (item) => {
    try {
      const response = await fetch("http://127.0.0.1:8081/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: item._id,
          itemName: item.itemName,
          itemPrice: item.itemPrice,
          itemImage: item.itemImage,
          quantity: 1,
          status: "Pending",
        }),
      });

      if (!response.ok) throw new Error("Failed to save order to backend");
      localStorage.setItem("orderItem", JSON.stringify([item]));
      navigate("/shipping");
    } catch (error) {
      console.error("❌ Error saving order:", error);
      alert("Something went wrong while saving your order!");
    }
  };

  if (error)
    return (
      <p className="error">
        ❌ {error} <br /> Please refresh or check your API connection.
      </p>
    );

  return (
    <div className="menu-container">
      <h2 className="menu-heading">Our Signature Dishes</h2>
      {loading ? (
        <p className="loading">Loading menu items...</p>
      ) : (
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item._id} className="menu-card">
              <div className="menu-image-wrapper">
                <img
                  src={item.itemImage}
                  alt={item.itemName}
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                />
                <div className="menu-price-tag">₹{item.itemPrice}</div>
              </div>

              <div className="menu-details">
                <h3>{capitalizeWords(truncateText(item.itemName, 17))}</h3>
                <p>{truncateText(item.itemDescription, 55)}</p>

                <div className="menu-tags">
                  <span
                    className={
                      item.itemType === "Veg" ? "tag veg" : "tag nonveg"
                    }
                  >
                    {item.itemType}
                  </span>
                  <span className="tag category">{item.itemCategory}</span>
                </div>

                <div className="menu-actions">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn add"
                  >
                    🛒 Add
                  </button>
                  <button
                    onClick={() => handleOrderNow(item)}
                    className="btn order"
                  >
                    🍽️ Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
