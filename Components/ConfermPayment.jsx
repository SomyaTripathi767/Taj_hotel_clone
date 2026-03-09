import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./ConfermPayment.css";
import Footer from "./Footer";
import axios from "axios"; // Install axios for API requests (`npm install axios`)
import BookNow from "./BookNow";

const ConfermPayment = () => {
  const location = useLocation();
  const { price, location: roomLocation, image, heading } = location.state || {};
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handlePayment = async () => {
    if (!cardName || !cardNumber || !expirationDate) {
      alert("Please fill in all card details.");
      return;
    }

    const paymentData = {
      cardName,
      cardNumber,
      expirationDate,
      price,
      roomLocation,
      image,
      heading,
    };

    try {
      // Save data to JSON Server
      await axios.post("https://react-json-1.onrender.com/CardDeatils", paymentData);
      setPaymentConfirmed(true);
    } catch (error) {
      console.error("Error saving payment data:", error);
      alert("Failed to confirm payment. Please try again.");
    }
  };

  return (
    <div>
      <BookNow/>
      <header>
        <h2 className="confirm-payment-header">CONFIRM PAYMENT</h2>
      </header>

      <section className="payment-section">
        <div className="payment-details">
          <h2>Booking Details</h2>
          <div className="room-info">
            {image ? (
              <img src={image} alt="Room" style={{ width: "250px", height: "200px" }} />
            ) : (
              <p>No Image Available</p>
            )}
            <div className="room-description">
              <h4>{heading}</h4>
              <p><strong>Location:</strong> {roomLocation}</p>
              <p><strong>Price:</strong> {price ? price : "0.00"}</p>
            </div>
          </div>

          {!paymentConfirmed ? (
            <div className="payment-form">
              <form>
                <div>
                  <label htmlFor="cardName">Name on Card:</label>
                  <input
                    type="text"
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="expirationDate">Expiration Date (MM/YY):</label>
                  <input
                    type="text"
                    id="expirationDate"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    required
                  />
                </div>
                <button type="button" className="confirm-payment" onClick={handlePayment}>
                  Confirm Payment
                </button>
              </form>
            </div>
          ) : (
            <div className="payment-success">
              <h4>Payment Successful!</h4>
              <p>Your booking has been confirmed. Thank you for your reservation!</p>
             <div className="button-two">
             <Link to="/">
                <button className="back-to-home-btn">Back to Home</button>
              </Link>
              <Link to="/myaccount">
                <button className="back-to-home-btn-active">check active stuts</button>
              </Link>
             </div>
            </div>
          )}
        </div>
      </section><br />

      <Footer />
    </div>
  );
};

export default ConfermPayment;
