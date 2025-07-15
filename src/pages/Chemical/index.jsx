import React from "react";
import "./Chemical.css";
import Gallery from "./commonChemical/Gallery";
import Download from "./commonChemical/Download";
import PdfArticles from "../../components/pdf-articles/PdfArticles";
import Categories from "../../components/categories/Categories";
import DownloadComments from "../../components/comment/DownloadComments";
import CommentForm from "../../components/add-comment-form/CommentForm";
import ChemicalArticleSection from "./commonChemical/ChemicalArticleSection";
import { ChevronRightIcon } from "@heroicons/react/16/solid";


const ChemicalReactionPage = () => {



  return (
    <>
      <div className="container">
        <div className="chemical-reaction-section">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb custom-breadcrumb align-items-center">
              <li className="breadcrumb-item d-flex align-items-center">
                <span className="no-underline">Latest Article</span>
                <ChevronRightIcon className="breadcrumb-icon" />
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Chemical Reaction
              </li>
            </ol>
          </nav>{" "}
          <div className="row">
            <div className="col-lg-7 col-12">
              {/* Chemical Article Section */}
              <ChemicalArticleSection />

              {/* Gallery Section */}
              <Gallery />

              {/* Download PDF Section */}
              <Download />

              {/* Comments */}
              <DownloadComments />

              {/* Add Comment Form */}
              <CommentForm />
            </div>
            <div className="col-lg-5 col-12 p-left">
              {/* Categories */}
              <Categories />

              {/* PDF Articles */}
              <PdfArticles />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChemicalReactionPage;
