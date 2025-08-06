import React, { useState, useRef } from "react";
import "./BlogEditor.css";

export default function CreateFeelingModal({ onClose }) {
  const [text, setText] = useState("");
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const textareaRef = useRef(null);

  // Handle feeling click — replace emoji if already exists
  const handleFeelingClick = (emoji, feeling) => {
    setSelectedFeeling({ emoji, feeling });

    // Remove old feeling emoji if exists (only one at a time)
    let updatedText = text;

    // Regex to remove any emoji at the start of text
    updatedText = updatedText.replace(
      /^[\p{Emoji_Presentation}\p{Emoji}\s]+/u,
      ""
    );

    // Add new emoji at the start
    const newText = `${emoji} ${updatedText}`;
    setText(newText);

    // Focus back on textarea
    setTimeout(() => {
      textareaRef.current?.focus();
      textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
        newText.length;
    }, 0);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h5 className="modal-title">Share Your Thoughts</h5>
          <span className="btn-close" onClick={onClose}>
            x
          </span>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Selected Feeling Badge */}
          {selectedFeeling && (
            <div className="feeling-badge">
              {selectedFeeling.emoji} {selectedFeeling.feeling}
            </div>
          )}
          <br />

          {/* User avatar + textarea */}
          {/* <div className="photomodal-user-row">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="photomodal-textarea"
              placeholder="Share your thoughts..."
              rows={8}
            />
          </div> */}

          {/* Emoji Icons */}
          <div className="action-icons hstack gap-2 mb-3">
            {[
              { bg: "success", icon: "🙁", feeling: "Feeling Sad" },
              { bg: "info", icon: "🥳", feeling: "Feeling Celebrating" },
              { bg: "danger", icon: "📅", feeling: "Feeling Busy" },
              { bg: "warning", icon: "😊", feeling: "Feeling Happy" },
              { bg: "light", icon: "📍", feeling: "Feeling Lost" },
              { bg: "primary", icon: "🎥", feeling: "Feeling Joy" },
            ].map((item, index) => (
              <span
                key={index}
                onClick={() => handleFeelingClick(item.icon, item.feeling)}
                className={`icon-md bg-${item.bg} bg-opacity-10 text-${item.bg} rounded-circle cursor-pointer`}
                style={{
                  fontSize: "1.5rem",
                  padding: "0.5rem",
                  cursor: "pointer",
                  border:
                    selectedFeeling?.feeling === item.feeling
                      ? `2px solid var(--bs-${item.bg})`
                      : "2px solid transparent",
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
