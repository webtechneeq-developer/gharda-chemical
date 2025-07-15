import {
  CalendarDaysIcon,
  ChatBubbleLeftIcon,
  TagIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Health = ({ data }) => {
  return (
    <>
      {data && (
        <div className="chemical-article-section">
          {/* Left Side: Article */}
          <div className="chemical-right-section">
            <h5 className="chemical-title">{data?.title}</h5>
            <img
              src={data?.cover_image_full_url}
              alt={data?.category_name}
              className="img-fluid article-img"
            />
          </div>

          {/* Meta Info */}
          <div className="d-flex justify-content-center gap-md-5 flex-wrap text-muted meta-info">
            <div className="d-flex align-items-center me-3 mb-2">
              <CalendarDaysIcon className="meta-icon me-1" />
              <small>{data?.created_at}</small>
            </div>
            <div className="d-flex align-items-center me-3 mb-2">
              <ChatBubbleLeftIcon className="meta-icon me-1" />
              <small>Comments: {data?.comments?.length}</small>
            </div>
            <div className="d-flex align-items-center mb-2">
              <TagIcon className="meta-icon me-1" />
              <small>Category: {data?.category_name}</small>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Health;
