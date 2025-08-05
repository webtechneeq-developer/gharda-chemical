import React, { useState } from "react";

export default function PollModal({ onInsert, onClose }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([""]);
  const [content, setContent] = useState("");

  const handleOptionChange = (value, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  const handleSave = () => {
    if (!question.trim() || options.filter((o) => o.trim()).length < 2) {
      alert("Please enter a question and at least 2 options.");
      return;
    }

    const pollText = `📊 Poll: ${question}\n${options
      .map((opt, i) => `- ${opt}`)
      .join("\n")}`;

    onInsert(pollText);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span className="modal-title">Create Poll</span>
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
          <div className="photomodal-user-row">
            <textarea
              className="photomodal-textarea"
              placeholder="Share your thoughts..."
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

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
          <br />

          <div className="poll-options">
            <label className="form-label" htmlFor="title">
              Options
            </label>
            {options.map((opt, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: "6px", marginBottom: "5px" }}
              >
                <input
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  value={opt}
                  onChange={(e) => handleOptionChange(e.target.value, i)}
                  className="form-control"
                />
                {options.length > 1 && (
                  <span
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => removeOption(i)}
                  >
                    x
                  </span>
                )}
              </div>
            ))}
          </div>

          <button className="photomodal-btn cancel" onClick={addOption}>
            Add Option
          </button>
        </div>

        <div className="modal-footer">
          <button className="photomodal-btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="photomodal-btn post">Post</button>
        </div>
      </div>
    </div>
  );
}
