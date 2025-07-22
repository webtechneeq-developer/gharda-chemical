import React, { useState } from "react";
import axios from "axios";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./BlogEditor.css"; // ← Import the CSS
import { FaPaperclip } from "react-icons/fa"; // You can use any icon

export default function BlogEditor() {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSave = async () => {
    if (!content) return alert("Please fill all fields");

    const formData = new FormData();
    formData.append("content", content);
    if (file) formData.append("attachment", file);

    try {
      const res = await axios.post("http://localhost:4000/api/blog", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Blog saved:", res.data);
      alert("Blog published!");
      setContent("");
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("Failed to publish blog");
    }
  };

  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto space-y-6 bg-white rounded-xl">
        {/* Title input */}

        {/* Rich text editor */}
        <Editor
          value={content}
          onTextChange={(e) => setContent(e.htmlValue)}
          style={{ height: "320px" }}
          placeholder="Start writing your blog..."
        />
      </div>
      {/* Sumbit Button */}
      <button onClick={handleSave} className="publish-btn">
        Publish
      </button>
    </div>
  );
}
