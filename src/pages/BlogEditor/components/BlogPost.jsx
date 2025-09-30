import React, { useState, useRef } from "react";
import { FaFileAlt, FaLink, FaPaperPlane, FaSmile } from "react-icons/fa";
import {
  BsImage,
  BsCameraVideo,
  BsCalendarEvent,
  BsFileEarmarkText,
} from "react-icons/bs";
import "./BlogEditor.css";
import EmojiPicker from "emoji-picker-react";
import EmojiPickerModal from "./EmojiPicker";
import LinkModal from "./LinkModal";
import { useApi } from "../../../hooks/useApi";
import PhotoPost from "./PhotoPost";
import VideoPost from "./VideoPost";
import CreateEventModal from "./CreateEventPost";
import CreateFeelingModal from "./FeelingPost";
import DocumentPost from "./DocumentPost";
import LinkPostModal from "./LinkPost";
import PollModal from "./PollPost";

export default function BlogPost({ onClose, onInsert }) {
  const [attachments, setAttachments] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();
  const [showPicker, setShowPicker] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [storedHtml, setStoredHtml] = useState(""); // HTML version for rendering
  const [photoPost, setPhotoPost] = useState(false);
  const [videoPost, setVideoPost] = useState(false);
  const [eventPost, setEventPost] = useState(false);
  const [feelingPost, setFeelingPost] = useState(false);
  const [documentPost, setDocumentPost] = useState(false);
  const [pollPost, setPollPost] = useState(false);
  const [linkPost, setLinkPost] = useState(false);
  const [blogPost, setBlogPost] = useState(false);
  const [content, setContent] = useState("");
  const { postData, isLoading, response, error } = useApi();
  const [postType, setPostType] = useState("");

  // FIX: Add this line to create the 'category' state
  const [category, setCategory] = useState("");

  const textareaRef = useRef(null);

  const handleSubmit = () => {
    console.log("Get form data before sending it to api", content);
    postData(
      "/blog-post/create",
      { content },
      {
        onSuccess: (res) => {
          console.log("✅ Blog Posted:", res);
          onClose();
        },
        onError: (err) => {
          console.error("❌ Error Posting Blog:", err);
        },
      }
    );
  };

  const onEmojiClick = (emoji) => {
    const textarea = textareaRef.current;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newText =
        content.substring(0, start) + emoji + " " + content.substring(end);
      setContent(newText);

      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd =
          start + emoji.length + 1;
        textarea.focus();
      }, 0);
    } else {
      setContent((prev) => prev + emoji);
    }
  };

  const handleLinkInsert = (linkText, linkUrl) => {
    const newLink = {
      type: "link",
      text: linkText,
      url: linkUrl,
    };
    setAttachments((prev) => [...prev, newLink]);
  };

  const categories = [
    "Artificial Intelligence",
    "Environment",
    "Technology",
    "Education",
  ];

  const placeholderAvatar =
    "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg";

  const onFileChange = (e) => {
    setAttachments((prev) => [...prev, ...Array.from(e.target.files)]);
  };

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

  const removeAttachment = (index) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content custom-modal">
          <div className="modal-header custom-header">
            <span className="modal-title">Create Post</span>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-2">
              {/* <label className="form-label fw-semibold">
                Select Category <span className="text-danger">*</span>
              </label> */}
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">
                  Select Category<span className="text-danger">*</span>
                </option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <hr></hr>
            </div>
            <textarea
              className="form-control custom-textarea"
              placeholder="Share your thoughts...."
              rows={12}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <hr></hr>
          <div className="modal-footer custom-footer d-flex align-items-center justify-content-between">
            <div className="d-flex gap-3">
              <button className="icon-btn">
                <BsImage />
              </button>
              <button className="icon-btn">
                <BsCameraVideo />
              </button>
              <button className="icon-btn">
                <BsCalendarEvent />
              </button>
              <button className="icon-btn">
                <BsFileEarmarkText />
              </button>
            </div>
            <div className="d-flex gap-3">
              <button className="icon-btn">
                <FaLink />
              </button>
              <button className="icon-btn">
                <FaSmile />
              </button>
              <button className="icon-btn send-btn" onClick={handleSubmit}>
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      {photoPost && (
        <PhotoPost
          onClose={() => setPhotoPost(false)}
          onInsert={(files, type) => {
            setAttachments((prev) => [...prev, ...files]);
            setPostType(type);
            setPhotoPost(false);
          }}
        />
      )}

      {videoPost && (
        <VideoPost
          onClose={() => setVideoPost(false)}
          onInsert={(files, type) => {
            setAttachments((prev) => [...prev, ...files]);
            setPostType(type);
            setVideoPost(false);
          }}
        />
      )}

      {eventPost && (
        <CreateEventModal
          onClose={() => setEventPost(false)}
          onInsert={(data) => {
            setEventData((prev) => [...prev, data]);
            setPostType(data.postType);
            if (data.attachments) {
              setAttachments((prev) => [...prev, ...data.attachments]);
            }
            setEventPost(false);
          }}
        />
      )}
    </>
  );
}
