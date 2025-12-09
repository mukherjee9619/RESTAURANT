import React, { useState } from "react";
import "../styles/FormDetails.css";

const FormDetails = () => {
  const [formData, setFormData] = useState({
    itemCategory: "",
    itemType: "",
    itemName: "",
    itemPrice: "",
    itemDescription: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");

  const categoryTypes = {
    Indian: ["Veg", "Non-Veg"],
    Chinese: ["Veg", "Non-Veg"],
    Continental: ["Veg", "Non-Veg"],
  };

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
    if (!imageFile) return alert("Please select an image!");

    const itemImage = await toBase64(imageFile);

   try {
  const res = await fetch("http://127.0.0.1:8081/add-dish", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...formData, itemImage }),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = {}; // fallback if response isn't valid JSON
  }

  if (res.ok) {
    setFormData({
      itemCategory: "",
      itemType: "",
      itemName: "",
      itemPrice: "",
      itemDescription: "",
    });
    setImageFile(null);
    setFileName("No file chosen");
    // if (typeof onAddSuccess === "function") onAddSuccess(data);
    alert("✅ Item added successfully!");
  } else {
    alert("❌ Failed to add: " + (data.message || "Server error"));
  }
} catch (err) {
  console.error(err);
  alert("⚠️ Network error. Try again!");
}

  };

  return (
    <div className="container">
      <h1>🍷 Restaurant CMS Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemCategory">Food Category</label>
        <select id="itemCategory" value={formData.itemCategory} onChange={handleChange} required>
          <option value="">Select Category</option>
          {Object.keys(categoryTypes).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
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
            categoryTypes[formData.itemCategory].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
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

        <button type="submit">ADD ITEM</button>
      </form>
    </div>
  );
};

export default FormDetails;
