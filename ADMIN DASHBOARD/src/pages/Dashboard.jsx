import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MenuContainer from "../components/MenuContainer";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    subFilter: "All",
  });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch menu items from backend
  useEffect(() => {
    fetchMenu();
  }, []);

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

  // Handle filtering from Header
  const handleFilter = ({ search, category, subFilter }) => {
    setFilters({ search, category, subFilter });
  };

  // Delete item
  const handleDelete = async (id) => {
    if (!window.confirm("🗑️ Are you sure you want to delete this dish?")) return;

    try {
      const res = await fetch(`http://127.0.0.1:8081/menu/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(data.message || "Deleted successfully!");
      fetchMenu();
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  // Update item
  const handleUpdate = (id) => navigate(`/update/${id}`);

  // Filter menu items
  const filteredItems = menuItems
    .filter((item) =>
      filters.category === "All" ? true : item.itemCategory === filters.category
    )
    .filter((item) =>
      filters.subFilter === "All" ? true : item.itemType === filters.subFilter
    )
    .filter((item) =>
      item.itemName.toLowerCase().includes(filters.search.toLowerCase())
    );

  return (
    <div className="dashboard">
      <Header onFilter={handleFilter} onAdd={() => navigate("/add-item")} />

      {loading ? (
        <div className="loading-text">⏳ Loading menu items...</div>
      ) : filteredItems.length > 0 ? (
        <MenuContainer
          items={filteredItems}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ) : (
        <div className="no-item-toast">❌ NO ITEM IS MATCHED HERE</div>
      )}
    </div>
  );
};

export default Dashboard;
