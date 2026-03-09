import React, { useRef } from 'react';
import './Explore.css'

const Explore = () => {
  const explores = [
    { 
      title: "CYBER MONDAY OFFER",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/e45e8db0776661fbbda764aec6c424be6f527443-1400x1120.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "NEW BEGINNINGS",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/362f002646bdcf8f5869e9b4564585f099c31d6d-1400x1120.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "SUITE SURPRISES",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/e86885ac8de54c48ae1f6b41d7934d1140f52597-1400x1120.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "EXPLORE ADVENTURES",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/0ce7584dc1d8f84ac0f86ae3896220ed22740697-1400x1120.jpg?w=768&auto=format&dpr=2",
      link: "#",
    },
    {
      title: "SUMMER ESCAPES",
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/f7e424f31120a74e20a3ead365cd59f1a607fff1-1401x1120.heif?w=768&auto=format&dpr=2",
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
    <div>
      <div className="Explore">
        <div className="text">
          <h2 className="text-center mb-4 first-Explore">
            <span className="Explore-title">Explore More</span>
          </h2>
          <p className="mb-5 text-muted Explore-text">
            Relaxing beach paradises, thrilling urban getaways, exotic hill stations and historic homes of royalty are all within reach.
          </p>
        </div>
        <div className="slider-container">
          <button className="slider-button left" onClick={scrollLeft}>
           <span className='icon'> &#8249;</span>
          </button>
          <div className="slider" ref={sliderRef}>
            {explores.map((explore, index) => (
              <div className="box" key={index}>
                <div className="explore-card">
                  <img
                    src={explore.image}
                    className="explore-image"
                    alt={explore.title}
                  />
                  <div className="explore-content">
                    <h5 className="explore-title">{explore.title}</h5>
                    <a href={explore.link} className="explore-link">
                      More <i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-button right" onClick={scrollRight}>
          <span className='icon'>  &#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Explore;
