import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LatestOffers.css";

const LatestOffers = () => {
  const offers = [
    {
      title: "CYBER MONDAY OFFER",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/f76bff18bbff3f6e8541fb46010a65bb7d1c8271-475x380.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "NEW BEGINNINGS",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/60cba713ae2f5efc99b58b326c794794c1a87035-1892x860.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "SUITE SURPRISES",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/b3bb5c83021054bdeec41479d9c36eeef24e12b6-700x560.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "EXPLORE ADVENTURES",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/48611dc0f5181acea9be691cdcfac8a267cac15e-1400x1120.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "SUMMER ESCAPES",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/fe6799b89df9ca58ec7319b1d15063dff466576c-1892x860.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="latest-offers container-fiuld my-5">
      <div className="text">
        <h2 className="text-center mb-4 first">
          <span className="title">LATEST OFFERS</span>
        </h2>
        <p className="mb-5 text-muted sec">
          Dive into cool adventures at our picture-perfect destinations with Taj
          Hotels.
        </p>
      </div>

      <div className="slider-container">
        <button className="slider-button left left-button" onClick={scrollLeft}>
         <span className="icon"> &#8249;</span>
        </button>
        <div className="slider" ref={sliderRef}>
          {offers.map((offer, index) => (
            <div className="box" key={index}>
              <div className="offer-card">
                <img
                  src={offer.image}
                  className="offer-image"
                  alt={offer.title}
                />
                <div className="offer-content">
                  <h5 className="offer-title">{offer.title}</h5>
                  <a href={offer.link} className="offer-link">
                    More <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button right" onClick={scrollRight}>
          <span className="icon">&#8250;</span>
        </button>
      </div>
    </div>
  );
};

export default LatestOffers;
