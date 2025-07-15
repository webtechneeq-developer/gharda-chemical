import React, { useEffect, useState } from "react";
import "./ArticleDetails.css";
import Health from "./detailsComponents/Health";
import HealthLifestyle from "./detailsComponents/HealthLifestyle";
import DownloadComments from "../../components/comment/DownloadComments";
import CommentForm from "../../components/add-comment-form/CommentForm";
import LastParagraph from "./detailsComponents/LastParagraph";
import PdfArticles from "../../components/pdf-articles/PdfArticles";
import Categories from "../../components/categories/Categories";
import { useLocation, useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

const ArticleDetails = () => {
  const params = useParams();
  const { postData } = useApi();
  const [comments, setComments] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);
  const location = useLocation();

  const addComment = () => {
    // Optional: handle nested comments if needed
    setComments((prev) => [...prev]);
    handleSubmit();
  };

  console.log(location);

  useEffect(() => {
    if (params.id) {
      handleSubmit();
    } else {
      // Redirect 404
    }
  }, []);
  const handleSubmit = async () => {
    await postData(
      `/blog-data/single/${params.id}`,
      { type: "A" },
      {
        onSuccess: (res) => {
          if (res?.status == "success") {
            setArticleDetails(res?.data);
            setComments(res?.data?.comments);
          } else {
            // Redirect to 404
          }
        },
        onError: (err) => {
          console.error("Error loading categories:", err);
          // Redirect to 404
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
              {articleDetails && <Health data={articleDetails} />}

              {/* HealthLifestyle */}
              {articleDetails && <HealthLifestyle data={articleDetails} />}
            </div>
            <div className="col-lg-5 col-12 p-left">
              {/* Categories */}
              <Categories />
              {/* PDF Articles */}
              <PdfArticles />
            </div>
            <div className="col-12 margin-btm-custom">
              {articleDetails && <LastParagraph data={articleDetails} />}
            </div>
            <div className="row">
              <div className="col-lg-7 col-12">
                {/* Comments */}
                <DownloadComments data={comments} />
                {/* Add Comment Form */}
                <CommentForm onNewComment={addComment} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleDetails;
