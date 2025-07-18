import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
const postsLeft = [
  {
    image: "/images/Chemical-Product.png",
    description:
      "Things move quickly in the mobile app universe. To succeed in the field of mobile UX design, designers must have the foresight and prepare for new challenges around the corner",
    title: "Chemical Product Launch - Mumbai Plant",
    author: "Joe Kartner",
    date: "July 14, 2022",
    avatar: "/images/Jon-Kantner.svg",
    url: "/chemical-blogs",
  },
  {
    image: "/images/Squirrel.png",
    description:
      "Why it helps to know what it’s like, and the exquisite beauty of empathy These days, the wood patio area just outside my kitchen door is a riot ",
    title: "What A Disabled Squirrel Taught Me About Life",
    author: "James",
    date: "July 12, 2022",
    avatar: "/images/James.png",
    url: "/categories",
  },
  {
    image: "/images/Designer.png",
    description:
      "Many outsiders believe that designers are unicorns, gifted or special in some way. We have an innate ability to create gorgeous interfaces, a natural talent for matching complementary colors, an unexplainable intuition",
    title: "How To Become A Master Designer",
    author: "Linda",
    date: "July 10, 2022",
    avatar: "/images/Linda.png",
    url: "/categories",
  },
];

const postsRight = [
  {
    image: "/images/fishing.png",
    description:
      "Cast from the rocks to bring home fresh fish tacos in this iconic spring and summer fishery. — Are you looking to go fishing and bring home deliciou",
    title: "No Boot Bottomfish: Jetty Fishing On The...",
    author: "Louie Hoetingers",
    date: "July 19, 2022",
    avatar: "/images/Louis-Hoebregts.png",
  },
  {
    image: "/images/Car.png",
    description:
      "How I left my full-time job, studied at Udacity, and landed a job at BMW The past year has been quite a journey for me. A year ago I left my full-time",
    title: "Becoming A Self-Driving Car & Machine Learning...",
    author: "Cassie Evans",
    date: "July 17, 2022",
    avatar: "/images/Cassie-Evans.png",
  },
  {
    image: "/images/music.png",
    description:
      "A Berlin-based music software company, just released a free interactive music course that runs right in your browser. One thing that",
    title: "This Free Course Can Teach You Music",
    author: "Patricia",
    date: "July 9, 2022",
    avatar: "/images/Patricia.png",
  },
];

const LatestPosts = () => {
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
          <h5 className="mb-0">Latest Posts</h5>
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
        {posts?.map((post) => (
          <div
            className="col-lg-6 d-flex flex-column gap-4"
            key={post.id}
            style={{ marginBottom: "16px" }}
          >
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
