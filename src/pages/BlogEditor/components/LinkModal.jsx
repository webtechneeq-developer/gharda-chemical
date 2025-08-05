import React, { useState } from "react";
import "./BlogEditor.css";

export default function LinkModal({ onInsert, onClose }) {
  const [linkText, setLinkText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const handleInsert = () => {
    if (!linkText || !linkUrl) return;
    const formattedLink = `[${linkText}](${linkUrl})`;
    onInsert(formattedLink);
    onClose();
  };

  return (
    <div className="emoji-container">
      <div className="modal-content">
        <div className="modal-header">
          <h5>Insert Link</h5>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <label className="form-label">Display Name</label>
          <input
            className="form-control flatpickr-input"
            type="text"
            placeholder="Link Text (e.g. Gharda Website)"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
          />
          <br />

          <label className="form-label">URL</label>
          <input
            className="form-control flatpickr-input"
            type="url"
            placeholder="Link URL (e.g. https://example.com)"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
        </div>

        <div className="modal-footer">
          <button className="photomodal-btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="photomodal-btn post">Save</button>
        </div>
      </div>
    </div>
  );
}
