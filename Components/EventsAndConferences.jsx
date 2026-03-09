import React from "react";
import "./EventsAndConferences.css";

const EventsAndConferences = () => {
  const events = [
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/6d34584a52ea8140cfca9cc30d693325abca5925-1400x1080.jpg?w=768&auto=format&dpr=2",
      title: "MEETINGS & CONFERENCES",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/d451ef209272bc10c3665a819b4865034801d2a2-1400x1080.jpg?w=768&auto=format&dpr=2",
      title: "EVENTS",
    },
    {
      image:
        "https://cdn.sanity.io/images/ocl5w36p/prod5/8458083aed28ec653b7d55ebe021378a6fe40b17-1400x1080.jpg?w=768&auto=format&dpr=2",
      title: "TIMELESS WEDDINGS",
    },
  ];

  return (
    <div>
      <div className="EventsAndConference">
        <div className="text">
          <h2 className="text-center mb-4 first-DINING">
            <span className="DINING-title">Events And</span>
            <span className="for-DINING">Conferences</span>
          </h2>
          <p className="mb-5 text-muted DINING-text">
            Taj elevates every occasion into an awe-inspiring, immersive
            experience to cherish forever..​ <br />
          </p>
        </div>
        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event" key={index}>
              <img
                src={event.image}
                alt={event.title}
                width={292.63}
                height={225.88}
              />
              <div className="parent-container">
                <div className="box-title">
                  <div className="event-title">{event.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsAndConferences;
