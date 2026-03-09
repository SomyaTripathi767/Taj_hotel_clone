import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./RoomRatesContent.css";
import { getAuth } from "firebase/auth";
const RoomRatesContent = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedLocation = searchParams.get("location") || "defaultLocation";
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data from db.json
    fetch("https://react-json-bsbh.onrender.com/main")
      .then((response) => response.json())
      .then((data) => {
        setRoomData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
        setError("Failed to fetch room data.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Check if the user is logged in using Firebase authentication
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const normalizedSelectedLocation = selectedLocation.toLowerCase();
  const locationData = roomData.find(
    (item) => item.location.toLowerCase() === normalizedSelectedLocation
  );
  const filteredRooms = locationData ? locationData.rooms : [];

  const handleSelectClick = (room) => {
    if (isLoggedIn) {
      navigate("/reservation", {
        state: {
          image: room.image,
          heading: room.heading,
          location: room.location,
          price: room.price,
        },
      });
    } else {
      alert("Please log in to proceed with the booking.");
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <div>
      <div className="main-room-box-bookroom">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p> // Display error message
        ) : (
          <div className="room-list">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <div key={index} className="room-card">
                  <div className="imge-room-book">
                    <img
                      src={room.image || "fallback-image-url"} // Fallback image if no image is provided
                      alt={`Room in ${room.location}`}
                      className="room-image"
                    />
                  </div>
                  <div className="left-side-book-room">
                    <div className="heading-left-box">
                      <p className="heading-room">{room.heading}</p>
                      <p className="alert">
                        <i class="fa-solid fa-triangle-exclamation"></i>{" "}
                        {room.alert}
                      </p>
                    </div>

                    <div className="sec-box-left-side">
                      <div className="right-side-sec-box">
                        <p className="sec-right-head1">{room.head1}</p>
                        <div className="li-sec-right">
                          <ul className="romm-left-list">
                            <li>{room.li1}</li>
                            <li>{room.li2}</li>
                            <li>{room.li3}</li>
                          </ul>
                          <a href="#" className="LInk">
                            {room.link}
                          </a>
                        </div>
                      </div>
                      <div className="left-side-sec-box">
                        <h6 className="rate">{room.rate}</h6>
                        <h5 className="price">{room.price}</h5>
                        {/* <Link to={"/Login"} className="login-join-button">
                          {room.button}
                        </Link> */}
                        {!isLoggedIn ? (
                          <Link to="/login" className="login-join-button me-3">
                            LOGIN/JOIN
                          </Link>
                        ) : (
                          <Link to="/myaccount" className="login-join-button me-3">
                            ACCOUNT
                          </Link>
                        )}
                        <h6 className="sel-rate">{room.startrate}</h6>
                        <h5 className="price">{room.starnderparice}</h5>
                        <button
                          onClick={() => handleSelectClick(room)} // Room price navigate karega
                          className="selct-button"
                        >
                          {room.secbutton}
                        </button>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="sec-box-left-side">
                      <div className="right-side-sec-box">
                        <p className="sec-right-head1">{room.head1}</p>
                        <div className="li-sec-right">
                          <ul className="romm-left-list">
                            <li>{room.li1}</li>
                            <li>{room.li2}</li>
                            <li>{room.li3}</li>
                          </ul>
                          <a href="#" className="LInk">
                            {room.link}
                          </a>
                        </div>
                      </div>
                      <div className="left-side-sec-box">
                        <h6 className="rate">{room.rate}</h6>
                        <h5 className="price">{room.price}</h5>
                        {!isLoggedIn ? (
                          <Link to="/login" className="login-join-button me-3">
                            LOGIN/JOIN
                          </Link>
                        ) : (
                          <Link to="/myaccount" className="login-join-button me-3">
                            ACCOUNT
                          </Link>
                        )}
                        <h6 className="sel-rate">{room.startrate}</h6>
                        <h5 className="price">{room.starnderparice}</h5>
                        <button
                          onClick={() => handleSelectClick(room)}
                          className="selct-button"
                        >
                          {room.secbutton}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No rooms available for this location.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomRatesContent;
