import React, { useState } from "react";
import "./BlogEditor.css";
import { Editor } from "primereact/editor";

const VideoUploader = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [content, setContent] = useState("");
  const [dragging, setDragging] = useState(false);
  const [description, setDescription] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("video/")) {
      setVideoFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("video/")) {
      setVideoFile(uploadedFile);
    }
  };

  const handlePublish = () => {
    if (videoFile) {
      console.log("Uploading video:", videoFile.name);
      console.log("With description:", description);
      // Add API call or upload logic here
      alert("Video published successfully!");
    } else {
      alert("Please upload a video first.");
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
          accept="video/*"
          id="video-upload"
          onChange={handleFileChange}
          hidden
        />
        <label htmlFor="video-upload" className="dropzone-label">
          <p className="dropzone-text">
            Drag and Drop or upload a video, or{" "}
            <span className="browse-button">browse</span>
          </p>
          {videoFile && <p className="file-name">🎬 {videoFile.name}</p>}
        </label>
      </div>

      {/* Description Text Input */}
      <div className="p-6 mt-4 max-w-4xl mx-auto space-y-6 bg-white rounded-xl">
        {/* Title input */}

        {/* Rich text editor */}
        <Editor
          value={content}
          onTextChange={(e) => setContent(e.htmlValue)}
          style={{ height: "320px" }}
          placeholder="Start writing your blog..."
        />
      </div>

      {/* Publish Button */}
      <button onClick={handlePublish} className="publish-btn">
        Publish
      </button>
    </div>
  );
};

export default VideoUploader;
