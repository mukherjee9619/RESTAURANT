import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/UpdateDish.css";

const UpdateDish = ({ onUpdateSuccess }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    itemCategory: "",
    itemType: "",
    itemName: "",
    itemPrice: "",
    itemDescription: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");

  const categoryTypes = {
    Indian: ["Veg", "Non-Veg"],
    Chinese: ["Veg", "Non-Veg"],
    Continental: ["Veg", "Non-Veg"],
  };

  useEffect(() => {
    const loadItem = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8081/menu/${id}`);
        const data = await res.json();
        setFormData({
          itemCategory: data.itemCategory,
          itemType: data.itemType,
          itemName: data.itemName,
          itemPrice: data.itemPrice,
          itemDescription: data.itemDescription,
        });
        setCurrentImage(data.itemImage);
        setFileName("(Keep existing image or choose new one)");
      } catch (err) {
        console.error(err);
        alert("⚠️ Failed to load item!");
        navigate("/dashboard");
      }
    };
    loadItem();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    } else {
      setImageFile(null);
      setFileName("No file chosen");
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageBase64 = currentImage;
    if (imageFile) imageBase64 = await toBase64(imageFile);

    try {
      const res = await fetch(`http://127.0.0.1:8081/menu/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, itemImage: imageBase64 }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Item updated successfully!");
        onUpdateSuccess(data);
        navigate("/dashboard");
      } else alert("❌ Failed to update: " + (data.message || "Server error"));
    } catch (err) {
      console.error(err);
      alert("⚠️ Network error!");
    }
  };

  return (
    <div className="container">
      <h1>🍷 Update Item</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemCategory">Category</label>
        <select id="itemCategory" value={formData.itemCategory} onChange={handleChange} required>
          <option value="">Select Category</option>
          {Object.keys(categoryTypes).map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>

        <label htmlFor="itemType">Item Type</label>
        <select
          id="itemType"
          value={formData.itemType}
          onChange={handleChange}
          disabled={!formData.itemCategory}
          required
        >
          <option value="">Select Type</option>
          {formData.itemCategory &&
            categoryTypes[formData.itemCategory].map((type) => <option key={type} value={type}>{type}</option>)}
        </select>

        <label htmlFor="itemName">Item Name</label>
        <input type="text" id="itemName" value={formData.itemName} onChange={handleChange} required />

        <label htmlFor="itemPrice">Item Price (₹)</label>
        <input type="number" id="itemPrice" value={formData.itemPrice} onChange={handleChange} required />

        <label htmlFor="itemDescription">Item Description</label>
        <textarea id="itemDescription" value={formData.itemDescription} onChange={handleChange} required />

        <label>Item Image</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <span>{fileName}</span>

        <button type="submit">UPDATE ITEM</button>
      </form>
    </div>
  );
};

export default UpdateDish;
