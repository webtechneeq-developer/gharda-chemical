import React, { useEffect, useState } from "react";
import "./HobbyMasonry.css";
import { useApi } from "../../../hooks/useApi";
// Local fallback style config
const styleData = [
  {
    bg: "#EEEEEE",
    color: "#444444",
    blur: "#444444",
    button: "Click Here",
    bigCard: true,
  },
  {
    bg: "#D8ECFF",
    color: "#0A73A1",
    blur: "#0A73A1",
    bigCard: false,
  },
  {
    bg: "#FEF9C4",
    color: "#D4B100",
    blur: "#D4B100",
    bigCard: false,
  },
  {
    bg: "#F2E7E3",
    color: "#B18531",
    blur: "#B18531",
    bigCard: false,
  },
  {
    bg: "#E3F2E6",
    color: "#25D02C",
    blur: "#25D02C",
    bigCard: false,
  },
  {
    bg: "#FAE8E8",
    color: "#C63D42",
    blur: "#C63D42",
    button: "View More",
    bigCard: true,
  },
  {
    bg: "#E3F2E6",
    color: "#B18531",
    blur: "#B18531",
    bigCard: false,
  },
  {
    bg: "#FAE8E8",
    color: "#25D02C",
    blur: "#C63D42",
    button: "View More",
    bigCard: true,
  },
  {
    bg: "#EEEEEE",
    color: "#C63D42",
    blur: "#443A3A",
    bigCard: false,
  },
];
const MasonryGrid = () => {
  const [category, setCategory] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { postData } = useApi();
  useEffect(() => {
    postData(
      "category-data",
      { is_admin_category: "Y" },
      {
        isTokenRequired: true,
        onSuccess: (res) => {
          setCategory(res?.data?.data || []);
          console.log("Fetched Categories:", res?.data?.data);
        },
        onError: (err) => {
          console.error("API Error:", err);
        },
      }
    );
  }, []);
  return (
    <div className="masonry-wrapper">
        <div className="container-sm container-fluid-xs">
          <div className="my-masonry-grid">
            {category.map((item, idx) => {
              const style = styleData[idx % styleData.length];
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  className={`card-item ${
                    (style.bigCard && "span-2") ||
                    (!style.bigCard && "flex-wrap")
                  }`}
                  key={idx}
                  style={{ backgroundColor: style.bg }}
                >
                  <div className="text-wrapper">
                    {/* <p className="subtitle" style={{ color: style.color }}>
                      {item.subTitle}
                    </p> */}
                    <h4 className="title">{item.category_name}</h4>
                  </div>

                  <div
                    className="bottom-wrapper"
                  >
                    {/* {style.button && (
                      <div className={`btn-wrapper ${style.bigCard ? "my-auto" : ""}`}>
                        <button
                          className="btn btn-sm item-btn"
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          style={{
                            backgroundColor: isHovered ? "transparent" : style.color,
                            border: `2px solid ${style.color}`,
                            color: isHovered ? style.color : "#fff",
                            transition: "all 0.3s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          {style.button}
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
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </button>
                      </div>
                    )} */}
                    <div className="d-flex justify-content-center align-items-center">
                      <div className="img-wrapper">
                        <div
                          className="img-blur-fake"
                          style={{
                            backgroundColor: style.blur,
                          }}
                        ></div>
                        <img src={item.image_full_url} alt={item.title} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
};
export default MasonryGrid;





