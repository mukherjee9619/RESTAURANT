import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../state/CartContext";

const capitalizeWords = (str) =>
  str
    ?.split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

const truncateText = (text, maxLength) =>
  text?.length > maxLength ? text.slice(0, maxLength) + "…" : text;

const MenuCard = ({ item, index, showOrderButtons }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const typeClass = item.itemType?.toLowerCase() === "veg" ? "veg" : "non-veg";
  const createdDate = item.createdAt
    ? new Date(item.createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  const handleAddToCart = () => addToCart(item);

  const handleOrderNow = () => {
    addToCart(item);
    console.log("item",item);
    
    navigate("/shipping", { state: { selectedItem: item } });
  };

  return (
    <div className="restaurant-page">
      <div className="card" style={{ animationDelay: `${index * 0.1}s` }}>
        <img src={item.itemImage} alt={item.itemName} />
        <div className="card-content">
          <h2 title={item.itemName}>
            {truncateText(capitalizeWords(item.itemName), 17)}
          </h2>
          <p title={item.itemDescription}>
            {truncateText(item.itemDescription, 55)}
          </p>

          <div className="card-footer">
            <span className="price">₹{item.itemPrice}</span>
            <span className={`type ${typeClass}`}>{item.itemType}</span>
            <span className="created-at">{createdDate}</span>
          </div>

          {showOrderButtons && (
            <div className="action-buttons">
              <button className="btn add-btn" onClick={handleAddToCart}>
                🛒 Add to Cart
              </button>
              <button className="btn order-btn" onClick={handleOrderNow}>
                🍽️ Order Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
