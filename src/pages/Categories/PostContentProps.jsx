import React from "react";
import { Card } from "react-bootstrap";

const PostContent = ({ image, caption }) => {
  const truncateHTML = (html, maxLength) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="post-content">
      <Card.Body className="p-0">
        <p
          className="post-summary"
          dangerouslySetInnerHTML={{
            __html: truncateHTML(caption, 120),
          }}
        ></p>
      </Card.Body>
      <Card.Img
        variant=""
        src={image}
        alt="Post image"
        className="poster-image"
      />
    </div>
  );
};

export default PostContent;
