import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showDestinations, setShowDestinations] = useState(false);

  const toggleDestinations = () => {
    setShowDestinations((prevState) => !prevState);
  };

  return (
    <footer>
      <div className="footer-logo">
        <img
          className="imge-footer-logo"
          src="https://cdn.sanity.io/images/ocl5w36p/prod5/825ed139eadf75b55b920457fcd793fa8d424f50-112x38.png"
          alt="Footer Logo"
          width={80}
        />
      </div>

      <div className="top-part-footer">
        <div className="left-side-footer">
          <h6 className="footer-sub-in-heading">
            SUBSCRIBE FOR LATEST UPDATES
          </h6>
          <div className="input-button">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>

          <div className="FOR-BOOKINGS">
            <div className="left-side-text">
              <p className="left-text" id="for-bokk">
                FOR BOOKINGS CONTACT
              </p>
              <p className="left-date" id="left-date-fix">
                1-800-111-825
              </p>
            </div>
            <div className="right-side-text" style={{ marginTop: "35px" }}>
              <p className="left-date">reservations@ihcltata.com</p>
            </div>
          </div>

          <div className="CUSTOMER-SUPPORT">
            <div className="right-side-text">
              <p className="left-text" id="for-bokk">
                CUSTOMER SUPPORT
              </p>
              <p className="left-date" id="left-date-fix">
                contacttaj@tajhotels.com
              </p>
            </div>
            <div className="right-side-text" style={{ marginTop: "35px" }}>
              <p className="left-date">website.feedback@tajhotels.com</p>
            </div>
          </div>
        </div>

        <div className="right-side-footer">
          <div className="footer-links">
            <p style={{ marginLeft: "25px" }} className="dest">
              QUICK LINKS
            </p>
            <ul className="links-list">
              <li>Hotels</li>
              <li>Dining</li>
              <li>Wellness</li>
              <li>Timeless Weddings</li>
              <li>Event Venues</li>
              <li>Taj Magazine</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className="footer-links">
            <p style={{ marginLeft: "25px" }} className="dest">
              ABOUT US
            </p>
            <ul className="about-list">
              <li>About Taj</li>
              <li>Holidays</li>
              <li>Offers</li>
              <li>Gifting</li>
              <li>Neupass</li>
              <li>Epicure</li>
              <li>Taj Blog</li>
            </ul>
          </div>

          <div className="footer-social">
            <p style={{ marginLeft: "25px" }} className="dest" id="con-with">
              CONNECT WITH US
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/TajHotels/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://x.com/TajHotels"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i class="fa-brands fa-x-twitter"></i>
                {/* <i className="fab fa-twitter"></i> */}
              </a>
              <a
                href="https://www.instagram.com/tajhotels/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/user/TajMovies"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/taj-hotels/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-part-footer">
        <hr className="border-footer" />
        <div className="destination-footer">
          <p className="dest">DESTINATIONS</p>
          <i className="fa-solid fa-plus" onClick={toggleDestinations}></i>
        </div>
        {showDestinations && (
          <div className="destination-list">
          <ul>
            <li>5-Star Hotels in Agra</li>
            <li>5-Star Hotels in Ahmedabad</li>
            <li>5-Star Hotels in Amritsar</li>
            <li>5-Star Hotels in Andamans</li>
            <li>5-Star Hotels in Bandhavgarh</li>
            <li>5-Star Hotels in Bengaluru</li>
            <li>5-Star Hotels in Bhopal</li>
            <li>5-Star Hotels in Bentota</li>
            <li>5-Star Hotels in Chennai</li>
            <li>5-Star Hotels in Coorg</li>
            <li>5-Star Hotels in Goa</li>
            <li>5-Star Hotels in Hyderabad</li>
            <li>5-Star Hotels in Jaipur</li>
            <li>5-Star Hotels in Kerala</li>
            <li>5-Star Hotels in Maldives</li>
            <li>5-Star Hotels in New York</li>
            <li>5-Star Hotels in Rajasthan</li>
            <li>5-Star Hotels in Shimla</li>
            <li>5-Star Hotels in Varanasi</li>
            <li>5-Star Hotels in Wayanad</li>
            {/* Add more as needed */}
          </ul>
        </div>
        
        )}
        <hr className="border-footer" />
        <div className="OUR-BRANDs">
          <h6>OUR BRANDS</h6>
          <div className="brands">
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/01e70d97116092467a7919bace6ef1f79e77546a-57x65.svg?w=768&auto=format&dpr=2"
              alt="Taj"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/4edd85d01efb6bc56811ba44dd2b62d86d185f99-136x65.svg?w=768&auto=format&dpr=2"
              alt="Vivanta"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/b3a806dc46bc4194d1a85225b184b297f667ce83-167x65.svg?w=768&auto=format&dpr=2"
              alt="SeleQtions"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/fcb5bc00ab73b965c0830af4c61ff96f871eaf05-126x65.svg?w=768&auto=format&dpr=2"
              alt="Ginger"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/4e691bffa02a6a51ecddcd6c6878c4fb782d4f99-167x65.svg?w=768&auto=format&dpr=2"
              alt="collection"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/fee3a17497baf46959fcb271e4ee3c868d2ee4b2-141x65.svg?w=768&auto=format&dpr=2"
              alt="Gateway"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/99ee2aadfdfd8d00b63b16cf080cd6c1cbeac0b4-167x65.svg?w=768&auto=format&dpr=2"
              alt="Tree of Life"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/8ae03fe4e39ae7ade1de99eb0398799159b3d0df-72x65.svg?w=768&auto=format&dpr=2"
              alt="ama"
            />
            <img
              src="https://cdn.sanity.io/images/ocl5w36p/prod5/00ca969d3e7e3d050d862d6d10a20fd6494c5a12-88x65.svg?w=768&auto=format&dpr=2"
              alt="min"
            />
          </div>
        </div>
        <hr className="border-footer" />
        <div className="footer-legal">
          <p>
            &copy; 2024 The Indian Hotels Company Limited. All Rights Reserved.
          </p>
          <ul>
            <li>Corporate</li>
            <li>Pressroom</li>
            <li>Work With Us</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
            <li>Investor Relations</li>
            <li>Partners</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
