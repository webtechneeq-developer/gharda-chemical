import React from "react";

const FeatureCard = ({ title, colorClass, children, bgImg ,link }) => {
  return (
    <div className={`feature-card ${bgImg}`}>
      <div className={`overlay ${colorClass}`}></div>
      <div className="content">
        <div className="icon">{children}</div>
        {/* <div className="title">{title}</div> */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-white"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
