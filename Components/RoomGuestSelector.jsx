
import React, { useState } from "react";
import "./RoomGuestSelector.css";

const RoomGuestSelector = () => {
  const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown state

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
      <div className="dropdown">
      <button className="titledropdownRoom" onClick={toggleDropdown}>
     1 Guest -- 1 Room
      </button>
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
                  <button onClick={() => updateCount(index, "adults", true)}>
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
                    {room.children} Child{room.children !== 1 ? "ren" : ""}
                    <br />
                    <span className="child-age">(0 - 12 yrs)</span>
                  </span>
                  <button onClick={() => updateCount(index, "children", true)}>
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
  </div>
  );
};

export default RoomGuestSelector;
