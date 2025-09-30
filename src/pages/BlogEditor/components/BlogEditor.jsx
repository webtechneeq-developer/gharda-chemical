import React, { useState } from "react";
import BlogPost from "./BlogPost";
import PhotoPost from "./PhotoPost";
import VideoPost from "./VideoPost";
import CreateEventModal from "./CreateEventPost";
import CreateFeelingModal from "./FeelingPost";
import DocumentPost from "./DocumentPost";
import PollModal from "./PollPost";
import LinkPostModal from "./LinkPost";
import { useApi } from "../../../hooks/useApi";

export default function PostComposer({ categories = [] }) {
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

  // Active category with safe default
  const [activeCategory, setActiveCategory] = useState(
    categories.length > 0 ? categories[0] : "General"
  );

  const handleSubmit = () => {
    console.log("Get form data before sending it to api", content);
    postData(
      "/blog-post/create",
      { content, category: activeCategory }, // include category
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

  return (
    <>
      <div className="card-body card">
        <div className="d-flex align-items-center">
          <form className="w-100 d-flex">
            <span role="button">
              <img
                className="avatar-img rounded-circle"
                src="https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
                alt="avatar3"
              />
            </span>
            <textarea
              className="form-control pe-4 border-0"
              rows="2"
              placeholder="Share your thoughts..."
              style={{ cursor: "pointer" }}
              onClick={() => setBlogPost(!blogPost)}
            ></textarea>
          </form>
        </div>
      </div>

      {/* Category Selector */}
      <div className="card-body py-2 px-3 my-2">
        <div className="d-flex justify-content-center flex-wrap gap-2">
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`btn btn1 btn-sm ${
                  activeCategory === category
                    ? "btn-dark"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>
      </div>

      {/* Modals */}
      {photoPost && <PhotoPost onClose={() => setPhotoPost(false)} />}
      {videoPost && <VideoPost onClose={() => setVideoPost(false)} />}
      {eventPost && <CreateEventModal onClose={() => setEventPost(false)} />}
      {feelingPost && (
        <CreateFeelingModal onClose={() => setFeelingPost(false)} />
      )}
      {documentPost && <DocumentPost onClose={() => setDocumentPost(false)} />}
      {pollPost && <PollModal onClose={() => setPollPost(false)} />}
      {linkPost && <LinkPostModal onClose={() => setLinkPost(false)} />}
      {blogPost && <BlogPost onClose={() => setBlogPost(false)} />}
    </>
  );
}
