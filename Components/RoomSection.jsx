import React, { useEffect, useRef, useState } from "react";
import "./RoomSection.css";
import { Link } from "react-router-dom";

const RoomSection = ({ filterTerm }) => {
  const roomimge = [
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/23/94/aa/st-james-court-a-taj.jpg",
      title: "ST. JAMES' COURT, A TAJ HOTEL",
      text: "Immerse in London's history and style at St. James' Court, a Taj Hotel, offering a blend of Victorian grandeur and contemporary luxury...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'TAJ HOTEL',
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/The_Pierre_Rotunda_2018.jpg/330px-The_Pierre_Rotunda_2018.jpg",
      title: "THE PIERRE, A TAJ HOTEL, NEW YORK",
      text: "Experience timeless elegance at The Pierre, where Taj's hospitality meets New York's luxury, offering sophistication and classic comfort...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'NEW YORK',

    },
    {
      img: "https://www.cvent.com/venues/_next/image?url=https%3A%2F%2Fimages.cvent.com%2FCSN%2Fd79f10e1-3b76-4d31-b1de-7db32cd83c42%2Fimages%2F9e1f8afe0fce4cbf9347d8b16f8db255_LARGE!_!60e381052c8d25e8dd3025bccd87b146.jpg&w=3840&q=80",
      title: "Taj Mahal, New Delhi",
      text: "Indulge in the timeless luxury of Taj Mahal, New Delhi, where refined comforts and impeccable service meet, creating an exquisite ...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'New Delhi',

    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Sawai_mansingh_palace%2C_jaipur.jpg",
      title: "Sawai Man Mahal, Jaipur",
      text: "Immerse in the living history of Sawai Man Mahal, a Taj Palace, Jaipur, where originality, pageantry, and authenticity invite you ...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Jaipur',

    },
    {
      img: "https://images.saymedia-content.com/.image/t_share/MjEzMzQ2OTE4NTgxOTM4MDEz/how-jamshedji-tata-built-the-taj-mahal-hotel-in-mumbai.jpg",
      title: "Taj Mahal Tower, Mumbai",
      text: "Discover a tropical haven in Goa, where this beachfront resort blends Goan-Portuguese architecture with lush gardens, serene spas...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Mumbai',

    },
    {
      img: "https://www.eternalweddingz.in/storage/venue_images/d25ITm7mNB3Tei1EnlQgfbR0lZPKWtf4LxOxdzRM.webp",
      title: "Taj Santacruz, Mumbai",
      text: "Step into a world of opulence in Mumbai, where spacious rooms command mesmerizing runway views and Art Deco meets a gourm...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Mumbai',

    },
    {
      img: "https://www.naturesafariindia.com/wp-content/uploads/2024/01/Taj-Holiday-9.jpg",
      title: "Taj Holiday Village Resort & Spa, Goa",
      text: "Discover a tropical haven in Goa, where this beachfront resort blends Goan-Portuguese architecture with lush gardens, serene spas...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Goa',

    },
    {
      img: "https://images.trvl-media.com/lodging/1000000/470000/465100/465005/4f598f44.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      title: "Taj Palace, New Delhi",
      text: "Experience contemporary elegance at Taj Palace, New Delhi, where modern comforts, enthralling dining, and sheer luxury welcome you...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'New Delhi',

    },
    {
      img: "https://static.prod.r53.tablethotels.com/media/hotels/slideshow_images_staged/large/1284134.jpg",
      title: "Taj 51 Buckingham Gate Suites & Residences, London",
      text: "Discover a tropical haven in Goa, where this beachfront resort blends Goan-Portuguese architecture with lush gardens, serene spas...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'London',

    },
    {
      img: "https://grabamile.boardingarea.com/wp-content/uploads/2018/01/TajLakePalaceUDR106.jpg",
      title: "Taj Lake Palace, Udaipur",
      text: "Float into a dream on Udaipur's Lake Pichola, where this majestic palace-turned-hotel offers surreal views, royal treatment, and a...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Udaipur',

    },

    {
      img: "https://images.jdmagicbox.com/comp/jaipur/y1/0141px141.x141.180408062834.e9y1/catalogue/taj-hotels-jaipur-hotels-mis1e.jpg",
      title: "Taj Amer, Jaipur",
      text: "Unwind in regal surroundings at Taj Amer, Jaipur, a palatial retreat offering stunning views, heritage charm, and a taste of Rajas...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Jaipur',

    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d0/50/73/pool-and-jacuzzi.jpg?w=700&h=-1&s=1",
      title: "Taj Krishna, Hyderabad",
      text: "Explore luxury and elegance at Taj Krishna, where impeccable service, sumptuous dining, and opulent accommodations defi...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Hyderabad',

    },
    {
      img: "https://cdn.kiwicollection.com/media/property/PR241059/xl/241059-01-Night%20-6--at%20Taj%20Exotica%20The%20Palm.jpg?cb=1742343338",
      title: "Taj Exotica Resort & Spa, The Palm, Dubai",
      text: "Surrender to luxury on The Palm at Taj Exotica, where Arabian elegance, pristine beaches, and indulgent moments define your Dubai ...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Dubai',

    },
    {
      img: "https://photos.hotelbeds.com/giata/bigger/68/680746/680746a_hb_a_001.jpg",
      title: "Taj Jumeirah Lakes Towers, Dubai",
      text: "Indulge in modern elegance at Taj Jumeirah Lakes Towers, Dubai, offering luxury, leisure, and picturesque views in one of the city...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Dubai',

    },
    {
      img: "https://www.corinthiantravel.co.uk/app/uploads/2024/03/Taj-Connemara-Chennai-Tamil-Nadu-India.jpg",
      title: "Taj Connemara, Chennai",
      text: "Delve into Chennai's only heritage hotel, where colonial charm meets modern luxury, offering a tranquil oasis amidst vibrant city ...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Chennai',

    },
    {
      img: "https://cdn.spalba.com/common/1624875999874-blob",
      title: "Taj Exotica Resort & Spa, Goa",
      text: "Discover a tropical haven in Goa, where this beachfront resort blends Goan-Portuguese architecture with lush gardens, serene spas,...",
      button: "BOOK NOW",
      more: "MORE",
      location: 'Goa',

    },
  ];

  const filteredRooms = roomimge.filter((room) => {
    return (
      (room.title &&
        room.title.toLowerCase().includes(filterTerm.toLowerCase())) ||
      (room.location &&
        room.location.toLowerCase().includes(filterTerm.toLowerCase()))
    );
  });

  return (
    <div className="main-room-section">
      <div className="room-container">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <div className="room-box" key={index}>
              <img className="room-picture" src={room.img} alt={room.title} />
              <div className="text-room">
                <h5>{room.title}</h5>
                <p className="room-small-text">{room.text}</p>
                <div className="button-container">
                  <Link
                    to={`/BookNow?location=${room.location}`}
                    className="book-now"
                  >
                    {room.button}
                  </Link>

                  <a href="#" className="more-link">
                    {room.more} <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-rooms-message">
            No rooms available for this location.
          </p>
        )}
      </div>
    </div>
  );
};

