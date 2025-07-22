import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import "./BlogEditor.css";

const PdfDropzone = () => {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    }
  };

  return (
    <div>
      <div
        className={`pdf-dropzone ${dragging ? "dragging" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          type="file"
          accept="application/pdf"
          id="pdf-upload"
          onChange={handleFileChange}
          hidden
        />
        <label htmlFor="pdf-upload" className="dropzone-label">
          <p className="dropzone-text">
            Drag and Drop or upload media, or{" "}
            <span className="browse-button">browse</span>
          </p>
          {file && <p className="file-name">📎 {file.name}</p>}
        </label>
      </div>
      {/* Sumbit Button */}
      <button onClick={handleFileChange} className="publish-btn">
        Publish
      </button>
    </div>
  );
};

export default PdfDropzone;
