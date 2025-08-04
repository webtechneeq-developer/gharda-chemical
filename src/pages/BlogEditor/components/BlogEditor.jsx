import React, { useState } from "react";
import { FaVideo, FaImage, FaRegNewspaper } from "react-icons/fa";
import BlogEditor from "./BlogEditor";
import "./BlogEditor.css";
import CreatePost from "./CreatePost";
import { FaTimes, FaSmile, FaCalendarAlt, FaCog, FaPlus } from "react-icons/fa";

export default function PostComposer() {
  const [showEditor, setShowEditor] = useState(false);
  const [content, setContent] = useState("");

  return (
    <>
      <div className="composer-box">
        <div className="composer-header">
          <div className="avatar" />
          <input
            type="text"
            className="start-post"
            placeholder="Start a post"
            onClick={() => setShowEditor(true)}
            readOnly
          />
        </div>
        <div className="composer-actions">
          <button onClick={() => setShowEditor(true)}>
            <FaVideo className="icon video" />
            Video
          </button>
          <button onClick={() => setShowEditor(true)}>
            <FaImage className="icon photo" />
            Photo
          </button>
          <button onClick={() => setShowEditor(true)}>
            <FaRegNewspaper className="icon article" />
            Write article
          </button>
        </div>
      </div>

      {/* Modal for Blog Editor */}
      {showEditor && <CreatePost onClose={() => setShowEditor(false)} />}
    </>
  );
}
