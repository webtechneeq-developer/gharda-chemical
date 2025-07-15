import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./CategorySlider.css";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";

const categories = [
  { label: "#Food", image: "/images/category-slider/food.png" },
  { label: "#Animal", image: "/images/category-slider/animal.png" },
  { label: "#Car", image: "/images/category-slider/car.png" },
  { label: "#Sport", image: "/images/category-slider/sport.png" },
  { label: "#Music", image: "/images/category-slider/music.png" },
  { label: "#Technology", image: "/images/category-slider/technology.png" },
  { label: "#Abstract", image: "/images/category-slider/abstract.png" },
  { label: "#Nature", image: "/images/category-slider/nature.png" },
  // Optional: More repeated categories if needed
];

const CategorySwiper = () => {
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();
  const [allCategories, setAllCategories] = useState([]);
  const { postData } = useApi();
  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    await postData(
      "category-data",
      {
        sort_order: "DESC",
        sort_coloumn: "id",
        blog_type: "B",
        limit_per_page: 100,
        // is_admin_blog: "N",
      },
      {
        onSuccess: (res) => {
          setAllCategories(res?.data?.data);
          console.log(res?.data?.data);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  const handleClick = (is_admin_category, name, id) => {
    if (is_admin_category === "Y") {
      const slug = name.toLowerCase().replace(/\s+/g, "_"); // Convert to URL-friendly slug
      navigate(`/categories/${slug}`);
    } else {
      navigate(`/articles`,{state:{category:id}});
    }
  };

  useEffect(() => {
    if (swiperInstance && nextRef.current) {
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      swiperInstance.update(); // Force an update to ensure proper calculations
    }
  }, [swiperInstance]);

  return (
    <div className="container-md container-fluid-xs">
      <div className="category-swiper-container">
        <div className="shadow-right" />

        {/* Custom Next Arrow */}
        <button ref={nextRef} className="swiper-button custom-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="Black"
            strokeWidth={1.5}
            className="arrow-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          navigation={{ nextEl: nextRef.current }}
          loop={true}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            swiper.update();
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            992: { slidesPerView: 6 },
            1200: { slidesPerView: 7 },
          }}
        >
          {allCategories.map((category, idx) => (
            <SwiperSlide key={idx} className="category-slide">
              <div
                className="category-card"
                style={{
                  "--bg-image": `url(${category.image_full_url})`,
                }}
                onClick={() => {
                  handleClick(
                    category.is_admin_category,
                    category.category_name,
                    category.id
                  );
                }}
              >
                <div className="overlay">
                  <span>
                    {category.category_name.length > 15
                      ? category.category_name.substring(0, 15) + "..."
                      : category.category_name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySwiper;
