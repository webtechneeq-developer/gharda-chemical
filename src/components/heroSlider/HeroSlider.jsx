import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";

const slides = [
  {
    image: "/images/hero-slider/img1.png",
    date: "Presse – 04 January 2025",
    title: "MASTER STROKES OF DR. GHARDA",
    subtitle: "Discover the milestones and Achievement",
  },
  {
    image: "/images/hero-slider/img1.png",
    date: "Presse – 04 January 2025",
    title: "MASTER STROKES OF DR. GHARDA",
    subtitle: "Discover the milestones and Achievement",
  },
  {
    image: "/images/hero-slider/img1.png",
    date: "Presse – 04 January 2025",
    title: "MASTER STROKES OF DR. GHARDA",
    subtitle: "Discover the milestones and Achievement",
  },
  {
    image: "/images/hero-slider/img1.png",
    date: "Presse – 04 January 2025",
    title: "MASTER STROKES OF DR. GHARDA",
    subtitle: "Discover the milestones and Achievement",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div className="position-relative swiper-bg padding-top">
      <div className="container-md container-fluid-xs ">
        <div className="hero-slider-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (index, className) =>
                `<span class="${className}">${index + 1}</span>`,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={false}
            onSlideChange={handleSlideChange}
            className="hero-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="overlay slide-overlay">
                    <div className="btn-wrapper">
                      <button className="btn btn-outline-light slider-btn">
                        Leader’s Desk
                      </button>
                    </div>
                    <div className="slide-content">
                      <span className="slide-date">{slide.date}</span>
                      <h2 className="slide-title">{slide.title}</h2>
                      <p className="slide-subtitle">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="navigation-wrapper">
            <div
              className={`custom-button-prev ${
                activeIndex === 0 ? "disabled" : "active"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </div>

            <div className="custom-pagination"></div>

            <div
              className={`custom-button-next ${
                activeIndex === slides.length - 1 ? "disabled" : "active"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
