import React, { useState } from "react";
import { FaVideo, FaImage, FaRegNewspaper } from "react-icons/fa";
import BlogEditor from "./BlogEditor";
import "./BlogEditor.css";
import CreatePost from "./CreatePost";
import { FaTimes, FaSmile, FaCalendarAlt, FaCog, FaPlus } from "react-icons/fa";
import PhotoPost from "./PhotoPost";
import VideoPost from "./VideoPost";
import CreateEventModal from "./CreateEventPost";
import CreateFeelingModal from "./FeelingPost";
import DocumentPost from "./DocumentPost";

export default function PostComposer() {
  const [showEditor, setShowEditor] = useState(false);
  const [photoPost, setPhotoPost] = useState(false);
  const [videoPost, setVideoPost] = useState(false);
  const [eventPost, setEventPost] = useState(false);
  const [feelingPost, setFeelingPost] = useState(false);
  const [documentPost, setDocumentPost] = useState(false);
  const [content, setContent] = useState("");

  return (
    <>
      <div className="card-body card">
        <div className="d-flex mb-3">
          <div className="avatar avatar-xs me-2">
            <span role="button">
              <img
                className="avatar-img rounded-circle"
                src="https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
                alt="avatar3"
              />
            </span>
          </div>
          <form className="w-100">
            <textarea
              className="form-control pe-4 border-0"
              rows="2"
              placeholder="Share your thoughts..."
            ></textarea>
          </form>
        </div>

        <ul className="nav nav-pills nav-stack small fw-normal">
          <li
            className="nav-item"
            onClick={() => setPhotoPost(photoPost ? false : true)}
          >
            <a className="nav-link bg-light">
              <span className="icon text-success">📷</span> Photo
            </a>
          </li>

          <li
            className="nav-item"
            onClick={() => setVideoPost(videoPost ? false : true)}
          >
            <a className="nav-link bg-light">
              <span className="icon text-info">🎥</span> Video
            </a>
          </li>

          <li
            className="nav-item"
            onClick={() => setEventPost(eventPost ? false : true)}
          >
            <a className="nav-link bg-light">
              <span className="icon text-danger">📅</span> Event
            </a>
          </li>

          <li
            className="nav-item"
            onClick={() => setDocumentPost(documentPost ? false : true)}
          >
            <a className="nav-link bg-light">
              <span className="icon text-danger">📄</span> Docs
            </a>
          </li>

          <li
            className="nav-item"
            onClick={() => setFeelingPost(feelingPost ? false : true)}
          >
            <a className="nav-link bg-light">
              <span className="icon text-warning">😊</span> Feeling / Activity
            </a>
          </li>

          <div className="nav-item ms-lg-auto">
            <a className="nav-link bg-light" id="feedActionShare">
              Post
            </a>
          </div>
        </ul>
      </div>

      {/* Modal for Blog Editor */}
      {photoPost && <PhotoPost onClose={() => setPhotoPost(false)} />}

      {/* Modal for Blog Editor */}
      {videoPost && <VideoPost onClose={() => setVideoPost(false)} />}

      {/* Modal for Blog Editor */}
      {eventPost && <CreateEventModal onClose={() => setEventPost(false)} />}

      {/* Modal for Blog Editor */}
      {feelingPost && (
        <CreateFeelingModal onClose={() => setFeelingPost(false)} />
      )}

      {/* Modal for Blog Editor */}
      {documentPost && <DocumentPost onClose={() => setDocumentPost(false)} />}
    </>
  );
}
