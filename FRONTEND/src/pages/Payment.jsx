// 📂 src/pages/Payment.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Payment.css";

const paymentMethods = [
  { name: "Razorpay", logo: "/payments/razorpay.png" },
  { name: "PhonePe", logo: "/payments/phonepe.png" },
  { name: "Google Pay", logo: "/payments/gpay.png" },
  { name: "Paytm", logo: "/payments/paytm.png" },
  { name: "BHIM UPI", logo: "/payments/upi.png" },
  { name: "Debit Card", logo: "/payments/dcard.png" },
  { name: "Credit Card", logo: "/payments/ccard.png" },
  { name: "Net Banking", logo: "/payments/bank.png" },
   { name: "Cash on Delivery", logo: "/payments/cod.png" },
];

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const orderData = state?.orderData;

  const [paymentType, setPaymentType] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmPayment = async () => {
    if (!paymentType) {
      alert("⚠️ Please select a payment method!");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch("http://127.0.0.1:8081/payment-type", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...orderData,
          paymentType,
          paymentStatus: "Completed",
        }),
      });

      if (!response.ok) throw new Error("Payment failed!");

      alert(`✅ Payment successful via ${paymentType}`);
      navigate("/success");
    } catch (err) {
      console.error("❌ Payment Error:", err);
      alert("⚠️ Payment failed! Try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!orderData) return <p>No order data found!</p>;

  return (
    <div className="payment-container">
      <div className="payment-left">
        <h2>💳 Choose Payment Method</h2>

        <div className="payment-options">
          {paymentMethods.map((method) => (
            <label
              key={method.name}
              className={`payment-option-card ${
                paymentType === method.name ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="paymentType"
                value={method.name}
                checked={paymentType === method.name}
                onChange={(e) => setPaymentType(e.target.value)}
              />
              <img src={method.logo} alt={method.name} />
              <span>{method.name}</span>
            </label>
          ))}
        </div>

        <button
          className="pay-btn"
          onClick={handleConfirmPayment}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "💰 Pay & Confirm Order"}
        </button>
      </div>

      <div className="payment-right">
        <h2>🧾 Order Summary</h2>
        <p>
          <b>Name:</b> {orderData.userName}
        </p>
        <p>
          <b>Email:</b> {orderData.userEmail}
        </p>
        <p>
          <b>Address:</b> {orderData.address}, {orderData.city}
        </p>
        <p>
          <b>Phone:</b> {orderData.phone}
        </p>

        <h3>Items:</h3>
        {orderData.items.map((item, i) => (
          <div key={i} className="summary-item">
            <img src={item.itemImage} alt={item.itemName} />
            <p>
              {item.itemName} × {item.quantity} = ₹
              {item.itemPrice * item.quantity}
            </p>
          </div>
        ))}

        <h3 className="total">
          Total: ₹{orderData.totalAmount.toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default Payment;
