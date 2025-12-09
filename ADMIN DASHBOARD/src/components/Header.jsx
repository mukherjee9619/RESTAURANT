import React, { useState } from "react";
import "../styles/Header.css";

const Header = ({ onFilter, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [subFilter, setSubFilter] = useState("All");

  const handleFilterChange = (newSearch = searchTerm, newCat = category, newSub = subFilter) => {
    onFilter({
      search: newSearch.trim().toLowerCase(),
      category: newCat,
      subFilter: newSub,
    });
  };

  return (
    <div className="menu-header">
      <h1>🍽️ Golden Spoon Dashboard</h1>

      <div className="header-top">
        <div className="admin-badge">👨‍💼 Admin Panel</div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by name ..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleFilterChange(e.target.value, category, subFilter);
            }}
          />
        </div>

        <div className="dropdown-container">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              handleFilterChange(searchTerm, e.target.value, subFilter);
            }}
          >
            <option value="All">All Categories</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Continental">Continental</option>
          </select>
        </div>

        <div className="dropdown-container">
          <select
            value={subFilter}
            onChange={(e) => {
              setSubFilter(e.target.value);
              handleFilterChange(searchTerm, category, e.target.value);
            }}
          >
            <option value="All">All Types</option>
            <option value="Veg">🥦 Veg</option>
            <option value="Non-Veg">🍗 Non-Veg</option>
          </select>
        </div>

        <button className="add-btn" onClick={onAdd}>
          ➕ Add Item
        </button>
      </div>
    </div>
  );
};

export default Header;
