// src/components/NewsSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Heroicons

// import "./NewsSection.css";

// Top of your component
const swiperSlides = [
  {
    image: "/images/news-swiper1.png",
    title: "Timeless Bonds - Dr Gharda and Mrs. Gharda",
    // text: "A Single Monitor Manifesto – Many Developers Believe Multiple Monitors Improve Productivity...",
    link: "https://animetrixlabs.com/knowledgecentre/timeline-bond/",
  },
  {
    image: "/images/news-swiper1.png",
    title: "Timeless Bonds - Dr Gharda and Mrs. Gharda",
    // text: "Unplugging from technology for a few days can refresh your mind and increase your focus at work.",
    link: "https://animetrixlabs.com/knowledgecentre/timeline-bond/",
  },
  {
    image: "/images/news-swiper1.png",
    title: "Timeless Bonds - Dr Gharda and Mrs. Gharda",
    // text: "From collaboration to productivity, here are must-have tools for remote developers in 2025.",
    link: "https://animetrixlabs.com/knowledgecentre/timeline-bond/",
  },
];


const NewsSection = () => {
  return (
    <div className="container news-section">
      <div className="row d-flex align-items-stretch">
        {/* FIRST CARD */}
        <div className="col-lg-3 mb-3">
          <div className="card left-card h-100 shadow-sm">
            <img
              src="/images/news-first-card.png"
              className="card-img-top"
              alt="Dr. Gharda"
            />
            <div className="card-body overlay-text">
              <h6 className="card-title mb-0">
                <a
                  href="https://animetrixlabs.com/knowledgecentre/the-visionary-scientistdr-gharda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-black"
                >
                  The Visionary Scientist,
                  <br /> Dr. Gharda
                </a>
              </h6>
            </div>
          </div>
        </div>

        {/* SWIPER */}
        <div className="col-lg-6 mb-3 position-relative swiper-lg-margin">
          {/* Custom Navigation Buttons */}
          <button className="custom-prev swiper-button-prev ms-2 flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#f9f0f0] shadow">
            <ChevronLeftIcon className="h-4 w-4 text-[#7a6e6e]" />
          </button>
          <button className="custom-next swiper-button-next me-2 flex items-center justify-center w-10 h-10 rounded-[12px] bg-[#f9f0f0] shadow">
            <ChevronRightIcon className="h-4 w-4 text-[#7a6e6e]" />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="news-swiper"
          >
            {swiperSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="card right-card shadow-sm">
                  <img
                    src={slide.image}
                    className="card-img-top"
                    alt={slide.title}
                  />
                  <div className="card-body overlay-text">
                    <h6 className="card-title mb-1">
                      <a
                        href={slide.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark"
                      >
                        {slide.title}
                      </a>
                    </h6>
                    <p className="card-text small mb-0">{slide.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SECOND CARD */}
        <div className="col-lg-3 mb-3">
          <div className="card left-card h-100 shadow-sm">
            <img
              src="/images/news-second-card.png"
              className="card-img-top object-top"
              alt="Plant Launches"
            />
            <div className="card-body overlay-text">
              <h6 className="card-title mb-1">
                <a
                  href=" https://animetrixlabs.com/knowledgecentre/gharda-panoli-is-honored-with-the-oriented-award-for-outstanding-contribution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  Featured Post
                </a>
              </h6>
              <p className="card-text mb-0">
                Gharda Panoli is honored with the ‘Oriented’ Award for
                Outstanding Contribution in Greenbelt Development at the
                Environment Conclave 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
