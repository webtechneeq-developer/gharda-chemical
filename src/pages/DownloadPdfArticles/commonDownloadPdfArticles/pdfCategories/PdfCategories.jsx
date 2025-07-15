import React, { useEffect, useState } from "react";
import "./PdfCategories.css";
import { useNavigate, useParams } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";

const PdfCategories = ({ onSelectCategories }) => {
  const [categories, setCategories] = useState([]);

  const { postData } = useApi();
  const params = useParams();
  const navigate = useNavigate();

  const colors = [
    "var(--color-yellow)",
    "var(--color-green)",
    "var(--color-blue)",
    "var(--color-red)",
  ];

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    await postData(
      "/category-data",
      { limit_per_page: 4, is_admin_category: "N" },
      {
        onSuccess: (res) => {
          setCategories(res?.data?.data || []);
        },
        onError: (err) => {
          console.error("Error loading categories:", err);
        },
      }
    );
  };
  return (
    <div className="categories-container">
      <h2 className="categories-title">Categories</h2>
      <div className="categories-list ">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="category-item"
            onClick={() => {
              navigate(
                `/pdf-articles/${category.id}/${category.category_name}`
              );
            }}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            {category.category_name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PdfCategories;
