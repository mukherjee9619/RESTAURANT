// 📂 src/pages/Cart.jsx
import React from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import { useCart } from "../state/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/Cart.css";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const navigate = useNavigate(); // ✅ Initialize navigate hook

  const total = cart.reduce(
    (sum, item) => sum + item.itemPrice * item.quantity,
    0
  );

  // ✅ Handle checkout navigation
  const handleCheckout = () => {
    // Optional: Save cart data to localStorage before navigating
    localStorage.setItem("orderItems", JSON.stringify(cart));
    navigate("/shipping");
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">🛒 Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item._id}>
                <img src={item.itemImage} alt={item.itemName} />
                <div className="cart-info">
                  <h3>{item.itemName}</h3>
                  <p className="price">₹{item.itemPrice}</p>

                  <div className="quantity-control">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      disabled={item.quantity === 1}
                    >
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item._id)}>
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>
              Total: <span>₹{total}</span>
            </h3>
            <div className="cart-actions">
              {/* ✅ Redirects to shipping page */}
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>

              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
