import React, { useEffect, useState } from "react";
import "./PdfArticles.css";
import { useApi } from "../../hooks/useApi";
import useDownloader from "react-use-downloader";

const PdfArticles = () => {
  const [pdfArticles, setPdfArticles] = useState([]);
  const { postData } = useApi();
  const { download } = useDownloader();

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    await postData(
      "/blog-data",
      {
        sort_coloumn: "id",
        limit_per_page: 4,
        blog_type: "D",
        sort_order: "DESC",
      },
      {
        onSuccess: (res) => {
          setPdfArticles(res?.data?.data || []);
          console.log("Res", res?.data?.data);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  return (
    <div className="pdf-container">
      <h2 className="pdf-title">PDF ARTICLES</h2>
      <div className="pdf-list">
        {pdfArticles?.map((data, index) => (
          <div className="pdf-card" key={index}>
            <div className="pdf-header">
              <span className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              <span className="pdf-topic">{data.title}</span>
            </div>
            <div className="pdf-footer">
              {/* <a
                href={data.document_full_url}
                               target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD PDF
              </a> */}
              <span
                onClick={() =>
                  download(
                    data.document_full_url,
                    (() => {
                      const ext = data.document_full_url
                        .split(".")
                        .pop()
                        .split("?")[0]
                        .split("#")[0];
                      return `${data.title}.${ext}`;
                    })()
                  )
                }
                className="download-link"
              >
                DOWNLOAD PDF
              </span>
              <div className="author-wrapper">
                <span className="dot">•</span>
                <span className="author">{data.username}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfArticles;
