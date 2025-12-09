// 📂 src/pages/Shipping.jsx
import React, { useEffect, useState } from "react";
import "../styles/Shipping.css";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    note: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const userEmail =
      localStorage.getItem("userEmail") ||
      `guest_${Date.now()}@example.com`;
    const userName =
      localStorage.getItem("userName") ||
      `Guest_${new Date().toISOString().replace(/[-:.TZ]/g, "")}`;

    setFormData((prev) => ({
      ...prev,
      email: userEmail,
      fullName: userName,
    }));
  }, []);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("orderItems")) || [];
    setOrderItems(storedItems);
    setLoading(false);
  }, []);

  useEffect(() => {
    const totalAmount = orderItems.reduce(
      (acc, item) => acc + item.itemPrice * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, [orderItems]);

  const handleQtyChange = (itemId, action) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item._id === itemId
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setOrderItems((prev) => prev.filter((item) => item._id !== itemId));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = async () => {
    if (orderItems.length === 0) {
      alert("⚠️ Your cart is empty!");
      return;
    }

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.phone
    ) {
      alert("⚠️ Please fill all required fields!");
      return;
    }

    const orderData = {
      userEmail: formData.email,
      userName: formData.fullName,
      address: formData.address,
      city: formData.city,
      phone: formData.phone,
      note: formData.note,
      totalAmount: total,
      paymentStatus: "Pending",
      items: orderItems.map((i) => ({
        itemId: i._id,
        itemName: i.itemName,
        itemImage: i.itemImage,
        itemPrice: i.itemPrice,
        quantity: i.quantity,
      })),
      createdAt: new Date().toISOString(),
    };

    // ✅ Navigate to payment page with order data
    navigate("/payment", { state: { orderData } });
  };

  const handleAddMore = () => navigate("/menu");

  if (loading) return <p className="loading">Loading your cart...</p>;

  return (
    <div className="shipping-container">
      <div className="shipping-left">
        <h2>🚚 Delivery Information</h2>
        <form className="shipping-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter delivery address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter contact number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Special Note (Optional)</label>
            <textarea
              name="note"
              placeholder="Any note for delivery..."
              value={formData.note}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="button"
            className="confirm-btn"
            onClick={handleConfirmOrder}
          >
            ✅ Confirm & Proceed to Payment
          </button>

          <button type="button" className="add-more-btn" onClick={handleAddMore}>
            ➕ Add More Items
          </button>
        </form>
      </div>

      <div className="shipping-right">
        <h2>🍽️ Your Order Summary</h2>
        {orderItems.length === 0 ? (
          <p className="empty-order">Your cart is empty 🛒</p>
        ) : (
          <>
            <div className="order-list">
              {orderItems.map((item) => (
                <div className="order-item" key={item._id}>
                  <img src={item.itemImage} alt={item.itemName} />
                  <div className="order-details">
                    <h4>{item.itemName}</h4>
                    <p>
                      ₹{(item.itemPrice * item.quantity).toFixed(2)}{" "}
                      <span className="unit">(₹{item.itemPrice} each)</span>
                    </p>
                    <div className="qty-control">
                      <button
                        disabled={item.quantity === 1}
                        onClick={() => handleQtyChange(item._id, "decrease")}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQtyChange(item._id, "increase")}
                      >
                        <FaPlus />
                      </button>
                      <button
                        className="delete-btn"
                        title="Remove item"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-total">
              <h3>
                Total: <span>₹{total.toFixed(2)}</span>
              </h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Shipping;
