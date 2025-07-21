import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import KnowledgeCenterPostCard from "./knowledgeCenterPostcard";
import PostCard from "../../Home/commonHome/PostCard";
import greenLiving from "../../../assets/green-living.webp";
import BlogPostCard from "./knowledgeCenterBlogPostCard";

const postsLeft = [
  {
    id: 1,
    image: greenLiving,
    short_description:
      "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
    title: "Green Living",
    username: " Amar​",
    author: "Posted by Amar​",
    created_at: "July 14, 2022",
    avatar:
      "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg",
    url: "/chemical-blogs",
  },
];

const BlogPosts = () => {
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
        sort_order: "DESC",
        sort_coloumn: "id",
        blog_type: "B",
        limit_per_page: 6,
        type: "P",
      },
      {
        onSuccess: (res) => {
          setPosts(res?.data?.data);
          console.log(res?.data?.data);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  return (
    <div className="container latest-post-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center ">
          <div className="text-danger-dot"></div>
          <h5 className="mb-0">Blog Posts</h5>
        </div>
        <button
          className="btn chevron-right-btn d-flex align-items-center gap-1"
          onClick={() => navigate("/categories/all")}
        >
          Show All
          <ChevronRightIcon
            style={{ width: "16px", height: "16px", color: "#3E323280" }}
          />
        </button>
      </div>

      <div className="row">
        {postsLeft?.map((post) => (
          <div
            className="col-lg-6 d-flex flex-column gap-4"
            key={post.id}
            style={{ marginBottom: "16px" }}
          >
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
