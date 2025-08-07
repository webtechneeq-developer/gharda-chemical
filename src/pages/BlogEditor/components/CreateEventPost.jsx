import React, { useState, useRef } from "react";
import { FaFileAlt, FaLink } from "react-icons/fa";

export default function CreateEventModal({ onClose, onInsert }) {
  const [attachments, setAttachments] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("EVENT");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input
  const onFileChange = (e) => {
    setAttachments((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  // Remove attachment
  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
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

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form>
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title" id="modalLabelCreateEvents">
              Create event
            </h5>
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
            <div className="row g-4">
              {/* Title */}
              <div className="col-12">
                <label className="form-label" htmlFor="title">
                  Title
                </label>
                <input
                  placeholder="Event name here"
                  name="title"
                  id="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              {/* Description */}
              <div className="col-12">
                <label className="form-label">Description</label>
                <textarea
                  rows="2"
                  placeholder="Ex: topics, schedule, etc."
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Date */}
              <div className="col-sm-4">
                <label className="form-label">Date</label>
                <input
                  className="form-control flatpickr-input"
                  placeholder="Select date"
                  type="text"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              {/* Time */}
              <div className="col-sm-4">
                <label className="form-label">Time</label>
                <input
                  className="form-control flatpickr-input"
                  placeholder="Select time"
                  type="text"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>

              {/* Duration */}
              <div className="col-sm-4">
                <label className="form-label" htmlFor="duration">
                  Duration
                </label>
                <input
                  placeholder="1hr 23m"
                  name="duration"
                  id="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              {/* Location */}
              <div className="col-12">
                <label className="form-label" htmlFor="location">
                  Location
                </label>
                <input
                  placeholder="Logansport, IN 46947"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

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
          </div>

          {/* Previews of attachments */}
          {attachments.length > 0 && (
            <div className="attachments-preview  modal-body">
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
                  onInsert({ ...formData, attachments, postType });
                  // Send attachments back to BlogPost
                }}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
