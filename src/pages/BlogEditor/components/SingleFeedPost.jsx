import React, { useEffect, useState } from "react";
import { feedData } from "../components/feed";
// import "./BlogEditor.css"; // Import external CSS

// --- Static Data (formerly in feed.js) ---



// --- Lightbox Component ---
const Lightbox = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNextImage();
      else if (e.key === "ArrowLeft") showPrevImage();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images]);

  const showNextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const showPrevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrevImage(); }}>&#10094;</button>
      <div className="lightbox-content" onClick={handleContentClick}>
        <img src={images[currentIndex]} alt={`Lightbox view ${currentIndex + 1}`} className="lightbox-image" />
      </div>
      <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); showNextImage(); }}>&#10095;</button>
    </div>
  );
};

// --- PhotoGrid Component ---
const PhotoGrid = ({ images = [], onImageClick }) => {
  const imageCount = images.length;
  if (imageCount === 0) return null;

  if (imageCount === 1) {
    return (
      <div className="photo-grid-container single-image" onClick={() => onImageClick(0)}>
        <img src={images[0]} alt="Post content" className="grid-img" />
      </div>
    );
  }

  if (imageCount === 2) {
    return (
      <div className="photo-grid-container two-images">
        <img src={images[0]} alt="Post content" className="grid-img" onClick={() => onImageClick(0)} />
        <img src={images[1]} alt="Post content" className="grid-img" onClick={() => onImageClick(1)} />
      </div>
    );
  }

  const firstImage = images[0];
  const rightColumnImages = images.slice(1, 3);
  const fourthImage = imageCount >= 4 ? images[3] : null;
  const moreCount = imageCount > 4 ? imageCount - 4 : 0;

  return (
    <div className="photo-grid-container multi-image-grid">
      <div className="large-image-container" onClick={() => onImageClick(0)}>
        <img src={firstImage} alt="Post content" className="grid-img" />
      </div>
      <div className="right-column-container">
        {rightColumnImages.map((img, i) => (
          <img key={i} src={img} alt={`Post thumbnail ${i + 1}`} className="grid-img" onClick={() => onImageClick(i + 1)} />
        ))}
        {fourthImage && (
          <div className="last-image-container" onClick={() => onImageClick(3)}>
            <img src={fourthImage} alt="Post thumbnail 3" className="grid-img" />
            {moreCount > 0 && <div className="more-overlay"><span>+{moreCount}</span></div>}
          </div>
        )}
      </div>
    </div>
  );
};

