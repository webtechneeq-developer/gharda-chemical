import React, { useState, useRef } from "react";
import "./BlogEditor.css";
import {
  FaTimes,
  FaSmile,
  FaImage,
  FaCalendarAlt,
  FaCog,
  FaPlus,
  FaVideo,
  FaFileAlt,
  FaFileExcel,
  FaFileAudio,
  FaLink,
} from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";

export default function CreatePost({ onClose }) {
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState([]); // store attached files info
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [links, setLinks] = useState([]);

  // Refs for file inputs (hidden)
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const audioInputRef = useRef(null);
  const docInputRef = useRef(null);
  const excelInputRef = useRef(null);

  // Insert emoji into content at cursor position
  const textareaRef = useRef(null);

  const onEmojiClick = (emojiObject, event) => {
    const emoji = emojiObject.emoji;
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const newText =
      content.substring(0, start) + emoji + content.substring(end);
    setContent(newText);

    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + emoji.length;
      textarea.focus();
    }, 0);
  };

  const insertLink = () => {
    const url = prompt("Enter the URL");
    if (!url) return;

    // Insert markdown link into textarea content (optional)
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const markdownLink = `[link](${url})`;
    const newText =
      content.substring(0, start) + markdownLink + content.substring(end);
    setContent(newText);

    setLinks((prev) => [...prev, url]); // Add URL to links state

    setTimeout(() => {
      const pos = start + markdownLink.length;
      textarea.selectionStart = textarea.selectionEnd = pos;
      textarea.focus();
    }, 0);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments((prev) => [...prev, ...files]);
  };

  // Trigger file input click
  const triggerFileInput = (type) => {
    switch (type) {
      case "image":
        imageInputRef.current.click();
        break;
      case "video":
        videoInputRef.current.click();
        break;
      case "audio":
        audioInputRef.current.click();
        break;
      case "doc":
        docInputRef.current.click();
        break;
      case "excel":
        excelInputRef.current.click();
        break;
      default:
        break;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <span>Create a post</span>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-box">
          <textarea
            ref={textareaRef}
            className="post-input"
            placeholder="What do you want to talk about?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {/* Show emoji picker below the textarea when toggled */}
          {showEmojiPicker && (
            <div className="emoji-picker-wrapper">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )}

          {/* Previews of attachments */}
          <div className="attachments-preview">
            {attachments.map((file, i) => {
              const isImage = file.type.startsWith("image/");
              const isVideo = file.type.startsWith("video/");
              const isAudio = file.type.startsWith("audio/");
              const isDoc = !isImage && !isVideo && !isAudio; // others are treated as doc/spreadsheet etc

              return (
                <div key={i} className="attachment-item">
                  {/* Delete button, shown on hover */}
                  <button
                    className="delete-btn"
                    onClick={() =>
                      setAttachments((prev) =>
                        prev.filter((_, idx) => idx !== i)
                      )
                    }
                    title="Remove attachment"
                  >
                    ×
                  </button>

                  {/* Render attachment */}
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
                    <div className="attachment-file">
                      <FaFileAlt /> {file.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="post-footer">
            <div className="left-buttons">
              <button className="rewrite-btn">✨ Rewrite with AI</button>
              {/* Emoji button */}
              <FaSmile
                className="footer-icon"
                onClick={() => setShowEmojiPicker((v) => !v)}
                title="Add Emoji"
              />
              <FaImage
                className="footer-icon"
                onClick={() => triggerFileInput("image")}
                title="Add Image"
              />
              <FaVideo
                className="footer-icon"
                onClick={() => triggerFileInput("video")}
                title="Add Video"
              />
              <FaFileAudio
                className="footer-icon"
                onClick={() => triggerFileInput("audio")}
                title="Add Audio"
              />
              <FaFileAlt
                className="footer-icon"
                onClick={() => triggerFileInput("doc")}
                title="Add Document"
              />
              <FaFileExcel
                className="footer-icon"
                onClick={() => triggerFileInput("excel")}
                title="Add Spreadsheet"
              />
              <FaLink
                className="footer-icon"
                onClick={insertLink}
                title="Add Link"
              />

              <FaCog className="footer-icon" />
              <FaPlus className="footer-icon" />
            </div>
            <button
              className="post-btn"
              disabled={!content.trim() && attachments.length === 0}
            >
              Post
            </button>
          </div>

          {/* Hidden file inputs */}
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            ref={imageInputRef}
            onChange={handleFileChange}
          />
          <input
            type="file"
            accept="video/*"
            multiple
            style={{ display: "none" }}
            ref={videoInputRef}
            onChange={handleFileChange}
          />
          <input
            type="file"
            accept="audio/*"
            multiple
            style={{ display: "none" }}
            ref={audioInputRef}
            onChange={handleFileChange}
          />
          <input
            type="file"
            accept=".doc,.docx,.pdf,.txt"
            multiple
            style={{ display: "none" }}
            ref={docInputRef}
            onChange={handleFileChange}
          />
          <input
            type="file"
            accept=".xls,.xlsx,.csv"
            multiple
            style={{ display: "none" }}
            ref={excelInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}
