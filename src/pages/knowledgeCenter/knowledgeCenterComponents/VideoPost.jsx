import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import KnowledgeCenterPostCard from "./knowledgeCenterPostcard";
import "./knowledgeCenterComponent.css";
const videoPosts = [
  {
    id: 1,
    title: "FSSAI Eat Right India (Government-backed healthy eating tips)",
    username: "Author One",
    short_description: "Short desc for video 1",
    content: `
      <p>This FSSAI-produced video from the Swasth Bharat Yatra (Cyclothon) series showcases the movement’s nationwide
      journey in promoting healthy, safe, and sustainable food practices. It blends compelling visuals with short takeaways on:</p>
     
      <ul>
        <li>Community engagement in food safety initiatives</li>
        <li>Promoting nutritious eating habits</li>
        <li>Fostering public participation across diverse regions of India</li>
      </ul>`,
    created_at: "2025-07-18",
    avatar:
      "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg",
    video_url: "https://www.youtube.com/embed/O-VuQECGgKo?si=Oz_NFxpY1-5OUi2p",
  },
  {
    id: 2,
    title: "Nutritionist Rujuta Diwekar (Practical Indian diet advice)",
    username: "Author Two",
    short_description: "Short desc for video 2",
    content: `
      <p><b>Key takeaways, such as:</b></p>
     
      <ul>
        <li>Fill half your plate with fruits and vegetables</li>
        <li>Prefer home-cooked meals over packaged foods</li>
        <li>Limit salt, sugar & oil; look for “+F” fortified foods</li>
      </ul>

      <p><b>Add a small quiz or checklist, like:</b></p>
     
      <ul>
        <li>What was one easy swap suggested in the video?</li>
        <li>How can you check for fortified foods in your kitchen?</li>
      </ul>`,
    created_at: "2025-07-18",
    avatar:
      "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg",
    video_url: "https://www.youtube.com/embed/TXd_7FAzQuQ?si=C0O_vfU9dJP5mphg",
  },
  {
    id: 3,
    title: "Swastha Bharat series (Hindi + English)",
    username: "Author Three",
    short_description: "Short desc for video 3",
    content: `
      <p>Rujuta Diwekar, a leading Indian nutritionist, shares practical, science-backed food
      habits tailored for students and busy professionals. Topics include:</p>

      <ul>
        <li>Importance of regular meals during exam or work stress</li>
        <li>Balanced snack ideas to sustain energy</li>
        <li>Hydration habits and mindful eating tips</li>
        <li>Using traditional Indian foods for optimal brain function</li>
      </ul>`,
    created_at: "2025-07-18",
    avatar:
      "https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg",
    video_url: "https://www.youtube.com/embed/OaoU3z5uSNE?si=5XRAfLyJfPaEn6sZ",
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
