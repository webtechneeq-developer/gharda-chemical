import React, { useState, useRef } from "react";
import "./BlogEditor.css";

export default function VideoPost({ onClose, onInsert }) {
  const [attachments, setAttachments] = useState([]);
  const [videos, setVideos] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("VIDEO");

  const placeholderAvatar =
    "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg";

  // File input change
  const onFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newTotal = attachments.length + selectedFiles.length;

    if (newTotal > 1) {
      alert("You can upload a maximum of 1 Video.");
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
      setVideos([...videos, ...Array.from(e.dataTransfer.files)]);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">Add Video</span>
          <span
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          >
            x
          </span>
        </div>

        <div className="modal-body">
          {/* <div className="photomodal-user-row">
            <textarea
              className="photomodal-textarea"
              placeholder="Share your thoughts..."
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div> */}

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
                  accept="video/*"
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
    </div>
  );
}
