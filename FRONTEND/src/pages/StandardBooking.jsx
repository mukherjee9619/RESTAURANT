import React from "react";
import "../styles/StandardBooking.css";

const StandardBooking = () => {
  return (
    <div className="booking-container">
      <h1>Standard Reservation</h1>
      <p>Enjoy a premium 3-course meal and reserved seating for your special moments.</p>

      <form className="booking-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="number" placeholder="Number of Guests" required min={0}  max={4} maxLength={4}/>
        <input type="date" required />
        <input type="time" required />
        <select required>
          <option value="">Choose Meal Type</option>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>
        <textarea placeholder="Special Requests" rows="3"></textarea>
        <button type="submit">Confirm Standard Booking</button>
      </form>
    </div>
  );
};

export default StandardBooking;
