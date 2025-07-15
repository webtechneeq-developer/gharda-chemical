import React from "react";
import galleryImage1 from "../../../../public/images/Gallery-img1.png";
import galleryImage2 from "../../../../public/images/Gallery-img2.png";
import galleryImage3 from "../../../../public/images/Gallery-img-3.png";
import PdfArticles from "../../../components/pdf-articles/PdfArticles";
import CommentForm from "../../../components/add-comment-form/CommentForm";

const Gallery = () => {
  return (
    <div className="container mt-5">
      {/* Left Side: Article */}
      <h6 className="gallary-title">Gallery</h6>
      <div className="row g-4">
        <div className="col-md-6 col-sm-12">
          <img
            src={galleryImage1}
            alt="Lab Experiments"
            className="img-fluid rounded custom-img"
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            src={galleryImage2}
            alt="Chemical Beakers"
            className="img-fluid rounded custom-img"
          />
        </div>
        <div className="col-md-6 col-12">
          <img
            src={galleryImage3}
            alt="Types of chemical reactions"
            className="img-fluid rounded custom-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
