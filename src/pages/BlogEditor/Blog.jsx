// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogEditor from "./components/BlogEditor";
import PdfDropzone from "./components/PdfDropBox";
import "./Blog.css"; // We'll use this for styling the tabs
import VideoUploader from "./components/VideoEditor";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState(""); // "text" | "pdf"

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:4000/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container content-bank-container max-w-4xl mx-auto py-6">
      <h1 className="text-xl font-bold text-center mb-6">Article Publisher</h1>

      {/* <div className="tab-header">
        <span
          className={`tab-btn ${activeTab === "post" ? "active" : ""}`}
          onClick={() => setActiveTab("post")}
          style={{ cursor: "pointer" }}
        >
          Text
        </span>
        <span
          className={`tab-btn ${activeTab === "pdf" ? "active" : ""}`}
          onClick={() => setActiveTab("pdf")}
          style={{ cursor: "pointer" }}
        >
          PDF
        </span>
        <span
          className={`tab-btn ${activeTab === "video" ? "active" : ""}`}
          onClick={() => setActiveTab("video")}
          style={{ cursor: "pointer" }}
        >
          Video
        </span>
      </div> */}

      <div className="tab-content">
        <BlogEditor />
      </div>

      <br />
    </div>
  );
}

export default Blog;
