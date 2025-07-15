import React from "react";
import { Container } from "react-bootstrap";

const Download = ({data}) => {
  console.log("data",data);
  
  return (
    <Container className="downloads-wrapper">
      <div className="download-title ">
        <h5 className="title">Downloads</h5>
        <div className="doc-link mt-2 d-flex align-items-end">
          <img
            src={data.document_full_url} // Replace with actual image path
            alt="Word Document Icon"
            className="doc-icon me-2"
            style={{ width: "44px", height: "44px" }} // Adjust size as needed
          />
          <a href="#" className="doc-text">
          {data.document}
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Download;
