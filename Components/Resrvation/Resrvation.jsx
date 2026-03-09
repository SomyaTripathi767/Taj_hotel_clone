import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookNow from "../BookNow";
import Footer from "../Footer";
import "./Resrvation.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Resrvation = () => {
  const [activeContent, setActiveContent] = useState("roomRates");
  const [phone, setPhone] = useState("");
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [buttonStyle, setButtonStyle] = useState("pay-button");
  const [newBooking, setNewBooking] = useState(null); // For storing only the newly added booking
  const location = useLocation();
  const {
    image,
    heading,
    location: roomLocation,
    price = "0.00",
  } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingDetails = {
      title: e.target[0].value,
      firstName: e.target[1].value,
      lastName: e.target[2].value,
      email: e.target[3].value,
      phone: phone,
      gstNumber: e.target[4].value,
      specialRequests: e.target[5].value,
      payOption: "Pay at Hotel",
      price: price !== "Not Selected" ? price : "0.00",
    };

    try {
      const response = await fetch("http://localhost:3001/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        alert("Booking saved successfully!");
        const addedBooking = await response.json(); // Assuming your backend returns the new booking
        setNewBooking(addedBooking); // Set the newly added booking
        e.target.reset();
        setPhone("");
        setShowSecondForm(false);
        setButtonStyle("pay-button");
      } else {
        alert("Failed to save booking!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the booking.");
    }
  };

  const handlePayClick = async (e) => {
    e.preventDefault();
    const form = document.querySelector(".guest-details-form");

    const isValid = form.checkValidity();
    if (!phone) {
      alert("Please enter your phone number.");
      return;
    }
    if (!isValid) {
      alert("Please fill all required fields.");
      form.reportValidity();
      return;
    }

    const bookingDetails = {
      title: form[0].value,
      firstName: form[1].value,
      lastName: form[2].value,
      email: form[3].value,
      phone: phone,
      gstNumber: form[4].value,
      specialRequests: form[5].value,
      payOption: "Pay at Hotel",
      price: price !== "Not Selected" ? price : "0.00",
    };

    try {
      const response = await fetch("https://react-json-1.onrender.com/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        alert("Booking saved successfully!");
        const addedBooking = await response.json(); // Assuming your backend returns the new booking
        setNewBooking(addedBooking); // Set the newly added booking
        form.reset();
        setPhone("");
        setShowSecondForm(true);
        setButtonStyle("pay-button");
      } else {
        alert("Failed to save booking!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving the booking.");
    }
  };
  return (
    <div>
      <header>
        <BookNow />
      </header>

      <section id="plan-your-stay">
        <h2 className="resrvation">RESERVATION</h2>
        <div className="buttons">
          <button className="con-room active">
            ROOM 1 <span className="con-sign">✔</span>
          </button>
          <div className="line"></div>
          <button className="con-res-button">RESERVATION</button>
        </div>
      </section>

      <div className="botton-part-resrvation">
        <div className="resrvation-form">
          <h3 className="form-title">PRIMARY GUEST DETAILS</h3>
          <p className="form-subtitle">
            Please fill all relevant fields to proceed further.
          </p>

          <form className="guest-details-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <select className="form-control-title" required>
                <option value="">Title*</option>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="ms">Ms</option>
                <option value="miss">Miss</option>
                <option value="dr">Dr</option>
                <option value="prof">Prof</option>
              </select>
              <input
                type="text"
                placeholder="First Name*"
                className="name-form-input"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="name-form-input"
                required
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                placeholder="Email*"
                className="form-control-email"
                required
              />
              <div className="mobile-number">
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={setPhone}
                  placeholder="Enter your mobile number"
                  containerClass="phone-input-container"
                  inputClass="phone-input-field"
                  buttonClass="phone-input-flag"
                />
              </div>
            </div>

            <div className="form-row">
              <input
                type="text"
                placeholder="GST Number"
                className="form-control-gst"
              />
            </div>

            <div className="form-row">
              <textarea
                placeholder="Special Requests"
                maxLength={500}
                className="form-control special-request"
              ></textarea>
              <span className="char-counter">0/500</span>
            </div>

            <div className="form-row">
              <label className="checkbox-label">
                <input type="checkbox" required />I have read and agree to the{" "}
                <a href="/privacy-policy" target="_blank">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms-conditions" target="_blank">
                  Terms & Conditions
                </a>
                .
              </label>
            </div>

            <div className="form-row">
              <button
                type="button"
                className={buttonStyle} // Dynamic class name based on button style state
                onClick={handlePayClick} // Call to handle form submission and field reset
              >
                PAY AT HOTEL
              </button>
            </div>
          </form>

          {showSecondForm && (
            <div className="second-form">
              <h2>Room Booking Details</h2>
              <form onSubmit={handleSubmit} className="main-form-booking">
                <div className="IMAGE-DIV">
                  {image ? (
                    <img
                      src={image}
                      alt="Room"
                      style={{ width: "250px", height: "200px" }}
                    />
                  ) : (
                    <p>No Image Available</p>
                  )}
                </div>

                <div className="PRICE-DIV">
                  {newBooking && (
                    <div className="booking-details">
                      <p>
                        <strong className="heading1">Name:</strong>
                        {newBooking.title}.{newBooking.firstName}{" "}
                        {newBooking.lastName}
                      </p>
                      <p>
                        <strong className="heading1">Email:</strong> {newBooking.email}
                      </p>
                      <p>
                        <strong className="heading1">Phone:</strong> {newBooking.phone}
                      </p>
                      <p>
                        <strong className="heading1">GST Number:</strong>{" "}
                        {newBooking.specialRequests}
                      </p>
                    </div>
                  )}
                 <div className="sec-textvbn">
                 <p>Total To Pay: {price ? `${price}` : `0.00`}</p>
                  <div className="LOCATION-DIV">
                    <p>Location: {roomLocation || "Not Available"}</p>
                  </div>
                  <Link to={"/ConfermPayment"}>
                    <button type="submit" className="confer-button">CONFIRM</button>
                  </Link>
                 </div>
                </div>
              </form>
            </div>
          )}
        </div>

        <div className="you-stay-right-side">
          <div className="your-stay-box">
            <h2 className="stay-heading">Your Stay</h2>
            <div className="stay-details">
              <div className="room-details">
                <h6>Room 1: 1 Adult</h6>
                <p>{price !== "Not Selected" ? `Selected` : `Not Selected`}</p>
              </div>
              <hr />
              <div className="price-details">
                <div className="price">
                  <span>Price</span>
                  <span className="zero">
                    <p>{price ? `${price}` : `0.00`}</p>
                  </span>
                </div>
                <hr />

                <div className="total-amount">
                  <div className="text-room-hotel">
                    <h4>Total Amount Payable at Hotel</h4>
                    <p>{price ? `${price}` : `0.00`}</p>
                  </div>
                </div>
                <p className="tax-info">*Inclusive of all Taxes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="FOOTER">
        <Footer />
      </div>
    </div>
  );
};

export default Resrvation;
