import React from "react";
import { useCart } from "../state/CartContext";
import "./../styles/CartItem.css";

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name}/>
      <div>
        <h4>{item.name}</h4>
        <p>Qty: {item.quantity}</p>
        <p>Price: ₹{item.price * item.quantity}</p>
      </div>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
