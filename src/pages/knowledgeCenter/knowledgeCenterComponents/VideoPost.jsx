import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import KnowledgeCenterPostCard from "./knowledgeCenterPostcard";
const videoPosts = [
  {
    id: 1,
    title: "First Video",
    username: "Author One",
    short_description: "Short desc for video 1",
    created_at: "2025-07-18",
    user_image_full_url: "https://example.com/user1.jpg",
    video_url: "https://www.youtube.com/embed/O-VuQECGgKo?si=Oz_NFxpY1-5OUi2p",
    avatar:
      "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg",
  },
  {
    id: 2,
    title: "Second Video",
    username: "Author Two",
    short_description: "Short desc for video 2",
    created_at: "2025-07-18",
    user_image_full_url: "https://example.com/user2.jpg",
    video_url: "https://www.youtube.com/embed/TXd_7FAzQuQ?si=C0O_vfU9dJP5mphg",
    avatar:
      "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg",
  },
  {
    id: 3,
    title: "Third Video",
    username: "Author Three",
    short_description: "Short desc for video 3",
    created_at: "2025-07-18",
    user_image_full_url: "https://example.com/user3.jpg",
    video_url: "https://www.youtube.com/embed/OaoU3z5uSNE?si=5XRAfLyJfPaEn6sZ",
    avatar:
      "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg",
  },
];

const VideoPosts = () => {
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
          <h5 className="mb-0">Video Posts</h5>
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
        {videoPosts?.map((post) => (
          <div
            className="col-lg-6 d-flex flex-column gap-4"
            key={post.id}
            style={{ marginBottom: "16px" }}
          >
            <KnowledgeCenterPostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPosts;
