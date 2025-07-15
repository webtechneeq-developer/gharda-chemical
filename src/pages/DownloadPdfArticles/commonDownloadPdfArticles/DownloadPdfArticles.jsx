import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDownloader from "react-use-downloader";

const DownloadPdfArticles = ({ data }) => {
  const { download } = useDownloader();
  const navigate = useNavigate();

  return (
    <div className="pdf-articles-section">
      {data?.map((section, idx) => {
        return (
          <div className="section" key={idx}>
            <h4 className="section-title">{section.category_name}</h4>
            <div className="articles-grid">
              {section?.articles?.slice(0, 6).map((article) => (
                <div className="article-card" key={article.id}>
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
            {section.articles.length > 5 && (
              <div className="view-more-container">
                <button
                  className="view-more-btn"
                  onClick={() =>
                    navigate(
                      `/pdf-articles/${section.category_id}/${section.category_name}`
                    )
                  }
                >
                  VIEW MORE
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DownloadPdfArticles;
