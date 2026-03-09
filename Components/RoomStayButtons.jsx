import React, { useState } from 'react';
import './RoomStayButtons.css'; 

function RoomStayButtons({ onButtonClick }) {
  const [activeButton, setActiveButton] = useState('roomRates');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onButtonClick(buttonName);
  };

  return (
    <div className="Room-Stay-button">
      <div className="switch-button">
        <button
          className={`button ${activeButton === 'roomRates' ? 'active' : ''}`}
          onClick={() => handleButtonClick('roomRates')}
        >
          ROOM RATES
        </button>
        <button
          className={`button ${activeButton === 'otherPackages' ? 'active' : ''}`}
          onClick={() => handleButtonClick('otherPackages')}
        >
          MEMBER  PACKAGES
        </button>
      </div>
      <div className="room-search">
        <p>Rooms for {}</p>
      </div>
    </div>
  );
}

export default RoomStayButtons;
