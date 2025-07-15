import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";
import { useApi } from "../../../hooks/useApi";
import useDownloader from "react-use-downloader";

const FilteredPdfArticles = () => {
  const [categories, setCategories] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const { download } = useDownloader();

  const { postData } = useApi();
  const params = useParams();
  const pageSize = 10;

  useEffect(() => {
    handleSubmit();
  }, [params.id]);

  const handleSubmit = async () => {
    await postData(
      "/blog-data",
      {
        // type: "A",
        blog_type: "D",
        sort_order: "DESC",
        sort_coloumn: "id",
        limit_per_page: 100, 
        category_id: params.id,
      },
      {
        onSuccess: (res) => {
          const articles = res?.data?.data || [];
          setCategories(articles);
          setVisibleArticles(articles.slice(0, pageSize));
          setHasMore(articles.length > pageSize);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  const handleViewMore = () => {
    const nextPage = currentPage + 1;
    const newVisible = categories.slice(0, nextPage * pageSize);
    setVisibleArticles(newVisible);
    setCurrentPage(nextPage);
    setHasMore(categories.length > newVisible.length);
  };

  return (
    <div className="container pdf-custom-padding-section">
      <h2 className="main-title">PDF ARTICLES</h2>
      <div className="pdf-articles-section">
        {categories.length > 0 ? (
          <div className="section">
            <h4 className="section-title">{params.name}</h4>
            <div className="articles-grid">
              {visibleArticles.map((article, idx) => (
                <div className="article-card" key={idx}>
                  <div className="article-title-wrapper">
                    <ChevronDownIcon className="article-icon" />
                    <h6 className="article-title">{article.title}</h6>
                  </div>
                  <div className="article-footer">
                    {article?.document_full_url && (
                      <span
                        onClick={() =>
                          download(
                            article.document_full_url,
                            (() => {
                              const ext = article.document_full_url
                                .split(".")
                                .pop()
                                .split("?")[0]
                                .split("#")[0];
                              return `${article.title}.${ext}`;
                            })()
                          )
                        }
                        style={{ cursor: "pointer" }}
                      >
                        DOWNLOAD PDF
                      </span>
                    )}
                    <span className="author-name">{article.username}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* VIEW MORE BUTTON */}
            {hasMore && (
              <div
                className="view-more-container"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <button className="view-more-btn" onClick={handleViewMore}>
                  VIEW MORE
                </button>
              </div>
            )}
          </div>
        ) : (
          <h2 className="no-data-found">No Data Found.</h2>
        )}
      </div>
    </div>
  );
};

export default FilteredPdfArticles;
