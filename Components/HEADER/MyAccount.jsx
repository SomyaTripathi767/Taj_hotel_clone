import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "../Footer";
import './MyAccount.css';

const MyAccount = () => {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]); // State for bookings
  const [cardDetails, setCardDetails] = useState([]); // State for card details

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully logged out");
        navigate("/"); // Redirect to the main page after logout
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
      });
  };

  // Fetch bookings and card details data
  useEffect(() => {
    fetch("http://localhost:3001/bookings") // Fetch bookings
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Error fetching bookings: ", error));

    fetch("http://localhost:3001/CardDeatils") // Fetch card details
      .then((response) => response.json())
      .then((data) => setCardDetails(data))
      .catch((error) => console.error("Error fetching card details: ", error));
  }, []);

  return (
    <div>
      <Header />
      <div className="my-account">
        {user ? (
          <div className="account-details">
            <h2 className="Heading">My Account</h2>
            <div className="user-info">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="User"
                className="user-photo"
                width={100}
                height={100}
              />
              <div className="text-profile">
                <p><strong>Name:</strong> {user.displayName || user.email}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <button className="btn-account" onClick={handleLogout}>
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Please log in to view your account details.</p>
        )}
      </div>

    <div className="ditails">
        {/* Reserved Room Section */}
        <div className="reservation-book">
        <h2 className="Heading">Reserved Room</h2>
        {bookings.length > 0 ? (
          <div className="booking-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                <p> <strong>{booking.title}</strong>:{booking.firstName} {booking.lastName}</p>
                <p><strong>Email:</strong> {booking.email}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>GST Number:</strong> {booking.gstNumber}</p>
                <p><strong>Special Requests:</strong> {booking.specialRequests}</p>
                <p><strong>Payment Option:</strong> {booking.payOption}</p>
                <p><strong>Price:</strong> {booking.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>

      {/* Card Details Section */}
      <div className="card-details">
        <h2 className="Heading">Card Details</h2>
        {cardDetails.length > 0 ? (
          <div className="card-list">
            {cardDetails.map((card) => (
              <div key={card.id} className="card-item">
                <p><strong>Cardholder Name:</strong> {card.cardName}</p>
                <p><strong>Card Number:</strong> {card.cardNumber}</p>
                <p><strong>Expiration Date:</strong> {card.expirationDate}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No card details found.</p>
        )}
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default MyAccount;
