import React from "react";
import eventImg from "/public/images/event.png";

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
      <div className="weather-top">
        <div className="weather-info">
          <div className="weather-temp-wrapper">
            <div className="weather-img">
              <svg
                width="60"
                height="57"
                viewBox="0 0 60 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.0087 11.3047C26.5333 11.299 23.1342 12.3024 20.2413 14.1881C17.3484 16.0738 15.0915 18.757 13.7562 21.8985C12.4208 25.04 12.0669 28.4987 12.7391 31.8371C13.4114 35.1756 15.0797 38.2439 17.533 40.654C19.9863 43.0641 23.1145 44.7079 26.5219 45.3773C29.9294 46.0468 33.4631 45.7119 36.6761 44.4151C39.8892 43.1182 42.6373 40.9176 44.573 38.0915C46.5087 35.2655 47.545 31.9409 47.5509 28.5382C47.5548 26.2789 47.1041 24.0409 46.2246 21.9521C45.3452 19.8633 44.0541 17.9646 42.4252 16.3643C40.7962 14.764 38.8613 13.4935 36.7309 12.6254C34.6004 11.7573 32.3162 11.3085 30.0087 11.3047Z"
                  fill="#FCC54C"
                />
                <path
                  d="M59.1259 28.5387L49.2485 20.744L50.6214 8.3653L37.9093 9.67084L29.9382 0L21.9672 9.67084L9.36368 8.32661L10.7465 20.7053L0.869141 28.5L10.7465 36.3044L9.36368 48.6734L22.0067 47.3291L29.9777 57L37.9488 47.3291L50.5819 48.6831L49.209 36.2754L59.1259 28.5387ZM44.3098 42.5904C42.4279 44.4242 40.2691 45.9638 37.9093 47.1551C32.7712 48.775 27.2435 48.775 22.1055 47.1551C17.3033 44.7691 13.391 40.9623 10.9243 36.2754C9.27179 31.2445 9.27179 25.8329 10.9243 20.802C12.1482 18.4685 13.7343 16.3349 15.6259 14.4773C17.5224 12.6104 19.7094 11.0501 22.1055 9.85459C27.2414 8.22152 32.7734 8.22152 37.9093 9.85459C40.2989 11.0429 42.4796 12.5969 44.3691 14.4579C46.2493 16.3212 47.8192 18.462 49.0213 20.802C50.6825 25.8316 50.6825 31.2458 49.0213 36.2754C47.7976 38.592 46.2149 40.7092 44.3296 42.5517L44.3098 42.5904Z"
                  fill="#FCC54C"
                />
              </svg>
            </div>
            <div className="weather-temp">
              <h2>29</h2>
              <sup>°C</sup>
            </div>
          </div>
          <div className="weather-ratio">
            <span>Precipitation: 2%</span>
            <span>Humidity: 70%</span>
            <span>Wind: 3 km/h</span>
          </div>
        </div>
        <div className="weather-location">
          <p>Mumbai</p>
          {/* <p className="time">Wednesday 04:00</p> */}
          <p className="time">{`${day} ${time}`}</p>
        </div>
      </div>
      <div className="event-box">
        <h3>Upcoming Event</h3>
        {[1, 2, 3].map((_, i) => (
          <div className="event-item" key={i}>
            <img src={eventImg} alt="event" />
            <div className="content">
              {/* <span>Exhibitions: Product, Nesco, Mumbai</span> */}
              <a
                href="#"
                
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <span>Exhibitions: Product, Nesco, Mumbai</span>
              </a>
              <span className="date">9 July 2025 </span>
            </div>
          </div>
        ))}
        <a
          href="https://animetrixlabs.com/knowledgecentre/events/"
          className="view-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More-
        </a>
      </div>
    </div>
  );
};

export default WeatherCard;
