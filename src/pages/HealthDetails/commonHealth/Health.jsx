import {
    CalendarDaysIcon,
    ChatBubbleLeftIcon,
    ChevronRightIcon,
    TagIcon,
  } from "@heroicons/react/16/solid";
  import React from "react";
  
  const Health = ({ article }) => {
    if (!article) return null;
    return (
      <div className="chemical-article-section">
        {/* Left Side: Article */}
        <div className="chemical-right-section ">
          <h5 className="chemical-title">{article.title}</h5>
          <img
            src={article.cover_image_full_url}
            alt={article.title}
            className="img-fluid article-img"
          />
        </div>
        {/* Meta Info */}
        <div className="d-flex justify-content-center gap-md-5 flex-wrap text-muted meta-info">
          <div className="d-flex align-items-center me-3 mb-2">
            <CalendarDaysIcon className="meta-icon me-1" />
            <small>December 14, 2025</small>
          </div>
          <div className="d-flex align-items-center me-3 mb-2">
            <ChatBubbleLeftIcon className="meta-icon me-1" />
            <small>Comments: 25</small>
          </div>
          <div className="d-flex align-items-center mb-2">
            <TagIcon className="meta-icon me-1" />
            <small>Category: Health Tips</small>
          </div>
        </div>
      </div>
    );
  };
  
  export default Health;
  