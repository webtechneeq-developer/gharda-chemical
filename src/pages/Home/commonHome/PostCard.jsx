import React, { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
// import './LatestPosts.css';
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";

const PostCard = ({
  id,
  title,
  username,
  short_description,
  created_at,
  user_image_full_url,
  cover_image_full_url,
}) => {

  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);
  const titleLimit = 40; // Set a limit for the title
  const isTitleTruncated = title ? title.length > titleLimit : "";
  const previewTitle = title ? title.slice(0, titleLimit) : "";

  function truncateHTML(htmlString, limit = 75) {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = DOMPurify.sanitize(htmlString);
    const text = tempElement.textContent || tempElement.innerText || "";
    const truncated = text.length > limit ? text.slice(0, limit) + "..." : text;
    return truncated;
  }

  return (
    <div className="post-card-main">
      <div className="card  flex-row post-card h-100">
        <img
          src={cover_image_full_url}
          alt={title}
          className="img-fluid card-image"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/posts/${id}`)}
        />
        <div className="card-body d-flex flex-column justify-content-between p-0">
          <div>
            {/* <h6 className="card-title fw-semibold mb-1">{title}</h6> */}
            <h6 className="card-title fw-semibold " onClick={() => navigate(`/posts/${id}`)} style={{ cursor: "pointer" }}>
              {!expanded ? (
                <>
                  {previewTitle}
                  {isTitleTruncated && (
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setExpanded(true)}
                    >
                      ...
                    </span>
                  )}
                </>
              ) : (
                title
              )}
            </h6>
            {/* <p className="card-text text-muted small mb-3">{description}</p> */}
            {/* Clickable description */}
            {!expanded ? (
              <p
                className="card-description mb-1"
                dangerouslySetInnerHTML={{
                  __html: truncateHTML(short_description),
                }}
              ></p>
            ) : (
              <p
                className="card-description mb-1"
                dangerouslySetInnerHTML={{ __html: short_description }}
              ></p>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center author-box">
            <div className="d-flex align-items-center">
              <img
                src={user_image_full_url}
                alt={username}
                className="rounded-avtar-image "
                width="44"
                height="44"
              />
              <div>
                <small className="fw-semibold d-block">{username}</small>
                <small className="text-muted">{created_at}</small>
              </div>
            </div>
            <BookmarkIcon className="hero-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;









