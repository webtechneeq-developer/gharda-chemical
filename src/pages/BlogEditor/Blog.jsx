// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
// import BlogEditor from "./components/BlogEditor";
// import BlogList from "./components/BlogList";

import BlogEditor from "./components/BlogEditor";
import BlogList from "./components/BlogList";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:4000/api/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blog Publisher</h1>
      <BlogEditor onBlogSaved={fetchBlogs} />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Blog;
