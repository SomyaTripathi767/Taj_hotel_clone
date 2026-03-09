import React, { useState, useEffect } from "react"; // Import necessary hooks
import "./Home.css";
import tajLogo from "../assets/LOGO.png"; // Correct import statement for the logo
import mainpage from "../assets/wshbtaj.mp4";
import LatestOffers from "./LatestOffers";
import Exclusively from "./Exclusively";
import Explore from "./Explore";
import { Link } from "react-router-dom";
import Dining from "./Dining";
import EventsAndConferences from "./EventsAndConferences";
import WELLNESS from "./WELLNESS";
import Footer from "./Footer";
import SearchBox from "../SearchBox/SearchBox";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
const Home = () => {
 const [isScrolled, setIsScrolled] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [userName, setUserName] = useState("");
   const [userPhoto, setUserPhoto] = useState("");
   const auth = getAuth(app);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
 
     window.addEventListener("scroll", handleScroll);
 
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);
 
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
 
  const images = [
    "https://cdn.sanity.io/images/ocl5w36p/prod5/f345bca0624f12d7c0f2e1f528e08f32df07388e-1892x860.jpg?w=768&auto=format&dpr=2",
    "https://cdn.sanity.io/images/ocl5w36p/prod5/58f8418d3475dcb62f3a731c464df29d8f3e0eb1-1892x860.jpg?w=768&auto=format&dpr=2",
    "https://cdn.sanity.io/images/ocl5w36p/prod5/60cba713ae2f5efc99b58b326c794794c1a87035-1892x860.jpg?w=768&auto=format&dpr=2",
    "https://cdn.sanity.io/images/ocl5w36p/prod5/2fc146494fe409217601e433644a4f8e33a3d5d9-1892x860.jpg?w=768&auto=format&dpr=2",
  ];

  const text = [
    "Embrace a timeless elegance that embodies sophistication and an unwavering commitment to refined excellence.",
    "Indulge in enduring distinction, extraordinary experiences and a legacy of unparalleled hospitality.",
    "Dive into a legacy of impeccable service where true refinement unfolds in every moment of your stay.",
    "Cultivate cherished memories and embrace a distinctive sense of belonging through personalised, immersive experiences.",
  ];
  const title = ["TIMELESS", "ICONIC", "AUTHENTIC", "SOULFUL"];

  function ImageGrid() {
    const [hoveredImage, setHoveredImage] = useState("");

    const handleHover = (image) => {
      setHoveredImage(image); // Change image on hover
    };

    const [showSearch, setShowSearch] = useState(false); // Default: false

    const handleSearchClick = () => {
      setShowSearch(!showSearch); // Toggle the visibility of SearchBox
      if (!showSearch) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = "auto"; // Enable scrolling
      }
    };

    const handleCloseSearch = () => {
      setShowSearch(false); // Close the SearchBox
      document.body.style.overflow = "auto"; // Enable scrolling
    };
    return (
      <div>
        {/* Add dynamic class to change the appearance on scroll */}
        <nav className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}>
               <div className="container-fluid">
                 <a className="navbar-brand" href="#">
                   <Link to={"/"}>
                     <div className="col-md-1 logo">
                       <img
                         src={isScrolled
                           ? "https://cdn.sanity.io/images/ocl5w36p/prod5/4eeaf5b2669e2f360ea72bed30fbc7cbdfb3a2a4-67x59.png"
                           : tajLogo}
                         alt="Taj Logo"
                         className={`img-fluid ${isScrolled ? "scrolled-logo" : ""}`}
                         width={60}
                       />
                     </div>
                   </Link>
                 </a>
                 <button
                   className="navbar-toggler"
                   type="button"
                   data-bs-toggle="collapse"
                   data-bs-target="#navbarSupportedContent"
                   aria-controls="navbarSupportedContent"
                   aria-expanded="false"
                   aria-label="Toggle navigation"
                 >
                   <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                       <Link to={"Destination"} className="nav-link" aria-current="page">
                         DESTINATIONS
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to={"/Hotel"} className="nav-link" aria-current="page">
                         HOTELS
                       </Link>
                     </li>
                     <li className="nav-item dropdown">
                       <Link to={"/Dining1"} className="nav-link" aria-current="page">
                         DINING
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to={"/Offers1"} className="nav-link" aria-current="page">
                         OFFERS
                       </Link>
                     </li>
                     <li className="nav-item dropdown">
                       <Link to={"/"} className="nav-link dropdown-toggle" aria-current="page">
                         MEMBERSHIP
                       </Link>
                     </li>
                     <li className="nav-item dropdown">
                       <Link to={"/"} className="nav-link dropdown-toggle" aria-current="page">
                         MORE
                       </Link>
                     </li>
                   </ul>
                   <form className="d-flex text-header" role="search">
                     {!isLoggedIn ? (
                       <Link to="/login" className="account me-3">
                         LOGIN / JOIN
                       </Link>
                     ) : (
                       <Link to="/myaccount" className="account me-3">
                         MY ACCOUNT
                       </Link>
                     )}
                      <Link to={"/BookStay"}>
                                       <button className="book-button btn-gold">BOOK A STAY</button>
                                     </Link>
                   </form>
                 </div>
               </div>
             </nav>

        <div class="main-page">
          <video autoPlay loop muted class="background-video">
            <source src={mainpage} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="search-bar-component">
            <i
              className="fa-solid fa-magnifying-glass search-icon"
              onClick={handleSearchClick}
            ></i>
            {showSearch && <SearchBox onClose={handleCloseSearch} />}
          </div>
        </div>

        <div className="hospitality-section">
          <h1 className="heading">GLOBAL ICON OF INDIAN HOSPITALITY</h1>
          <p className="description">
            Enter a realm of storied halls, sophisticated delights, and
            unrivalled indulgence. Immerse yourself in the grandeur of luxury at
            our exquisite palaces, hotels, resorts, and safaris.
          </p>

          <div className="image-box">
            {
              <div className="image-container">
                {
                  <div
                    className="image-background"
                    style={{
                      backgroundImage: `url(${
                        hoveredImage ||
                        "https://cdn.sanity.io/images/ocl5w36p/prod5/95cf71cf687bea2b7158714cc7edd70cf1011187-2880x1240.jpg?w=1600&auto=format&dpr=2"
                      })`,
                    }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="overlay-box"
                        onMouseEnter={() => handleHover(image)} // Hover to change image
                        onMouseLeave={() => setHoveredImage("")} // Reset on hover out
                      >
                        <div className="overlay">
                          <h4 className="overlay-h4-text">{title[index]}</h4>
                          <p className="overlay.p-text">{text[index]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                }
              </div>
            }
          </div>
        </div>

        <div className="Offers">
          <LatestOffers />
        </div>

        <div className="Exclusively">
          <Exclusively />
        </div>

        <div className="Explore">
          <Explore />
        </div>

        <div className="Dining">
          <Dining />
        </div>

        <div className="EventsAndConferences">
          <EventsAndConferences />
        </div>

        <div className="WELLNESs">
          <WELLNESS />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }

  return <ImageGrid />;
};

export default Home;
