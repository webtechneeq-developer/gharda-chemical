// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogEditor from "./components/BlogEditor";
import PdfDropzone from "./components/PdfDropBox";
import "./Blog.css"; // We'll use this for styling the tabs

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("text"); // "text" | "pdf"

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get("http://localhost:4000/api/blogs");
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="container content-bank-container max-w-4xl mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Article Publisher</h1>

      <div className="tab-header">
        <span
          className={`tab-btn ${activeTab === "text" ? "active" : ""}`}
          onClick={() => setActiveTab("text")}
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
      </div>

      <div className="tab-content">
        {activeTab === "text" && <BlogEditor />}
        {activeTab === "pdf" && <PdfDropzone />}
      </div>
    </div>
  );
}

export default Blog;
