import React, { useEffect, useState } from "react";
import Health from "./commonHealth/Health";
import "./HealthDetails.css";
import Categories from "../../components/categories/Categories";
import PdfArticles from "../../components/pdf-articles/PdfArticles";
import HealthLifestyle from "./commonHealth/HealthLifestyle";
import LastParagraph from "./commonHealth/LastParagraph";
import DownloadComments from "../../components/comment/DownloadComments";
import CommentForm from "../../components/add-comment-form/CommentForm";
import { useApi } from "../../hooks/useApi";

const HealthPage = () => {
   const [article, setArticle] = useState(null);
  const { postData } = useApi();

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    await postData(
      "blog-data", // Your API endpoint
      { blog_type: "D" }, // Your POST body
      {
        // isTokenRequired: true,
        onSuccess: (res) => {
          // Assuming you want the first article in the list
          setArticle(res?.data?.data?.[0]);
          console.log("Article Data:", res?.data?.data?.[0]);
        },

        
        onError: (err) => {
          console.error("API Error:", err);
        },
      }
    );
  };
  return (
    <div>
      <div className="container">
        <div className="chemical-reaction-section">
          <h3 className="heading">Latest Article</h3>

          <div className="row">
            <div className="col-lg-7 col-12">
              {/* Chemical Article Section */}
              <Health article={article}  />

              {/* HealthLifestyle */}
              <HealthLifestyle />
            </div>

            <div className="col-lg-5 col-12 p-left">
              {/* Categories */}
              <Categories />

              {/* PDF Articles */}
              <PdfArticles />
            </div>

            <div className="col-12 margin-btm-custom">
              <LastParagraph />
            </div>
            <div className="row">
              <div className="col-lg-7 col-12">
                {/* Comments */}
                <DownloadComments />

                {/* Add Comment Form */}
                <CommentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPage;
