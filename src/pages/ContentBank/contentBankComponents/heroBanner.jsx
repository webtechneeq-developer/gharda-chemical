import React from "react";
import { useState } from "react";
import BlogEditor from "../../BlogEditor/components/BlogEditor";

import "../../knowledgeCenter/knowledgeCenterComponents/knowledgeCenterComponent.css";
import megaphone from "../../../assets/megaphone-alt.svg"; // Importing the SVG icon

// HeroBanner component for the Knowledge Center

function HeroBanner() {
  const [activeTab, setActiveTab] = useState("hobbies"); // "text" | "pdf"
  const [activeCategory, setActiveCategory] = useState("General");
  // 2. Array of category names
  const categories = [
    "Company Policies ",
    "R&D Manuals",
    "HO - IT Policies",
    "Policies and Guidelines ",
    "Procurement - Standard Operating Procedures (SOPs)",
    "Forms & Templates",
    "Checklists & Reference Documents",
  ];
  return (
    <div className="">
      <h1 className="text-xl font-bold text-center mt-5 mb-3">Content Bank</h1>
      <BlogEditor categories={categories} />
    </div>
  );
}

export default HeroBanner;
