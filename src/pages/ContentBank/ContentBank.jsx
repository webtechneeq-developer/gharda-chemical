import React from "react";
import "./ContentBank.css";

const ContentBank = () => {
  return (
    <div className="container content-bank-container">
      <h2 className="title">Content Bank - Download</h2>

      <div className="section">
        <h4>Brand Collateral</h4>
        <ul>
          <li>Brand Logos</li>
          <li>Stationary - HO Letterhead</li>
          <li>Corporate Brochure</li>
          <li>Corporate Presentation</li>
          <li>Corporate Video</li>
        </ul>
      </div>

      <div className="section">
        <h4>Product Collateral</h4>
        <ul>
          <li>Agrochemical brochure</li>
          <li>Agrochemical flyers</li>
          <li>Agrochemical Product Presentation</li>
          <li>Pigment Brochure</li>
          <li>Pigment Presentation</li>
          <li>Polymer Brochure</li>
          <li>Polymer Presentation</li>
        </ul>
      </div>

      <div className="section">
        <h4>Plant Photos</h4>
        <ul>
          <li>Lote</li>
          <li>Panoli</li>
          <li>GIL</li>
          <li>Saykha</li>
          <li>Dombivli</li>
          <li>Dahej</li>
        </ul>
      </div>

      <div className="section mb_100 ">
        <h4>Onboarding Material</h4>
        <ul>
          <li>Employee handbook</li>
          <li>Spine HR Login link</li>
          <li>Etc... TBD</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentBank;