// --- FeedPost Component ---
function FeedPost({ post, onImageClick }) {
  const timeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / 60000);
    if (diff < 1) return "Just now";
    if (diff < 60) return `${diff} min ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)} hrs ago`;
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="feed-card">
      <div className="feed-header">
        <div className="feed-user">
          <img className="feed-avatar" src={post.user.avatar} alt={post.user.name} />
          <div>
            <h6 className="feed-username">{post.user.name}</h6>
            <p className="feed-job">{post.user.jobTitle}</p>
          </div>
        </div>
        <span className="feed-time">{timeAgo(post.createdAt)}</span>
      </div>

      <div className="feed-body">
        {post.content && <p className="feed-text">{post.content}</p>}
        {post.type === "PHOTO" && (
          <PhotoGrid images={post.attachments} onImageClick={(index) => onImageClick(post.attachments, index)} />
        )}
        {post.type === "VIDEO" && post.attachments.map((url, i) => <video key={i} controls className="feed-video"><source src={url} type="video/mp4" /></video>)}
        {post.type === "DOC" && post.attachments.map((url, i) => <a key={i} href={url} target="_blank" rel="noreferrer" className="feed-doc">📄 View Document</a>)}
        {post.type === "FEELING" && <span className="feed-feeling">Feeling {post.feeling}</span>}
      </div>

      {post.type === "POLL" && (
        <div className="feed-poll">
          <h6 className="feed-poll-question">{post.poll.question}</h6>
          {post.poll.options.map((opt, i) => (
            <div key={i} className="feed-poll-option">
              <input type="radio" name={`poll-${post.id}`} id={`option-${post.id}-${i}`} />
              <label htmlFor={`option-${post.id}-${i}`}>{opt}</label>
            </div>
          ))}
        </div>
      )}

      {post.type === "LINK" && (
        <div className="feed-link">
          <a href={post.link.url} target="_blank" rel="noreferrer" className="feed-link-anchor">
            🔗 {post.link.title}
          </a>
        </div>
      )}

      {post.type === "EVENT" && (
        <div className="feed-event">
          <h4 className="feed-event-title">{post.title}</h4>
          <p className="feed-event-description">{post.description}</p>
          <div className="feed-event-details">
            <p><strong>📅 Date:</strong> {post.date}</p>
            <p><strong>⏰ Time:</strong> {post.time}</p>
            <p><strong>🕒 Duration:</strong> {post.duration}</p>
            <p><strong>📍 Location:</strong> {post.location}</p>
          </div>
          <div className="feed-event-attachments">
            {post.attachments.map((file, i) => (
              <a key={i} href={file.url} target="_blank" rel="noreferrer" className="feed-doc">
                📄 {file.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="feed-actions">
        <button className="feed-btn">👍 Like</button>
        <button className="feed-btn">💬 Comment</button>
        <button className="feed-btn feed-btn-right">🔗 Share</button>
      </div>

      <div className="feed-comment-box">
        <img className="feed-comment-avatar" src={post.user.avatar} alt="avatar" />
        <input className="feed-comment-input" placeholder="Add a comment..." />
        <button className="feed-comment-send">➤</button>
      </div>
    </div>
  );
}

// --- Main Feed Component ---
export default function Feed() {
  const [posts, setPosts] = useState(feedData);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, images: [], startIndex: 0 });

  const openLightbox = (images, startIndex) => {
    setLightboxState({ isOpen: true, images, startIndex });
  };

  const closeLightbox = () => {
    setLightboxState({ isOpen: false, images: [], startIndex: 0 });
  };

  return (
    <>
      <style>{`
        .feed-container { max-width: 600px; margin: auto; padding: 10px; font-family: sans-serif; }
        .feed-card { background: #fff; border-radius: 12px; padding: 12px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .feed-header { display: flex; justify-content: space-between; align-items: center; }
        .feed-user { display: flex; align-items: center; gap: 10px; }
        .feed-avatar { width: 45px; height: 45px; border-radius: 50%; object-fit: cover; }
        .feed-username { margin: 0; font-size: 14px; font-weight: bold; }
        .feed-job { margin: 0; font-size: 12px; color: #777; }
        .feed-time { font-size: 12px; color: #aaa; }
        .feed-body { margin-top: 10px; }
        .feed-text { margin-bottom: 8px; font-size: 14px; line-height: 1.5; }
        .feed-video { width: 100%; border-radius: 8px; margin-top: 8px; }
        .feed-doc { display: inline-block; background: #eef5ff; padding: 6px 12px; border-radius: 6px; text-decoration: none; color: #007bff; margin-top: 8px; }
        .feed-feeling { display: inline-block; background: #fff3cd; padding: 4px 10px; border-radius: 12px; font-size: 12px; margin-top: 8px; }
        .feed-poll { margin-top: 10px; }
        .feed-poll-question { font-weight: bold; margin-bottom: 8px; }
        .feed-poll-option { margin-bottom: 5px; }
        .feed-poll-option label { margin-left: 8px; }
        .feed-actions { display: flex; gap: 10px; margin-top: 10px; }
        .feed-btn { background: none; border: none; font-size: 13px; color: #555; cursor: pointer; transition: color 0.2s ease; }
        .feed-btn:hover { color: #007bff; }
        .feed-btn-right { margin-left: auto; }
        .feed-comment-box { display: flex; align-items: center; margin-top: 10px; gap: 8px; }
        .feed-comment-avatar { width: 30px; height: 30px; border-radius: 50%; }
        .feed-comment-input { flex: 1; padding: 6px 8px; border-radius: 20px; border: 1px solid #ddd; outline: none; font-size: 13px; }
        .feed-comment-send { background: none; border: none; font-size: 16px; color: #007bff; cursor: pointer; }
        .feed-link { margin-top: 10px; }
        .feed-link-anchor { font-weight: bold; text-decoration: none; color: #007bff; }
        .feed-event { margin-top: 10px; border-left: 3px solid #007bff; padding-left: 15px; }
        .feed-event-title { font-size: 1.1rem; font-weight: bold; }
        .feed-event-details p { margin: 5px 0; font-size: 0.9rem; }
        .feed-event-attachments { margin-top: 10px; }

        /* PhotoGrid and Lightbox Styles */
        .photo-grid-container { width: 100%; border-radius: 12px; overflow: hidden; display: grid; gap: 4px; max-height: 500px; cursor: pointer; }
        .single-image { grid-template-columns: 1fr; }
        .two-images { grid-template-columns: 1fr 1fr; }
        .multi-image-grid { grid-template-columns: 2fr 1fr; }
        .large-image-container { grid-column: 1 / 2; }
        .right-column-container { grid-column: 2 / 3; display: grid; grid-template-rows: repeat(auto-fit, minmax(0, 1fr)); gap: 4px; }
        .grid-img { width: 100%; height: 100%; object-fit: cover; background-color: #eee; }
        .last-image-container { position: relative; overflow: hidden; }
        .more-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; color: white; font-size: 2.5rem; font-weight: bold; font-family: sans-serif; }
        .lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .lightbox-content { position: relative; max-width: 90vw; max-height: 90vh; }
        .lightbox-image { width: 100%; height: 100%; object-fit: contain; }
        .lightbox-close, .lightbox-prev, .lightbox-next { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.3); color: white; border: none; font-size: 2rem; cursor: pointer; z-index: 1001; padding: 10px 15px; border-radius: 5px; }
        .lightbox-close { top: 20px; right: 20px; padding: 5px 15px; }
        .lightbox-prev { left: 20px; }
        .lightbox-next { right: 20px; }
        .lightbox-close:hover, .lightbox-prev:hover, .lightbox-next:hover { background: rgba(0,0,0,0.6); }
      `}</style>

      <div className="feed-container">
        {posts.map((post) => (
          <FeedPost key={post.id} post={post} onImageClick={openLightbox} />
        ))}
      </div>

      {lightboxState.isOpen && (
        <Lightbox
          images={lightboxState.images}
          startIndex={lightboxState.startIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}


