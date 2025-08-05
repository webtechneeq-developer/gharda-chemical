import React, { useState, useRef } from "react";

export default function CreateEventModal({ onClose }) {
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
                ></textarea>
              </div>

              {/* Date */}
              <div className="col-sm-4">
                <label className="form-label">Date</label>
                <input
                  className="form-control flatpickr-input"
                  placeholder="Select date"
                  type="text"
                  readOnly
                />
              </div>

              {/* Time */}
              <div className="col-sm-4">
                <label className="form-label">Time</label>
                <input
                  className="form-control flatpickr-input"
                  placeholder="Select time"
                  type="text"
                  readOnly
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

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger-soft me-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success-soft">
              Create now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
