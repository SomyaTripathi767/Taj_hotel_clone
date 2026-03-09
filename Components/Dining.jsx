import React, { useState } from "react";
import "./Dining.css";

const Dining = () => {
  const DINING = [
    {
      imge:
        "https://i.pinimg.com/236x/01/1d/b2/011db2fb7ee1c263e91ad629cf6c789e.jpg",
      heading: "SIGNATURE RECIPES",
      text: "A distinguished roster of world-class talent embodying culinary excellence with expertise, creativity and precision.",
    },
    { 
      imge:
        "https://b.zmtcdn.com/data/pictures/1/20848821/9bb1cf73b1145eb6442e3ca8fa031760.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      heading: "SIGNATURE RECIPES",
      text: "A collection of restaurants recognized for unparalleled dining experiences showcasing culinary prowess and attentive service.",
    },
    {
      imge:
        "https://imgs.heart.co.uk/images/112677?crop=16_9&width=660&relax=1&format=webp&signature=gsfNSK69S7ysShxGPGVpLBI-6xc=",
      heading: " SIGNATURE RECIPES",
      text: "Culinary mastery shines as each dish highlights a medley of flavours and textures for an unforgettable dining experience.",
    },
    {
      imge:
        "https://www.recipetineats.com/tachyon/2025/06/Maple-sweet-potato-salad-with-whipped-tahini_4.jpg?resize=747%2C747",
      heading: "SIGNATURE RECIPES",
      text: "Experience the best of local and world flavours where authentic ingredients and techniques blend seamlessly for unparalleled culinary harmony.",
    },
    {
      imge:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/a02ecadcd4a5ec735d7f0ae8d0d5b477ec1eb343-950x1020.jpg?w=768&auto=format&dpr=2",
      heading: "SIGNATURE RECIPES",
      text: "Elegant and intricately crafted experiences unfold into bespoke service and opulent settings.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (DINING.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + DINING.length - 2) % (DINING.length - 2)
    );
  };

  return (
    <div className="DINING">
      <div className="text">
        <h2 className="text-center mb-4 first-DINING">
          <span className="DINING-title">Signature</span>
          <span className="for-DINING">Dining</span>
        </h2>
        <p className="mb-5 text-muted DINING-text">
          Embark on a journey of exquisite experiences, encompassing impeccable
          service, sophisticated ambience and masterful culinary artistry.​ <br />
          <a href="#">EXPLORE</a>
        </p>
      </div>
      <button className="slider-button left  slider-icon" onClick={prevSlide}>
          <div className="icon">&#8249;</div>
        </button>
      <div className="slider container-fiuld DINING-slider">
       
        <div className="slider">
          {DINING.slice(currentIndex, currentIndex + 3).map((slide, index) => (
            <div className="slide" key={index}>
              <img
                src={slide.imge}
                alt={`Slide ${currentIndex + index}`}
                className="slide-image"
              />
              <h3 className="slide-heading">{slide.heading}</h3>
              <p className="slide-text">{slide.text}</p>
            </div>
          ))}
        </div>
      
      </div>
      <button className="slider-button right  slider-icon" onClick={nextSlide}>
         <div className="icon"> &#8250;</div>
        </button>
    </div>
  );
};

export default Dining;

// import React from 'react';
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from 'react-owl-carousel';
// import "./Dining.css";

// const Dining = () => {
//   const DINING = [
//     {
//       imge:
//         "https://cdn.sanity.io/images/ocl5w36p/prod2/69c467744f7f1694331768d6d611bfc77582e36a-906x972.jpg?w=480&fm=webp&dpr=2",
//       heading: "SIGNATURE RECIPES",
//       text: "A distinguished roster of world-class talent embodying culinary excellence with expertise, creativity and precision.",
//     },
//     {
//       imge:
//         "https://cdn.sanity.io/images/ocl5w36p/prod2/c0401c93116df10e12fea3bf9ea9662394fc9b80-906x972.jpg?w=480&fm=webp&dpr=2",
//       heading: "SIGNATURE RECIPES",
//       text: "A collection of restaurants recognized for unparalleled dining experiences showcasing culinary prowess and attentive service.",
//     },
//     {
//       imge:
//         "https://cdn.sanity.io/images/ocl5w36p/prod2/6f2a11fe4c3f74aebb344e214c359ba6b7a303b3-906x972.jpg?w=480&fm=webp&dpr=2",
//       heading: " SIGNATURE RECIPES",
//       text: "Culinary mastery shines as each dish highlights a medley of flavours and textures for an unforgettable dining experience.",
//     },
//     {
//       imge:
//         "https://cdn.sanity.io/images/ocl5w36p/prod2/2011d590b040d304174b5985c5027d65b176aeb0-906x972.jpg?w=480&fm=webp&dpr=2",
//       heading: "SIGNATURE RECIPES",
//       text: "Experience the best of local and world flavours where authentic ingredients and techniques blend seamlessly for unparalleled culinary harmony.",
//     },
//     {
//       imge:
//         "https://cdn.sanity.io/images/ocl5w36p/prod2/df050e0b9d06c94045cdbdacce64d23993a69f7a-950x1020.jpg?w=480&fm=webp&dpr=2",
//       heading: "SIGNATURE RECIPES",
//       text: "Elegant and intricately crafted experiences unfold into bespoke service and opulent settings.",
//     },
//   ];

//   return (
//     <div className="DINING">
//       <h3 className="DINING-title">Dining</h3>
//       <OwlCarousel
//         className="owl-theme"
//         loop
//         margin={10}
//         nav
//         items={3} // Adjust to show 3 items at a time
//         responsive={{
//           0: { items: 1 },
//           600: { items: 2 },
//           1000: { items: 3 },
//         }}
//       >
//         {DINING.map((item, index) => (
//           <div className="item" key={index}>
//             <img src={item.imge} alt={item.heading} className="slide-image" />
//             <h2 className="slide-heading">{item.heading}</h2>
//             <p className="slide-text">{item.text}</p>
//           </div>
//         ))}
//       </OwlCarousel>
//     </div>
//   );
// };

// export default Dining;
