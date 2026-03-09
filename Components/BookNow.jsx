import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import "./BookNow.css"; // Importing the CSS file
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { getAuth } from "firebase/auth";
const { RangePicker } = DatePicker;

const BookNow = () => {
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  const auth = getAuth(app);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.displayName || user.email);
        setUserPhoto(user.photoURL);
      } else {
        setIsLoggedIn(false);
        setUserName("");
        setUserPhoto("");
      }
    });
  }, [auth]);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Add a new room
  const addRoom = () => {
    if (rooms.length < 5) {
      setRooms([...rooms, { adults: 1, children: 0 }]);
    }
  };

  // Remove a specific room
  const removeRoom = (index) => {
    const updatedRooms = rooms.filter((_, roomIndex) => roomIndex !== index);
    setRooms(updatedRooms);
  };

  // Update the count of adults or children
  const updateCount = (index, type, increment) => {
    const updatedRooms = [...rooms];
    if (increment) {
      updatedRooms[index][type]++;
    } else if (updatedRooms[index][type] > 0) {
      updatedRooms[index][type]--;
    }
    setRooms(updatedRooms);
  };
  return (
    <div>
      <div className="header-book-room">
        <div className="book-header-logo">
          <Link to="/">
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/4eeaf5b2669e2f360ea72bed30fbc7cbdfb3a2a4-67x59.png"
              alt="Taj Logo"
            />
          </Link>
        </div>
        <div className="book-options">
          <select className="location-dropdown">
            <option value="Taj Mahal Palace, Mumbai">
              The Taj Mahal Palace, Mumbai
            </option>
            <option value="St. James' Court, London">
              St. James' Court, London
            </option>
            <option value="Taj Exotica Resort & Spa, Maldives">
              Taj Exotica Resort & Spa, Maldives
            </option>
          </select>
          <RangePicker
            className="date-book"
            style={{ border: "none", borderRadius: "4px" }}
            placeholder={["Start Date", "End Date"]}
            format="DD MMM YYYY"
          />
          <div className="dropdown" id="room-ic-dec-box">
            <p className="roomDropdown ">
              1 Guest - 1 Room{" "}
              <img
                onClick={toggleDropdown}
                className="icon-icon-img"
                src="https://static.thenounproject.com/png/3466617-200.png"
                alt=""
                width={25}
              />
            </p>
            {isOpen && (
              <div className="room-guest-selector">
                {rooms.map((room, index) => (
                  <div key={index} className="room">
                    <h4>
                      Room {index + 1}
                      {rooms.length > 1 && (
                        <button
                          className="remove-room-button"
                          onClick={() => removeRoom(index)}
                        >
                          ✖
                        </button>
                      )}
                    </h4>
                    <div className="room-controls">
                      <div className="counter">
                        <button
                          onClick={() => updateCount(index, "adults", false)}
                          disabled={room.adults === 1}
                        >
                          -
                        </button>
                        <span>
                          {room.adults} Adult{room.adults > 1 ? "s" : ""}
                        </span>
                        <button
                          onClick={() => updateCount(index, "adults", true)}
                        >
                          +
                        </button>
                      </div>
                      <span className="divider">|</span>
                      <div className="counter">
                        <button
                          onClick={() => updateCount(index, "children", false)}
                          disabled={room.children === 0}
                        >
                          -
                        </button>
                        <span>
                          {room.children} Child
                          {room.children !== 1 ? "ren" : ""}
                          <br />
                          <span className="child-age">(0 - 12 yrs)</span>
                        </span>
                        <button
                          onClick={() => updateCount(index, "children", true)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {rooms.length < 5 && (
                  <button className="add-room-book" onClick={addRoom}>
                    ADD MORE ROOMS
                  </button>
                )}
              </div>
            )}
          </div>

          <button className="search-button">SEARCH</button>
        </div>

        <div className="login-join">
          {!isLoggedIn ? (
            <Link to="/login" className="account me-3">
              LOGIN / JOIN
            </Link>
          ) : (
            <Link to="/myaccount" className="account me-3">
              MY ACCOUNT
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
