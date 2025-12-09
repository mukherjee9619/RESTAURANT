import React from "react";
import MenuCard from "./MenuCard";

const MenuContainer = ({ items, onDelete, onUpdate }) => {
  if (!items.length) return <div className="no-items">🚫 No items found</div>;

  return (
    <div className="menu-container">
      {items.map((item, index) => (
        <MenuCard key={item._id} item={item} index={index} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default MenuContainer;
