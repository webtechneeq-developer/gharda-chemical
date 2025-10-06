import React, { useState, useEffect } from "react";
// The CSS is now included directly in this file, so the external import is not needed.
import { galleryData } from "./galleryData";
// --- Static Data (from galleryData.js) ---


// --- Lightbox Component (New) ---
const Lightbox = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images]); // Dependency array ensures this only runs once

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Stop clicks inside the image from closing the modal
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


// --- PhotoGrid Component (Self-contained) ---
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
        {rightColumnImages.map((img, index) => (
          <img key={index} src={img} alt={`Post thumbnail ${index + 1}`} className="grid-img" onClick={() => onImageClick(index + 1)} />
        ))}
        {fourthImage && (
          <div className="last-image-container" onClick={() => onImageClick(3)}>
            <img src={fourthImage} alt="Post thumbnail 3" className="grid-img" />
            {moreCount > 0 && (
              <div className="more-overlay">
                <span>+{moreCount}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// --- FeedPost Component (Updated) ---
function FeedPost({ post, onImageClick }) {
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
        {post.type === "PHOTO" && <PhotoGrid images={post.attachments} onImageClick={(index) => onImageClick(post.attachments, index)} />}
      </div>

      <div className="feed-actions">
        <button className="feed-btn">👍 Like (56)</button>
        <button className="feed-btn">💬 Comment (12)</button>
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

// --- Main Gallery Component ---
export default function Gallery() {
  const [posts, setPosts] = useState(galleryData);
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
        /* --- Existing Styles --- */
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
        .feed-actions { display: flex; gap: 10px; margin-top: 10px; }
        .feed-btn { background: none; border: none; font-size: 13px; color: #555; cursor: pointer; transition: color 0.2s ease; }
        .feed-btn:hover { color: #007bff; }
        .feed-btn-right { margin-left: auto; }
        .feed-comment-box { display: flex; align-items: center; margin-top: 10px; gap: 8px; }
        .feed-comment-avatar { width: 30px; height: 30px; border-radius: 50%; }
        .feed-comment-input { flex: 1; padding: 6px 8px; border-radius: 20px; border: 1px solid #ddd; outline: none; font-size: 13px; }
        .feed-comment-send { background: none; border: none; font-size: 16px; color: #007bff; cursor: pointer; }
        .photo-grid-container { width: 100%; border-radius: 12px; overflow: hidden; display: grid; gap: 4px; max-height: 500px; cursor: pointer; }
        .single-image { grid-template-columns: 1fr; }
        .two-images { grid-template-columns: 1fr 1fr; }
        .multi-image-grid { grid-template-columns: 2fr 1fr; }
        .large-image-container { grid-column: 1 / 2; }
        .right-column-container { grid-column: 2 / 3; display: grid; grid-template-rows: repeat(auto-fit, minmax(0, 1fr)); gap: 4px; }
        .grid-img { width: 100%; height: 100%; object-fit: cover; background-color: #eee; }
        .last-image-container { position: relative; overflow: hidden; }
        .more-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; color: white; font-size: 2.5rem; font-weight: bold; font-family: sans-serif; }

        /* --- New Lightbox Styles --- */
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