const SearchComponent = ({ items, setFilterTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isListVisible, setIsListVisible] = useState(true);
  const listRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setFilterTerm(e.target.value);
    setIsListVisible(true);
  };

  const handleItemClick = (item) => {
    setSearchTerm(item);
    setFilterTerm(item);
    setIsListVisible(false);
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (e) => {
    if (listRef.current && !listRef.current.contains(e.target)) {
      setIsListVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div style={styles.section}>
      <div style={styles.inputContainer}>
        <span style={styles.icon}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={styles.searchicon}
          ></i>
        </span>
        <input
          type="text"
          placeholder="Destination / City"
          value={searchTerm}
          onChange={handleSearchChange}
          style={styles.input}
        />
      </div>
      {isListVisible && searchTerm && (
        <ul ref={listRef} style={styles.list}>
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                style={styles.listItem}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li style={styles.noResults}>No items found</li>
          )}
        </ul>
      )}
    </div>
  );
};

const SelectComponent = ({ items, setFilterTerm }) => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelectChange = (e) => {
    setSelectedItem(e.target.value);
    setFilterTerm(e.target.value);
  };

  return (
    <div style={styles.section}>
      <div style={styles.selectContainer}>
        <select
          value={selectedItem}
          onChange={handleSelectChange}
          style={styles.select}
        >
          <option value="">All</option>
          {items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <span style={styles.dropdownIcon}>
          <i className="fa-solid fa-angle-down"></i>
        </span>
      </div>
    </div>
  );
};

const HotelCity = ({ setFilterTerm }) => {
  const items = [
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

  return (
    <div className="main-search-section" style={styles.serchsection}>
      <SearchComponent items={items} setFilterTerm={setFilterTerm} />
      <SelectComponent items={items} setFilterTerm={setFilterTerm} />
    </div>
  );
};

export default function App() {
  const [filterTerm, setFilterTerm] = useState("");

  return (
    <div>
      <HotelCity setFilterTerm={setFilterTerm} />
      <RoomSection filterTerm={filterTerm} />
    </div>
  );
}

const styles = {
  serchsection: {
    maxWidth: "600px",
    margin: "7% 0 0 13%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "20px",
    position: "relative",
  },
  section: {
    flex: 1,
    position: "relative",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #999",
    width: "300px",
    position: "relative",
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: "16px",
    flex: 1,
    paddingLeft: "30px",
    boxSizing: "border-box",
  },
  searchicon: {
    position: "absolute",
    left: "5px",
    color: "gray",
    fontSize: "20px",
    pointerEvents: "none",
  },
  list: {
    position: "absolute",
    top: "100%",
    left: "0",
    width: "100%",
    maxHeight: "200px",
    overflowY: "auto",
    backgroundColor: "white",
    border: "1px solid #ccc",
    borderTop: "none",
    zIndex: 10,
    listStyle: "none",
  },
  listItem: {
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
  },
  noResults: {
    padding: "10px",
    color: "gray",
    fontSize: "14px",
  },
  selectContainer: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #999",
    position: "relative",
    width: "300px",
  },
  select: {
    border: "none",
    outline: "none",
    fontSize: "16px",
    flex: 1,
    appearance: "none",
    backgroundColor: "transparent",
    paddingRight: "20px",
    boxSizing: "border-box",
  },
  dropdownIcon: {
    position: "absolute",
    right: "5px",
    pointerEvents: "none",
    color: "#555",
  },
};
