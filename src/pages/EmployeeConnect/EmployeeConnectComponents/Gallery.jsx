import React, { useEffect, useState } from "react";
import { galleryData } from "./galleryData";
import "../../BlogEditor/components/BlogEditor.css"; // Import external CSS

export default function Gallery() {
  const [posts, setPosts] = useState(galleryData);

  useEffect(() => {
    fetch("/api/feed")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="feed-container">
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </div>
  );
}

function FeedPost({ post }) {
  const timeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / 60000); // in minutes
    if (diff < 1) return "Just now";
    if (diff < 60) return `${diff} min ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)} hrs ago`;
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="feed-card">
      {/* --- Header --- */}
      <div className="feed-header">
        <div className="feed-user">
          <img
            className="feed-avatar"
            src={post.user.avatar}
            alt={post.user.name}
          />
          <div>
            <h6 className="feed-username">{post.user.name}</h6>
            <p className="feed-job">{post.user.jobTitle}</p>
          </div>
        </div>
        <span className="feed-time">{timeAgo(post.createdAt)}</span>
      </div>

      {/* --- Content --- */}
      <div className="feed-body">
        {post.content && <p className="feed-text">{post.content}</p>}

        <div className="feed-grid">
          {post.type === "PHOTO" &&
            post.attachments.map((url, i) => (
              <img key={i} className="feed-img" src={url} alt="Post" />
            ))}
        </div>
      </div>

      {/* --- Actions --- */}
      <div className="feed-actions">
        <button className="feed-btn">👍 Like (56)</button>
        <button className="feed-btn">💬 Comment (12)</button>
        <button className="feed-btn feed-btn-right">🔗 Share</button>
      </div>

      {/* --- Comment Box --- */}
      <div className="feed-comment-box">
        <img
          className="feed-comment-avatar"
          src={post.user.avatar}
          alt="avatar"
        />
        <input className="feed-comment-input" placeholder="Add a comment..." />
        <button className="feed-comment-send">➤</button>
      </div>
    </div>
  );
}
