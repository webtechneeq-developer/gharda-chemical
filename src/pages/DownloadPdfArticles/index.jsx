import React, { useEffect, useState } from "react";
import DownloadPdfArticles from "./commonDownloadPdfArticles/DownloadPdfArticles";
import "./DownloadPdfArticles.css";
import Categories from "../../components/categories/Categories";
import { useApi } from "../../hooks/useApi";
import PdfCategories from "./commonDownloadPdfArticles/pdfCategories/PdfCategories";

const DownloadPdfArticlesPage = () => {
  const [pdfArticles, setPdfArticles] = useState([]);
  const { postData } = useApi();

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    await postData(
      "/pdf-article-data",
      {
        sort_order: "DESC",
        sort_coloumn: "id",
        limit_per_page: "100",
      },

      {
        onSuccess: (res) => {
          setPdfArticles(res?.data);
          console.log("Res", res?.data);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  // const handleOnSelectCat = (data) => {
  //   console.log(data);

  // };

  return (
    <div>
      <div className="container pdf-custom-padding-section">
        <h2 className="main-title">PDF ARTICLES</h2>
        <div className="row">
          <div className="col-lg-8 col-12">
            <DownloadPdfArticles data={pdfArticles} />
          </div>
          <div className="col-lg-4 col-12">
            {/* Categories */}
            <PdfCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPdfArticlesPage;
