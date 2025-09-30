// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogEditor from "./components/BlogEditor";
import "./Blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  // Categories defined here (parent)
  const categories = [
    "E-Books",
    "Health Tips",
    "Nutrition Tips",
    "Financial Tips & Investment Insights",
    "Learning & Development",
    "Artificial Intelligence",
    "Environment Tips",
  ];

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
      <div className="tab-content">
        {/* Pass categories as props */}
        <BlogEditor categories={categories} />
      </div>
    </div>
  );
}

export default Blog;
