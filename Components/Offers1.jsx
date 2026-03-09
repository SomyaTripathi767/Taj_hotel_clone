import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tajLogo from "../assets/LOGO.png";
import './Offers1.css'
import RoomSection from './RoomSection'
import Footer from "./Footer";
import EventsAndConferences from "./EventsAndConferences";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
const Offers1 = () => {
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
     
    return (
        <div>
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
                                <Link to={"/Destination"} className="nav-link" aria-current="page">
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

      <div className="Offer1-backgaroud-imge">
        <div className="hotel" id="offers-title">
          <h1 className="main-offers-title">Offers
          & Promotions</h1>
        </div>
      </div>


      <div className="room-offer">
        <RoomSection/>
      </div>

      <div className="event">
        <EventsAndConferences/>
      </div>  
      
      <div className="footer">
        <Footer/>
      </div>

     
        </div>
    );
}

export default Offers1;
