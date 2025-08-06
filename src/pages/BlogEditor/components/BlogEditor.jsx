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
import PollModal from "./PollPost";
import LinkPostModal from "./LinkPost";
import { useApi } from "../../../hooks/useApi";
import BlogPost from "./BlogPost";

export default function PostComposer() {
  const [showEditor, setShowEditor] = useState(false);
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

  console.log("Get Raw Blog Post Data", content);

  return (
    <>
      <div className="card-body card">
        <div className="d-flex align-items-center">
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
              style={{ cursor: "pointer" }}
              onClick={() => setBlogPost(blogPost ? false : true)}
            ></textarea>
          </form>
        </div>
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

      {/* Modal for Blog Editor */}
      {pollPost && <PollModal onClose={() => setPollPost(false)} />}

      {/* Modal for Blog Editor */}
      {linkPost && <LinkPostModal onClose={() => setLinkPost(false)} />}

      {/* Modal for Blog Editor */}
      {blogPost && <BlogPost onClose={() => setBlogPost(false)} />}
    </>
  );
}
