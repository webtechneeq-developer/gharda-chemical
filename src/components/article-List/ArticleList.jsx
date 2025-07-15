import React, { useState } from "react";
import "./ArticleList.css";
import { Link } from "react-router-dom";

const ArticleList = ({ articles = [], isLoading = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles?.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const truncateHTML = (html, maxLength) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    const truncatedText =
      text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    return truncatedText;
  };

  // Show loading while data is being fetched
  if (isLoading) {
    return (
      <div className="container-md container-fluid-xs">
        <div className="article-list">
          <div>Loading articles...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-md container-fluid-xs">
      <div className="article-list">
        {/* List of Articles */}
        {currentArticles.length > 0 ? (
          currentArticles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.id}`}
              state={{ article }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="row mb-4 article-card">
                <div className="col-md-8 col-12 order-md-1 order-2 article-card-content">
                  <h5 className="card-title">{article.title}</h5>
                  <p
                    className="excerpt"
                    dangerouslySetInnerHTML={{
                      __html: truncateHTML(article.short_description, 75),
                    }}
                  ></p>

                  <div className="card-bottom">
                    <div className="testimonial-section">
                      <img
                        src={article.user_image_full_url}
                        className="avatar"
                        alt="author"
                      />
                      <div>
                        <h4 className="name">{article.username}</h4>
                        <small className="date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#3E323280"
                            className="calender"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          &nbsp;
                          {article.created_at}
                        </small>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      {article.is_trending === "Y" && (
                        <button className="btn category-btn me-2">
                          Trending
                        </button>
                      )}
                      <button className="btn category-btn">Health Tips</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-12 order-md-2 order-1 pe-0 ps-0">
                  <img
                    src={article.document_full_url}
                    className="img-fluid thumbnail"
                    alt="featured"
                  />
                </div>
              </div>
            </Link>
          ))
        ) : (
          // Show "No Data Found" only when not loading and no articles exist
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
              flexDirection: "column",
            }}
          >
            <h2 className="no-data-found">No Data Found.</h2>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && !isLoading && (
          <nav className="mt-4">
            <ul className="pagination articles-pagination">
              {Array.from({ length: totalPages }, (_, index) => {
                const isActive = currentPage === index + 1;
                return (
                  <li
                    key={index + 1}
                    className={`page-item ${isActive ? "active" : ""}`}
                  >
                    <button
                      className="page-link articles-page-link"
                      onClick={() => handlePageClick(index + 1)}
                      style={{
                        backgroundColor: isActive ? "#309DC1" : "#fff",
                        color: isActive ? "#fff" : "#3E3232",
                        borderColor: "#309DC1",
                        margin: "0 4px",
                      }}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
