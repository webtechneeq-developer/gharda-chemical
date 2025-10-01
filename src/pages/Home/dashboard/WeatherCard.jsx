import React from "react";
// import eventImg from "/public/images/event.png";
import { FaCakeCandles } from "react-icons/fa6";

const WeatherCard = () => {
  const now = new Date();
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <div className="weather-card">
      <h3 className="mx-5">
        Upcoming BirthDays
        <FaCakeCandles style={{ color: "#FF0000", marginLeft: "10px" }} />
      </h3>
      <div className="event-box">
        <div className="event-item">
          <FaCakeCandles style={{ color: "#FF0000", marginRight: "10px" }} />
          <div className="content">
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              <span>Johnny Depp</span>
            </a>
            <span className="date">02 October 2025 </span>
          </div>
        </div>
        <div className="event-item">
          {/* <img src={eventImg} alt="event" /> */}
          <FaCakeCandles style={{ color: "#FF0000", marginRight: "10px" }} />
          <div className="content">
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              <span>Mark deo</span>
            </a>
            <span className="date">08 October 2025 </span>
          </div>
        </div>
        <div className="event-item">
          {/* <img src={eventImg} alt="event" /> */}
          <FaCakeCandles style={{ color: "#FF0000", marginRight: "10px" }} />
          <div className="content">
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              <span>John Wick</span>
            </a>
            <span className="date">14 October 2025 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
