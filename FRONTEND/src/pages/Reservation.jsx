import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Reservation.css";

const Reservation = () => {
  const navigate = useNavigate();

  return (
    <section className="reservation-section">
      <div className="reservation-header">
        <h1>🍽️ Reserve Your Table at Golden Spoon</h1>
        <p>
          Choose your luxurious dining experience — whether cozy, royal, or
          elite — and let us make your evening unforgettable.
        </p>
      </div>

      <div className="reservation-cards">
        {/* 💛 Basic - Gold Theme */}
        <div className="card-container">
          <div className="reservation-card gold">
            <div className="card-front">
              <h2>Basic</h2>
              <p className="price">₹999 / table</p>
              <p>Cozy, elegant, and affordable.</p>
            </div>
            <div className="card-back">
              <ul>
                <li>✔️ Cozy Seating for 2</li>
                <li>✔️ Welcome Drink</li>
                <li>✔️ Complimentary Dessert</li>
                <li>❌ No Live Music</li>
              </ul>
              <button
                className="reserve-btn"
                onClick={() => navigate("/basic-booking")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* 💙 Standard - Royal Blue Theme */}
        <div className="card-container">
          <div className="reservation-card royal-blue">
            <div className="card-front">
              <h2>Standard</h2>
              <p className="price">₹1,999 / table</p>
              <p>Perfect for a family or friends’ night out.</p>
            </div>
            <div className="card-back">
              <ul>
                <li>✔️ Elegant Seating for 4</li>
                <li>✔️ Premium Welcome Drink</li>
                <li>✔️ Live Music</li>
                <li>✔️ Personalized Waiter Service</li>
              </ul>
              <button
                className="reserve-btn"
                onClick={() => navigate("/standard-booking")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* ❤️ Premium - Ruby Red Theme */}
        <div className="card-container">
          <div className="reservation-card ruby-red">
            <div className="card-front">
              <h2>Premium</h2>
              <p className="price">₹3,999 / table</p>
              <p>The ultimate Golden Spoon experience.</p>
            </div>
            <div className="card-back">
              <ul>
                <li>✔️ VIP Lounge Seating</li>
                <li>✔️ Unlimited Drinks</li>
                <li>✔️ Private Live Band</li>
                <li>✔️ Chef’s Signature Menu</li>
              </ul>
              <button
                className="reserve-btn"
                onClick={() => navigate("/premium-booking")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
