import React, { useState } from "react";
import "./PlanYourStay.css";
import Footer from "./Footer";
import RoomStayButtons from "./RoomStayButtons";
import RoomRatesContent from "./RoomRatesContent";
import OtherPackagesContent from "./OtherPackagesContent";
import BookNow from "./BookNow";
function PlanYourStay() {
  const [activeContent, setActiveContent] = useState("roomRates");

  const handleButtonClick = (buttonName) => {
    setActiveContent(buttonName);
  };
  return (
    <div>
      <header>
        <BookNow />
      </header>

      <section id="plan-your-stay">
        <h2>Plan Your Stay</h2>
        <div className="buttons">
          <button className="select-room">Select Room</button>
          <button className="reservation">Reservation</button>
        </div>
      </section>

      <div className="Room-Stay-button"></div>
      <RoomStayButtons onButtonClick={handleButtonClick} />

      <div className="main-Room-stay-div">
        <div className="ROOMS">
          {activeContent === "roomRates" && <RoomRatesContent />}
          {activeContent === "otherPackages" && <OtherPackagesContent />}
        </div>

        <div className="YOUR-STAY">
          <div className="your-stay-box">
            <h2 className="stay-heading"> Your Stay</h2>
            <div className="stay-details">
              <div className="room-details">
                <h6>Room 1: 1 Adult</h6>
                <p>Not selected</p>
              </div>
              <hr />
              <div className="price-details">
                <div className="price">
                  <span>Price</span>
                  <span className="zero">£0.00</span>
                </div>
                <hr />
                <div className="total-amount">
                  <div className="text-room-hotel">
                    <h4>Total Amount Payable at Hotel</h4>
                    <p>£0.00</p>
                  </div>
                </div>
                <p className="tax-info">*Inclusive of all Taxes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default PlanYourStay;
