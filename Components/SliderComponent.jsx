import React, { useState } from "react";
import  './SliderComponent.css';


const SliderComponent = () => {
  const items = [
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/97dc8b87973431f49e1501e90fd1ad14acc75332-414x310.jpg?w=480&auto=format&dpr=2",
      title: "MOUNTAINS",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/a6fbb7262f33beb12f51ec3785c505747f2d8af4-414x310.jpg?w=480&auto=format&dpr=2",
      title: "PALACES",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/e3387e991641729cf5331ab9c1ef4147fb6bd9b7-414x310.jpg?w=480&auto=format&dpr=2",
      title: "RESIDENCES",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/1b54341381e4cad5cda53e27e42ed7a9f919a4ef-414x310.jpg?w=480&auto=format&dpr=2",
      title: "RESORTS",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/f06948fc60e794ddfbee62313da2c359f48adb5c-414x310.jpg?w=480&auto=format&dpr=2",
      title: "SAFARIS",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/daf58eee26592b6ac7969f8c389d69ad24166f6e-414x310.jpg?w=480&auto=format&dpr=2",
      title: "BEACHES",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/56aa9e762d938487a07d206b09bed899503443bd-414x310.jpg?w=480&auto=format&dpr=2",
      title: "VILLAGES",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 5 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container  hotel-slider-con">
      <button className="prev-button slide-button" onClick={prevSlide}>
        ❮
      </button>
      <div className="slider-content">
        {items
          .slice(currentIndex, currentIndex + 5)
          .map((item, index) => (
            <div key={index} className="slider-item">
              <img src={item.image} alt={item.title} className="slider-image" />
              <div className="slider-title">{item.title}</div>
            </div>
          ))}
      </div>
      <button className="next-button slide-button" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default SliderComponent;
