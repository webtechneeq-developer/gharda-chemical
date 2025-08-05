import React, { useState, useRef } from "react";
import "./BlogEditor.css";

export default function CreateFeelingModal({ onClose }) {
  const [text, setText] = useState(""); // State for textarea
  const textareaRef = useRef(null); // Ref for placing cursor

  // Function to add emoji into textarea
  const addEmoji = (emoji) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newText =
        text.substring(0, start) + emoji + " " + text.substring(end);
      setText(newText);

      // Move cursor after emoji
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd =
          start + emoji.length + 1;
        textarea.focus();
      }, 0);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h5 className="modal-title" id="modalLabelCreateFeed">
            Share Your Thoughts
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
          {/* User avatar + textarea */}
          <div className="photomodal-user-row">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="photomodal-textarea"
              placeholder="Share your thoughts..."
              rows={8}
            />
          </div>

          {/* Emoji Icons */}
          <div className="action-icons hstack gap-2 mb-3">
            {[
              { bg: "success", icon: "🙁" },
              { bg: "info", icon: "🥳" },
              { bg: "danger", icon: "📅" },
              { bg: "warning", icon: "😊" },
              { bg: "light", icon: "📍" },
              { bg: "primary", icon: "🎥" },
            ].map((item, index) => (
              <span
                key={index}
                onClick={() => addEmoji(item.icon)}
                className={`icon-md bg-${item.bg} bg-opacity-10 text-${item.bg} rounded-circle cursor-pointer`}
                style={{
                  fontSize: "1.5rem",
                  padding: "0.5rem",
                  cursor: "pointer",
                }}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>

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
            <button type="submit" className="btn btn-success-soft">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
