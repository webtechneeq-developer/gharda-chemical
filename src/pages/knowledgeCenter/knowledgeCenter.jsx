import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import { Check } from "lucide-react";
import { Card } from "react-bootstrap";
import PostHeader from "../Categories/PostHeaderProps";
import PostContent from "../Categories/PostContentProps";
import PostActions from "../Categories/PostActionsProps";
import Blog from "../BlogEditor/Blog";

const KnowledgeCenter = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { postData } = useApi();

  const [allPosts, setAllPosts] = useState([]);
  const [showSelectedPost, setShowSelectedPost] = useState([]);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(
    params.name || "all"
  );
  const [categoriesRaw, setCategoriesRaw] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("post"); // "text" | "pdf"

  // Helper: Convert category name to slug
  const getSlug = (name) => name.toLowerCase().replace(/\s+/g, "_");

  const categories = categoriesRaw.map((name) => ({
    name,
    slug: getSlug(name),
  }));

  const handleLike = () => setIsLiked(!isLiked);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      handleCategoryClick(params.name || "all");
    }
  }, [params.name, categories.length]);

  const fetchPosts = async () => {
    await postData(
      "blog-data",
      {
        sort_order: "DESC",
        sort_coloumn: "id",
        blog_type: "B",
        type: "P",
      },
      {
        onSuccess: (res) => {
          const data = res?.data?.data || [];
          setAllPosts(data);

          const uniqueNames = Array.from(
            new Set(data.map((p) => p.category_name))
          );
          const paramSlug = params.name;
          const paramNameFromSlug = paramSlug
            ? paramSlug.replace(/_/g, " ").toLowerCase()
            : "";

          const match = uniqueNames.find((name) => getSlug(name) === paramSlug);

          // Add category from param if not in list but exists in data
          if (!match && paramNameFromSlug) {
            const matchingPost = data.find(
              (p) => getSlug(p.category_name) === paramSlug
            );
            if (matchingPost) {
              uniqueNames.push(matchingPost.category_name);
            }
          }

          const fullCategories = ["All", ...uniqueNames];
          setCategoriesRaw(fullCategories);
          setShowSelectedPost(data);
        },
        onError: (err) => {
          console.error("Error fetching posts:", err);
        },
      }
    );
  };

  const handleCategoryClick = (slug) => {
    setSelectedCategorySlug(slug);
    const categoryObj = categories.find((cat) => cat.slug === slug);
    const categoryName = categoryObj?.name;

    if (!categoryName || categoryName === "All") {
      setShowSelectedPost(allPosts);
    } else {
      const filtered = allPosts.filter(
        (post) => getSlug(post.category_name) === slug
      );
      setShowSelectedPost(filtered);
    }
  };

  return (
    <div
      className="container main-container"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <HeroSlider />

      <Blog />

      <div className="container">
        <div class="filter-tab">
          <div class="quick-filters item-list-tabs block-box unplugged-timeline-header">
            <ul class="quick-filters-tabs menu-list d-md-block">
              <li
                className={`tab-btn ${activeTab === "post" ? "active" : ""}`}
                onClick={() => setActiveTab("post")}
                style={{ cursor: "pointer" }}
              >
                <a>Posts</a>
              </li>
              <li
                className={`tab-btn ${activeTab === "video" ? "active" : ""}`}
                onClick={() => setActiveTab("video")}
                style={{ cursor: "pointer" }}
              >
                <a>Videos</a>
              </li>
              <li
                className={`tab-btn ${activeTab === "pdf" ? "active" : ""}`}
                onClick={() => setActiveTab("pdf")}
                style={{ cursor: "pointer" }}
              >
                <a>Pdf</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container main-container">
        {/* Category Filter */}
        <div className="categories-row">
          {categories.map((category) => (
            <div key={category.slug} className="category-item-wrapper">
              <button
                className={`category-item ${
                  selectedCategorySlug === category.slug ? "active" : ""
                }`}
                onClick={() => {
                  navigate(`/categories/${category.slug}`);
                }}
              >
                {selectedCategorySlug === category.slug && (
                  <Check size={16} className="check-icon" />
                )}
                {category.name}
              </button>
            </div>
          ))}
        </div>

        {/* Posts */}
        {showSelectedPost.map((data) => (
          <Card key={data.id} className="post-card mb-sm-5 mb-4 border-0">
            <PostHeader
              username={data.username}
              profileImage={data.user_image_full_url}
              selectedCategory={data.category_name}
            />
            <div onClick={() => navigate(`/posts/${data.id}`)}>
              <PostContent
                caption={data.short_description}
                image={data.cover_image_full_url}
              />
            </div>
            <PostActions isLiked={isLiked} onLike={handleLike} />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default KnowledgeCenter;
