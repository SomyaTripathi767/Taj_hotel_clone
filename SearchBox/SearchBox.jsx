import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./SearchBox.css";

const SearchBox = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const navigate = useNavigate();

  // Mapping hotels to their respective locations
  const hotels = {
    "The Taj Mahal Palace, Mumbai": "Mumbai",
    "Taj Fort Aguada Resort & Spa, Goa": "Goa",
    "Taj Palace, New Delhi": "New Delhi",
    "Taj Lake Palace, Udaipur": "Udaipur",
  };

  const locations = [
    "Mumbai",
    "Goa",
    "New Delhi",
    "Taj Hotel",
    "London",
    "Udaipur",
    "Dubai",
    "Jaipur",
    "Hyderabad",
    "Chennai",
    "New York",
  ];

  useEffect(() => {
    if (transcript) {
      setSearchTerm(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (searchTerm) {
      let filteredSuggestions = locations.filter((location) =>
        location.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Custom sorting to show "Goa" at the top
      filteredSuggestions = filteredSuggestions.sort((a, b) => {
        if (a.toLowerCase() === "goa") return -1;
        if (b.toLowerCase() === "goa") return 1;
        return a.localeCompare(b);
      });

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleVoiceSearch = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    SpeechRecognition.startListening({ continuous: false, language: "en-US" });
    setTimeout(() => {
      SpeechRecognition.stopListening();
    }, 5000);
  };

  const handleTextSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      navigate(`/rooms/${suggestions[0].toLowerCase()}`);
    } else if (e.key === "Enter") {
      navigate(`/rooms/${searchTerm.toLowerCase()}`);
    }
  };

  const handleSuggestionClick = (location) => {
    setSearchTerm(location);
    navigate(`/rooms/${location.toLowerCase()}`);
  };

  const handleHotelClick = (hotelName) => {
    const location = hotels[hotelName];
    if (location) {
      navigate(`/rooms/${location.toLowerCase()}`);
    }
  };

  const handleReset = () => {
    resetTranscript();
    setSearchTerm("");
  };

  return (
    <div className="search-box-container">
      <div className="search-box-inputs">
        <input
          type="text"
          value={searchTerm}
          onChange={handleTextSearch}
          onKeyDown={handleKeyPress}
          placeholder="Search for hotels or locations..."
          className="search-box-input"
        />
        <button
          onClick={handleVoiceSearch}
          className={`search-box-button ${listening ? "listening" : ""}`}
        >
          {/* <i className="fa-solid fa-microphone"></i> */}🎙️
        </button>
        <button onClick={handleReset} className="search-box-button reset cencle">
          {/* <i className="fa-solid fa-xmark"></i> */}❌
        </button>

        {/* Close button */}
        <button onClick={onClose} className="search-box-button close">
          Close
        </button>
      </div>
      <hr className="gap" />
      {suggestions.length > 0 && (
        <div className="search-box-suggestions">
          {suggestions.map((location, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(location)}
              className="suggestion-item"
            >
              {location}
            </div>
          ))}
        </div>
      )}
      <div className="suggestion-div">
        <h4>HOTELS</h4>
        <div className="location-tegas">
          <p>POPULAR HOTELS</p>
          {Object.keys(hotels).map((hotelName, index) => (
            <h5
              key={index}
              onClick={() => handleHotelClick(hotelName)}
              className="hotel-item"
            >
              {hotelName}
            </h5>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
