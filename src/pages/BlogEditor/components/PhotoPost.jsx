import React, { useState, useRef } from "react";
import { FaFileAlt, FaLink } from "react-icons/fa";
import "./BlogEditor.css";
import EmojiPicker from "emoji-picker-react";
import EmojiPickerModal from "./EmojiPicker";
import LinkModal from "./LinkModal";
import { useApi } from "../../../hooks/useApi";

export default function PhotoPost({ onClose, onInsert }) {
  const [attachments, setAttachments] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();
  const [content, setContent] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [storedHtml, setStoredHtml] = useState(""); // HTML version for rendering
  const { postData, isLoading, response, error } = useApi();
  const [postType, setPostType] = useState("PHOTO");

  const textareaRef = useRef(null);

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
    const selectedFiles = Array.from(e.target.files);
    const newTotal = attachments.length + selectedFiles.length;

    if (newTotal > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    setAttachments((prev) => [...prev, ...selectedFiles]);
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

  console.log("Get PhotoPost Data", content, attachments);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">Add Photo</span>
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
          {/* <div className="photomodal-user-row">
            <textarea
              className="photomodal-textarea"
              placeholder="Share your thoughts..."
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div> */}

          {/* <div
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
          </div> */}

          <br />

          {/* File Upload */}
          <div className="mb-3">
            <label className="form-label">Upload attachment</label>
            <div
              className="dropzone dropzone-custom cursor-pointer"
              onClick={() => fileInputRef.current.click()}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <div className="dz-message" role="presentation" tabIndex="0">
                <input
                  ref={fileInputRef}
                  multiple
                  accept="image/*"
                  type="file"
                  tabIndex="-1"
                  style={{ display: "none" }}
                  onChange={onFileChange} // 🔹 FIX: Now updates attachments
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="display-3"
                  height="1em"
                  width="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                </svg>
                <p></p>
              </div>
            </div>
            <small className="form-text">
              Drop presentation and document here or click to upload.
            </small>
          </div>
        </div>

        {/* Previews of attachments */}
        {attachments.length > 0 && (
          <div className="attachments-preview">
            {attachments.map((file, i) => {
              const isFileObj = file instanceof File; // Distinguish file vs link
              const isImage = file.type.startsWith("image/");
              const isVideo = file.type.startsWith("video/");
              const isAudio = file.type.startsWith("audio/");
              const isDoc = !isImage && !isVideo && !isAudio;

              return (
                <div key={i} className="attachment-item">
                  {/* Delete button */}
                  <button
                    className="delete-btn"
                    onClick={() => removeAttachment(i)}
                    title="Remove attachment"
                  >
                    ×
                  </button>

                  {/* Render preview */}
                  {isFileObj ? (
                    <>
                      {file.type.startsWith("image/") && (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="attachment-image"
                        />
                      )}
                      {file.type.startsWith("video/") && (
                        <video controls className="attachment-video">
                          <source
                            src={URL.createObjectURL(file)}
                            type={file.type}
                          />
                        </video>
                      )}
                      {file.type.startsWith("audio/") && (
                        <audio controls className="attachment-audio">
                          <source
                            src={URL.createObjectURL(file)}
                            type={file.type}
                          />
                        </audio>
                      )}
                      {!file.type.startsWith("image/") &&
                        !file.type.startsWith("video/") &&
                        !file.type.startsWith("audio/") && (
                          <div className="attachment-file">
                            <FaFileAlt /> {file.name}
                          </div>
                        )}
                    </>
                  ) : (
                    file.type === "link" && (
                      <div className="attachment-item-link">
                        <FaLink style={{ marginRight: "5px" }} />
                        <a href={file.url} target="_blank" rel="noreferrer">
                          {file.text}
                        </a>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>
        )}

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
              onClick={() => {
                onInsert(attachments, postType); // Send attachments back to BlogPost
              }}
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
  );
}
