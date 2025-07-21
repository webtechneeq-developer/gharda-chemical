// src/components/BlogEditor.js
import React, { useState } from "react";

import axios from "axios";
import { Editor } from "primereact/editor";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [text, setText] = useState("");

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

  console.log("BlogEditor rendered", content);

  return (
    <div className="p-4">
      <input
        className="border p-2 w-full mb-4 blog-title"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="card">
        <Editor
          value={content}
          onTextChange={(e) => setContent(e.htmlValue)}
          style={{ height: "320px" }}
          placeholder="Write your blog content here..."
        />
      </div>

      <button className="blog-btn">Publish Blog</button>
    </div>
  );
}
