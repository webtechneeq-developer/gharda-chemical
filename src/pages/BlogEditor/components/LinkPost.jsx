import React, { useState } from "react";

export default function LinkPostModal({ onInsert, onClose }) {
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (!linkTitle.trim() || !linkUrl.trim()) {
      alert("Please enter both a title and a valid link.");
      return;
    }

    // Format as clickable markdown-like text
    const linkText = `[${linkTitle}](${linkUrl})`;
    onInsert(linkText);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <span className="modal-title">Create Game Post</span>
          <span
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          >
            x
          </span>
        </div>

        {/* Body */}
        <div className="modal-body">
          <div className="photomodal-user-row">
            <textarea
              className="photomodal-textarea"
              placeholder="Share your thoughts..."
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Link Title */}
          <div className="col-12">
            <label className="form-label" htmlFor="linkTitle">
              Link Name
            </label>
            <input
              placeholder="Join Mario"
              name="linkTitle"
              id="linkTitle"
              className="form-control"
              value={linkTitle}
              onChange={(e) => setLinkTitle(e.target.value)}
            />
          </div>
          <br />

          {/* Link URL */}
          <div className="col-12">
            <label className="form-label" htmlFor="linkUrl">
              Link URL
            </label>
            <input
              placeholder="https://example.com"
              name="linkUrl"
              id="linkUrl"
              className="form-control"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="photomodal-btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="photomodal-btn post" onClick={handleSave}>
            Post Link
          </button>
        </div>
      </div>
    </div>
  );
}
