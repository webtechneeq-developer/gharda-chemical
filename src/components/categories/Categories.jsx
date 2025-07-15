import React, { useEffect, useState } from "react";

import "./Categories.css";

import { useApi } from "../../hooks/useApi";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
const Categories = ({ onSelectCategories }) => {
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
      {
        sort_order: "DESC",
        sort_coloumn: "id",
        limit_per_page: 10,
        is_admin_category: "N",
      },
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
              if (!params?.id) {
                onSelectCategories(category);
              } else {
                navigate(
                  `/articles?name=${category.category_name}&id=${category.id}`,
                  {}
                );
              }
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
export default Categories;
