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

        <div className="feed-grid">
          {post.type === "PHOTO" &&
            post.attachments.map((url, i) => (
              <img key={i} className="feed-img" src={url} alt="Post" />
            ))}
        </div>

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

      {/* --- POLL Post --- */}
      {post.type === "POLL" && (
        <div className="feed-poll">
          <h6 className="feed-poll-question">{post.poll.question}</h6>
          {post.poll.options.map((opt, i) => (
            <div key={i} className="feed-poll-option">
              <input type="radio" name={`poll-${post.id}`} id={`option-${i}`} />
              <label htmlFor={`option-${i}`}>{opt}</label>
            </div>
          ))}
        </div>
      )}

      {/* --- LINK Post --- */}
      {post.type === "LINK" && (
        <div className="feed-link">
          <a
            href={post.link.url}
            target="_blank"
            rel="noreferrer"
            className="feed-link-anchor"
          >
            🔗 {post.link.title}
          </a>
        </div>
      )}

      {/* --- EVENT Post --- */}
      {post.type === "EVENT" && (
        <div className="feed-event">
          <h4 className="feed-event-title">{post.title}</h4>
          <p className="feed-event-description">{post.description}</p>
          <div className="feed-event-details">
            <p>
              <strong>📅 Date:</strong> {post.date}
            </p>
            <p>
              <strong>⏰ Time:</strong> {post.time}
            </p>
            <p>
              <strong>🕒 Duration:</strong> {post.duration}
            </p>
            <p>
              <strong>📍 Location:</strong> {post.location}
            </p>
          </div>
          <div className="feed-event-attachments">
            {post.attachments.map((file, i) => (
              <a
                key={i}
                href={file.url}
                target="_blank"
                rel="noreferrer"
                className="feed-doc"
              >
                📄 {file.name}
              </a>
            ))}
          </div>
        </div>
      )}

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
