import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GeneralAchievement.css";

const articles = [
  {
    id: 1,
    category: "Basketball",
    image: "basketball.png",
    author: "Jake Will.",
    authorImage: "img1.png",
    date: "04 June 2023",
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    description:
      "This article was written by Jake Whitehot from Healthsitecd.com. Strength in basketball isn’t all about a massive body mass or ripped muscles.",
  },
  {
    id: 2,
    category: "Hockey",
    image: "hockey.png",
    author: "Fazi Jacon",
    authorImage: "img2.png",
    date: "03 June 2023",
    title:
      "Golden Knights out to fulfill owner’s quest to win Stanley Cup in 6th year",
    description:
      "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
  },
  {
    id: 3,
    category: "Badminton",
    image: "badminton.png",
    author: "Bong Lozada",
    authorImage: "img3.png",
    date: "01 June 2023",
    title: "‘Outdoor’ Badminton Gets Support From Local Federation",
    description:
      "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
  },
  {
    id: 4,
    category: "Basketball",
    image: "basketball.png",
    author: "Jake Will.",
    authorImage: "img1.png",
    date: "04 June 2023",
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    description:
      "This article was written by Jake Whitehot from Healthsitecd.com. Strength in basketball isn’t all about a massive body mass or ripped muscles.",
  },
  {
    id: 5,
    category: "Hockey",
    image: "hockey.png",
    author: "Fazi Jacon",
    authorImage: "img2.png",
    date: "03 June 2023",
    title:
      "Golden Knights out to fulfill owner’s quest to win Stanley Cup in 6th year",
    description:
      "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
  },
  {
    id: 6,
    category: "Badminton",
    image: "badminton.png",
    author: "Bong Lozada",
    authorImage: "img3.png",
    date: "01 June 2023",
    title: "‘Outdoor’ Badminton Gets Support From Local Federation",
    description:
      "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
  },
];

const GeneralAchievement = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="container-md container-fluid-xs py-5 achievements-slider-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          setSwiperRef(swiper);
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={false}
        slidesPerView="auto"
        spaceBetween={30}
        className="achievements-slider"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {articles.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <div className="card border-0 h-100">
              <div className="position-relative">
                <img
                  src={`/images/achievements/${item.image}`}
                  className="card-img-top rounded"
                  alt={item.title}
                />
                <span className="badge bg-dark position-absolute top-0 end-0 mt-3 me-sm-4 me-3 cust-badge">
                  {item.category}
                </span>
              </div>
              <div className="card-body px-0">
                <div className="d-flex align-items-center gap-3 author-wrapper">
                  <img
                    src={`/images/authors/${item.authorImage}`}
                    alt={item.author}
                    className="rounded-circle"
                    width="30"
                    height="30"
                  />
                  <span className="author-name">{item.author}</span>
                </div>
                <small className="date">{item.date}</small>
                <h6 className="title">{item.title}</h6>
                <p className="description">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="navigation-wrapper">
        <div
          className={`custom-button-prev ${
            isBeginning ? "disabled" : "active"
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

        <div className={`custom-button-next ${isEnd ? "disabled" : "active"}`}>
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
  );
};

export default GeneralAchievement;
