import React, { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";
// import './LatestPosts.css';
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";

const videoPosts = [
  {
    id: 1,
    title: "First Video",
    username: "Author One",
    short_description: "Short desc for video 1",
    created_at: "2025-07-18",
    user_image_full_url: "https://example.com/user1.jpg",
    video_url: "https://www.youtube.com/embed/O-VuQECGgKo?si=Oz_NFxpY1-5OUi2p",
  },
  {
    id: 2,
    title: "Second Video",
    username: "Author Two",
    short_description: "Short desc for video 2",
    created_at: "2025-07-18",
    user_image_full_url: "https://example.com/user2.jpg",
    video_url: "https://www.youtube.com/embed/TXd_7FAzQuQ?si=C0O_vfU9dJP5mphg",
  },
  {
    id: 3,
    title: "Third Video",
    username: "Author Three",
    short_description: "Short desc for video 3",
    created_at: "2025-07-18",
    user_image_full_url: "https://example.com/user3.jpg",
    video_url: "https://www.youtube.com/embed/OaoU3z5uSNE?si=5XRAfLyJfPaEn6sZ",
  },
];

const KnowledgeCenterPostCard = ({
  id,
  title,
  username,
  short_description,
  created_at,
  video_url, // NEW PROP
  avatar,
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
        <div
          className="video-wrapper"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/posts/${id}`)}
        >
          <iframe
            width="100%"
            height="100%"
            src={video_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="card-body d-flex flex-column justify-content-between p-0">
          <div>
            {/* <h6 className="card-title fw-semibold mb-1">{title}</h6> */}
            <h6
              className="card-title fw-semibold "
              onClick={() => navigate(`/posts/${id}`)}
              style={{ cursor: "pointer" }}
            >
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
                src={avatar}
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
export default KnowledgeCenterPostCard;
