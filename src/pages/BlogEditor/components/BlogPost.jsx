import React, { useState, useRef } from "react";
import { FaFileAlt, FaLink } from "react-icons/fa";
import "./BlogEditor.css";
import EmojiPicker from "emoji-picker-react";
import EmojiPickerModal from "./EmojiPicker";
import LinkModal from "./LinkModal";
import { useApi } from "../../../hooks/useApi";
import PhotoPost from "./PhotoPost";
import VideoPost from "./VideoPost";
import CreateEventModal from "./CreateEventPost";
import CreateFeelingModal from "./FeelingPost";
import DocumentPost from "./DocumentPost";
import LinkPostModal from "./LinkPost";
import PollModal from "./PollPost";

export default function BlogPost({ onClose, onInsert }) {
  const [attachments, setAttachments] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();
  const [showPicker, setShowPicker] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [storedHtml, setStoredHtml] = useState(""); // HTML version for rendering
  const [photoPost, setPhotoPost] = useState(false);
  const [videoPost, setVideoPost] = useState(false);
  const [eventPost, setEventPost] = useState(false);
  const [feelingPost, setFeelingPost] = useState(false);
  const [documentPost, setDocumentPost] = useState(false);
  const [pollPost, setPollPost] = useState(false);
  const [linkPost, setLinkPost] = useState(false);
  const [blogPost, setBlogPost] = useState(false);
  const [content, setContent] = useState("");
  const { postData, isLoading, response, error } = useApi();
  const [postType, setPostType] = useState("");

  const textareaRef = useRef(null);

  const handleSubmit = () => {
    console.log("Get form data before sending it to api", content);
    postData(
      "/blog-post/create",
      { content },
      {
        onSuccess: (res) => {
          console.log("✅ Blog Posted:", res);
          onClose();
        },
        onError: (err) => {
          console.error("❌ Error Posting Blog:", err);
        },
      }
    );
  };

  const onEmojiClick = (emoji) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newText =
        content.substring(0, start) + emoji + " " + content.substring(end);
      setContent(newText);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd =
          start + emoji.length + 1;
        textarea.focus();
      }, 0);
    } else {
      setContent((prev) => prev + emoji);
    }
  };

  const handleLinkInsert = (linkText, linkUrl) => {
    // Add link as a new attachment
    const newLink = {
      type: "link",
      text: linkText,
      url: linkUrl,
    };
    setAttachments((prev) => [...prev, newLink]);
  };

  // const handleLinkInsert = (link) => {
  //   const textarea = textareaRef.current;
  //   if (textarea) {
  //     const start = textarea.selectionStart;
  //     const end = textarea.selectionEnd;
  //     const newText =
  //       content.substring(0, start) + link + " " + content.substring(end);
  //     setContent(newText);
  //     setTimeout(() => {
  //       textarea.selectionStart = textarea.selectionEnd =
  //         start + link.length + 1;
  //       textarea.focus();
  //     }, 0);
  //   } else {
  //     setContent((prev) => prev + link);
  //   }
  // };

  // const handleLinkInsert = (linkText, linkUrl) => {
  //   const textarea = textareaRef.current;
  //   const htmlLink = `<a href="${linkUrl}" target="_blank" rel="noreferrer">${linkText}</a>`;

  //   if (textarea) {
  //     const start = textarea.selectionStart;
  //     const end = textarea.selectionEnd;

  //     // Show display name in textarea
  //     const newText =
  //       content.substring(0, start) + linkText + content.substring(end);
  //     setContent(newText);

  //     // Store HTML version in hidden variable if needed
  //     // (optional: maintain a separate variable for actual HTML)
  //     setStoredHtml(
  //       (prev) => prev.substring(0, start) + htmlLink + prev.substring(end)
  //     );

  //     setTimeout(() => {
  //       textarea.selectionStart = textarea.selectionEnd =
  //         start + linkText.length;
  //       textarea.focus();
  //     }, 0);
  //   }
  // };

  const placeholderAvatar =
    "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg";

  // Handle file input
  const onFileChange = (e) => {
    setAttachments((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  // Drag events
  const onDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeave = () => setDragActive(false);

  const onDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length) {
      setAttachments((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  // Remove attachment
  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  console.log("Get PhotoPost Data", content, attachments, postType);

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-title">Create Blog Post</span>
            <span
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            >
              x
            </span>
          </div>
          {/* <hr className="photomodal-divider" /> */}

          <div className="modal-body">
            <div className="photomodal-user-row">
              <textarea
                className="photomodal-textarea"
                placeholder="Share your thoughts..."
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div
              className="extra-btn"
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              <button
                style={{
                  background: "#f0f0f0",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "18px",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.background = "#e0e0e0")}
                onMouseOut={(e) => (e.target.style.background = "#f0f0f0")}
                onClick={() => setShowPicker(showPicker ? false : true)}
              >
                😊
              </button>

              <button
                style={{
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => (e.target.style.background = "#e0e0e0")}
                onMouseOut={(e) => (e.target.style.background = "#f0f0f0")}
                onClick={() => setShowLinkModal(true)}
              >
                <FaLink />
              </button>
            </div>

            {attachments.length === 0 && (
              <ul className="nav nav-pills nav-stack small fw-normal">
                <li
                  className="nav-item"
                  onClick={() => setPhotoPost(photoPost ? false : true)}
                >
                  <a className="nav-link bg-light">
                    <span className="icon text-success">📷</span> Photo
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setVideoPost(videoPost ? false : true)}
                >
                  <a className="nav-link bg-light">
                    <span className="icon text-info">🎥</span> Video
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setEventPost(eventPost ? false : true)}
                >
                  <a className="nav-link bg-light">
                    <span className="icon text-danger">📅</span> Event
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setDocumentPost(documentPost ? false : true)}
                >
                  <a className="nav-link bg-light">
                    <span className="icon text-danger">📄</span> Docs
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setFeelingPost(feelingPost ? false : true)}
                >
                  <a className="nav-link bg-light">
                    <span className="icon text-warning">😊</span> Feeling /
                    Activity
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setPollPost(pollPost ? false : true)}
                >
                  <a className="nav-link bg-light">
                    <span className="icon text-warning">📊</span> Poll
                  </a>
                </li>

                <li
                  className="nav-item"
                  onClick={() => setLinkPost(linkPost ? false : true)}
                >
                  <a className="nav-link bg-light">
                    <span className="icon text-warning"> 🎮 </span> Games
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Previews of content */}

          {eventData?.attachments?.length > 0 && postType === "EVENT" && (
            <div className="feed-event-preview">
              <h4 className="feed-event-title">{eventData.title}</h4>
              <p className="feed-event-description">{eventData.description}</p>

              <div className="feed-event-details">
                <p>
                  <strong>📅 Date:</strong> {eventData.date}
                </p>
                <p>
                  <strong>⏰ Time:</strong> {eventData.time}
                </p>
                <p>
                  <strong>🕒 Duration:</strong> {eventData.duration}
                </p>
                <p>
                  <strong>📍 Location:</strong> {eventData.location}
                </p>
              </div>

              <div className="feed-event-attachments">
                {eventData.attachments && eventData.attachments.length > 0 ? (
                  eventData.attachments.map((file, i) => (
                    <a
                      key={i}
                      href={URL.createObjectURL(file)}
                      target="_blank"
                      rel="noreferrer"
                      className="feed-doc"
                    >
                      📄 {file.name}
                    </a>
                  ))
                ) : (
                  <p>No attachments</p>
                )}
              </div>
            </div>
          )}

          {postType === "PHOTO" && attachments.length > 0 && (
            <div className="attachments-preview">
              {attachments
                .filter(
                  (file) =>
                    file instanceof File && file.type.startsWith("image/")
                )
                .map((file, i) => (
                  <div key={i} className="attachment-item">
                    <button
                      className="delete-btn"
                      onClick={() => removeAttachment(i)}
                      title="Remove attachment"
                    >
                      ×
                    </button>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="attachment-image"
                    />
                  </div>
                ))}
            </div>
          )}

          {postType === "VIDEO" && attachments.length > 0 && (
            <div className="attachments-preview">
              {attachments
                .filter(
                  (file) =>
                    file instanceof File && file.type.startsWith("video/")
                )
                .map((file, i) => (
                  <div key={i} className="attachment-item">
                    <button
                      className="delete-btn"
                      onClick={() => removeAttachment(i)}
                      title="Remove attachment"
                    >
                      ×
                    </button>
                    <video
                      controls
                      className="attachment-video"
                      src={URL.createObjectURL(file)}
                    />
                  </div>
                ))}
            </div>
          )}

          {postType === "DOC" && attachments.length > 0 && (
            <div className="attachments-preview">
              {attachments
                .filter(
                  (file) =>
                    file instanceof File &&
                    !file.type.startsWith("image/") &&
                    !file.type.startsWith("video/")
                )
                .map((file, i) => (
                  <div key={i} className="attachment-item">
                    <button
                      className="delete-btn"
                      onClick={() => removeAttachment(i)}
                      title="Remove attachment"
                    >
                      ×
                    </button>
                    <a
                      href={URL.createObjectURL(file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="attachment-doc"
                    >
                      📄 {file.name}
                    </a>
                  </div>
                ))}
            </div>
          )}

          {/* Previews of attachments */}

          <div className="modal-footer">
            <div className="footer-buttons">
              <button
                type="button"
                className="btn btn-danger-soft me-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success-soft"
                disabled={attachments.length === 0}
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
        {showPicker && <EmojiPickerModal onSelect={onEmojiClick} />}

        {showLinkModal && (
          <LinkModal
            onInsert={handleLinkInsert}
            onClose={() => setShowLinkModal(false)}
          />
        )}
      </div>

      {/* Modal for Blog Editor */}
      {/* {photoPost && <PhotoPost onClose={() => setPhotoPost(false)} />} */}

      {photoPost && (
        <PhotoPost
          onClose={() => setPhotoPost(false)}
          onInsert={(files, type) => {
            setAttachments((prev) => [...prev, ...files]); // Add to BlogPost attachments
            setPostType(type); // ✅ Capture post type
            setPhotoPost(false); // Close modal after adding
          }}
        />
      )}

      {/* Modal for Blog Editor */}
      {/* {videoPost && <VideoPost onClose={() => setVideoPost(false)} />} */}

      {videoPost && (
        <VideoPost
          onClose={() => setVideoPost(false)}
          onInsert={(files, type) => {
            setAttachments((prev) => [...prev, ...files]); // Add to BlogPost attachments
            setPostType(type); // ✅ Capture post type
            setVideoPost(false); // Close modal after adding
          }}
        />
      )}

      {/* Modal for Blog Editor */}
      {/* {eventPost && <CreateEventModal onClose={() => setEventPost(false)} />} */}

      {eventPost && (
        <CreateEventModal
          onClose={() => setEventPost(false)}
          onInsert={(data) => {
            setEventData((prev) => [...prev, data]); // Just add the new event object
            setPostType(data.postType); // ✅ Capture post type
            if (data.attachments) {
              setAttachments((prev) => [...prev, ...data.attachments]);
            }
            console.log("Event Data:", data);
            setEventPost(false);
          }}
        />
      )}

      {/* Modal for Blog Editor */}
      {feelingPost && (
        <CreateFeelingModal onClose={() => setFeelingPost(false)} />
      )}

      {/* Modal for Blog Editor */}
      {documentPost && <DocumentPost onClose={() => setDocumentPost(false)} />}

      {/* Modal for Blog Editor */}
      {pollPost && <PollModal onClose={() => setPollPost(false)} />}

      {/* Modal for Blog Editor */}
      {linkPost && <LinkPostModal onClose={() => setLinkPost(false)} />}

      {/* Modal for Blog Editor */}
      {blogPost && <BlogPost onClose={() => setBlogPost(false)} />}
    </>
  );
}
