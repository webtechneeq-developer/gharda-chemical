import React, { useState, useRef } from "react";
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileAlt } from "react-icons/fa";
import "./BlogEditor.css";

export default function DocumentPost({ onClose }) {
  const [attachments, setAttachments] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();
  const [content, setContent] = useState("");

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

  // Helper: Get icon for doc types
  const getDocIcon = (file) => {
    const ext = file.name.split(".").pop().toLowerCase();
    if (ext === "pdf") return <FaFilePdf className="pdf-icon" />;
    if (ext === "doc" || ext === "docx")
      return <FaFileWord className="word-icon" />;
    if (ext === "xls" || ext === "xlsx")
      return <FaFileExcel className="excel-icon" />;
    return <FaFileAlt className="default-doc-icon" />;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <span className="modal-title">Add Document Post</span>
          <span
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          >
            x
          </span>
        </div>

        {/* Modal Body */}
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
                  type="file"
                  accept=".doc,.docx,.pdf,.txt,.ppt,.xlsx,.xls"
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

        {/* Preview of attachments */}
        {attachments.length > 0 && (
          <div className="attachments-preview">
            {attachments.map((file, i) => {
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

                  {/* File preview */}
                  {isImage && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="attachment-image"
                    />
                  )}
                  {isVideo && (
                    <video controls className="attachment-video">
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                    </video>
                  )}
                  {isAudio && (
                    <audio controls className="attachment-audio">
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                    </audio>
                  )}
                  {isDoc && (
                    <div className="attachment-doc">
                      {getDocIcon(file)}
                      <span className="doc-name">{file.name}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Footer */}
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
                onInsert({ attachments });
                // Send attachments back to BlogPost
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
