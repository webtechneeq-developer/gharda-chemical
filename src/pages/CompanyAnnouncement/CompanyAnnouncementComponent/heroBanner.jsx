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
    "General ",
    "Awards & Certification",
    "HR Updates",
    "Products ",
    "Informal Announcements related to lifestyle",
    "GARC Updates",
    "New school",
    "Admissions etc",
  ];
  return (
    <div className="container">
      <h1 className="text-xl font-bold text-center mt-5 mb-3">
        Company Announcement
      </h1>
      <BlogEditor categories={categories} />
      {/* <div className="">
        <div class="filter-tab">
          <div class="quick-filters item-list-tabs block-box unplugged-timeline-header">
            <ul class="quick-filters-tabs menu-list d-md-block">
              <li
                className={`tab-btn ${activeTab === "hobbies" ? "active" : ""}`}
                onClick={() => setActiveTab("hobbies")}
                style={{ cursor: "pointer" }}
              >
                <a>General </a>
              </li>
              <li
                className={`tab-btn ${activeTab === "recipes" ? "active" : ""}`}
                onClick={() => setActiveTab("recipes")}
                style={{ cursor: "pointer" }}
              >
                <a>Awards & Certification</a>
              </li>
              <li
                className={`tab-btn ${
                  activeTab === "traditions" ? "active" : ""
                }`}
                onClick={() => setActiveTab("traditions")}
                style={{ cursor: "pointer" }}
              >
                <a>HR Updates</a>
              </li>
              <li
                className={`tab-btn ${activeTab === "blogs" ? "active" : ""}`}
                onClick={() => setActiveTab("blogs")}
                style={{ cursor: "pointer" }}
              >
                <a>Products </a>
              </li>
              <li
                className={`tab-btn ${activeTab === "desk" ? "active" : ""}`}
                onClick={() => setActiveTab("desk")}
                style={{ cursor: "pointer" }}
              >
                <a>Informal Announcements related to lifestyle</a>
              </li>
              <li
                className={`tab-btn ${activeTab === "updates" ? "active" : ""}`}
                onClick={() => setActiveTab("updates")}
                style={{ cursor: "pointer" }}
              >
                <a>GARC Updates</a>
              </li>
              <li
                className={`tab-btn ${activeTab === "school" ? "active" : ""}`}
                onClick={() => setActiveTab("school")}
                style={{ cursor: "pointer" }}
              >
                <a>New school </a>
              </li>
              <li
                className={`tab-btn ${
                  activeTab === "admissions" ? "active" : ""
                }`}
                onClick={() => setActiveTab("admissions")}
                style={{ cursor: "pointer" }}
              >
                <a>Admissions etc</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HeroBanner;
