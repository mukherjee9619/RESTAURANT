import React from "react";
import "../styles/PremiumBooking.css";

const PremiumBooking = () => {
  return (
    <div className=" premium-theme">
      <h1>Premium Reservation</h1>
      <p>
        Indulge in luxury dining — private suite, live music, champagne service, and a 5-course meal.
      </p>

      <form className="booking-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="number" placeholder="Number of Guests" required />
        <input type="date" required />
        <input type="time" required />
        <select required>
          <option value="">Select Wine Preference</option>
          <option>Red Wine</option>
          <option>White Wine</option>
          <option>Champagne</option>
        </select>
        <textarea placeholder="Special Requests" rows="3"></textarea>
        <button type="submit">Confirm Premium Booking</button>
      </form>
    </div>
  );
};

export default PremiumBooking;
