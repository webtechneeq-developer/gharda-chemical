// src/components/BlogEditor.js
import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";

export default function BlogEditor({ onBlogSaved }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const handleSave = async () => {
  //   if (!title || !content) return alert("Please fill all fields");

  //   const res = await axios.post("http://localhost:4000/api/blog", {
  //     title,
  //     content,
  //   });

  //   onBlogSaved(res.data);
  //   setTitle("");
  //   setContent("");
  // };

  return (
    <div className="p-4">
      <input
        className="border p-2 w-full mb-4"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill value={content} onChange={setContent} />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2">
        Publish Blog
      </button>
    </div>
  );
}
