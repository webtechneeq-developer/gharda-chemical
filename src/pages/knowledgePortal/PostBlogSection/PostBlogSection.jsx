import React, { useEffect, useState } from "react";
import "./PostBlogSection.css";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";

const PostBlogSection = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const { postData } = useApi();
  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    await postData(
      "blog-data",
      {
        sort_coloumn: "id",
        blog_type: "B",
        limit_per_page: 3,
        type: "P",
      },
      {
        onSuccess: (res) => {
          setPosts(res?.data?.data);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  const truncateHTML = (html, maxLength) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="container post-blog-section">
      <div className="bg-left">
        <div className="row g-0">
          {/* Left Side: Latest Posts */}
          <div className="col-lg-6 col-12">
            <div className="content-wrapper">
              <h4 className="section-title">Latest Post</h4>

              {posts.map((post, index) => (
                <div
                  key={index}
                  className="post-item d-flex mb-4"
                  onClick={() => navigate(`/articles/${post.id}`)}
                >
                  <img
                    src={post.document_full_url}
                    alt="Post"
                    style={{
                      maxHeight: "170px",
                      minWidth: "285px",
                      borderRadius: "6px",
                    }}
                  />
                  <div>
                    <p className="post-meta">
                      {post.username} – {post.created_at}
                    </p>
                    <h6 className="post-title">{post.title}</h6>
                    <p
                      className="post-summary"
                      dangerouslySetInnerHTML={{
                        __html: truncateHTML(post.short_description, 75),
                      }}
                    ></p>
                  </div>
                </div>
              ))}

              <div className="general-achievement">General Achievement</div>
            </div>
          </div>

          {/* Right Side: Brain Teaser */}
          <div className="col-lg-6 col-12">
            <div className="teaser-card p-4 text-white position-relative">
              <span className="bg_danger position-absolute">Question #283</span>
              <div className="mt-auto pt-5">
                <p className="teaser-date">– 03 June 2025</p>
                <h3 className="teaser-title">
                  DISCOVER THE QUESTIONS AND UNLOCK YOU BRAINS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBlogSection;
