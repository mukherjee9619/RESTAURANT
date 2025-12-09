import React, { useState } from "react";
import "../styles/BasicBooking.css";

const BasicReservation = () => {
 
  return (
    <div className="booking-container theme-basic">
      <h1>🥂 Basic Reservation</h1>
      <p>Perfect for cozy dinners and intimate moments.</p>

      <form className="booking-form basic">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="number" placeholder="Number of Guests" required min={0}  max={2} maxLength={2}/>
        <input type="date" required />
        <input type="time" required />
        <select required>
          <option value="">Choose Meal Type</option>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>
        <textarea placeholder="Special Requests" rows="3"></textarea>
        <button type="submit">Confirm Basic Booking</button>
      </form>
    </div>
  );
};

export default BasicReservation;
