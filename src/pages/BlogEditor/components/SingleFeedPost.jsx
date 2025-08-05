import React, { useEffect, useState } from "react";
import { feedData } from "../components/feed";
import "./BlogEditor.css"; // Import external CSS

export default function Feed() {
  const [posts, setPosts] = useState(feedData);

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

        {post.type === "PHOTO" &&
          post.attachments.map((url, i) => (
            <img key={i} className="feed-img" src={url} alt="Post" />
          ))}

        {post.type === "VIDEO" &&
          post.attachments.map((url, i) => (
            <video key={i} controls className="feed-video">
              <source src={url} type="video/mp4" />
            </video>
          ))}

        {post.type === "DOC" &&
          post.attachments.map((url, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="feed-doc"
            >
              📄 View Document
            </a>
          ))}

        {post.type === "FEELING" && (
          <span className="feed-feeling">Feeling {post.feeling}</span>
        )}
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
