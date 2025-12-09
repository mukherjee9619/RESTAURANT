import React from "react";

const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

const truncateText = (text, maxLength) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

const MenuCard = ({ item, index, onDelete, onUpdate }) => {
  const typeClass = item.itemType.toLowerCase() === "veg" ? "veg" : "non-veg";
  const createdDate = new Date(item.createdAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const displayName = truncateText(capitalizeWords(item.itemName), 17);
  const displayDesc = truncateText(item.itemDescription, 55);

  return (
    <div className="restaurant-page">
      <div className="card" style={{ animationDelay: `${index * 0.1}s` }}>
        <img src={item.itemImage} alt={item.itemName} />
        <div className="card-content">
          <h2 title={capitalizeWords(item.itemName)}>{displayName}</h2>
          <p title={item.itemDescription}>{displayDesc}</p>
          <div className="card-footer">
            <span className="price">₹{item.itemPrice}</span>
            <span className={`type ${typeClass}`}>{item.itemType}</span>
            <span className="created-at">{createdDate}</span>
          </div>
          <div className="action-buttons">
            <button className="btn update-btn" onClick={() => onUpdate(item._id)}>
              Update
            </button>
            <button className="btn delete-btn" onClick={() => onDelete(item._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
