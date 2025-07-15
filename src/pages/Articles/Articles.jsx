import React, { useEffect, useState } from "react";
import PdfArticles from "../../components/pdf-articles/PdfArticles";
import Categories from "../../components/categories/Categories";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import ArticleList from "../../components/article-List/ArticleList";
import { useApi } from "../../hooks/useApi";
import { useLocation } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState();
  const [category, setCategories] = useState();
  const { postData } = useApi();
  const { state } = useLocation();

  useEffect(() => {
    handleSubmit();
  }, [category, state?.category]);

  const handleSubmit = async () => {
    await postData(
      "blog-data",
      {
        sort_order: "DESC",
        sort_coloumn: "id",
        limit_per_page: 5,
        blog_type: "B",
        type: "A",
        category_id: category?.id || state?.category || null,
      },
      {
        onSuccess: (res) => {
          setArticles(res?.data?.data);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  const handleOnSelectCat = (data) => {
    setCategories(data);
  };

  return (
    <>
      <div className="container">
        <div className="chemical-reaction-section">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb custom-breadcrumb align-items-center">
              {category?.category_name && (
                <li className="breadcrumb-item d-flex align-items-center">
                  <span className="no-underline">Categories</span>
                  <ChevronRightIcon className="breadcrumb-icon" />
                </li>
              )}
              <li className="breadcrumb-item active" aria-current="page">
                {category?.category_name || "Latest Articles"}
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-7 col-12">
              {/* Article List */}
              <ArticleList articles={articles} />
            </div>
            <div className="col-lg-5 col-12 p-left">
              {/* Categories */}
              <Categories onSelectCategories={handleOnSelectCat} />
              {/* PDF Articles */}
              <PdfArticles />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Articles;
