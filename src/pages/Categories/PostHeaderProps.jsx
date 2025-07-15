import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { MoreHorizontal, ArrowLeftIcon } from "lucide-react";

const PostHeader = ({
  username,
  profileImage,
  // name,
  selectedCategory,
  showFollowButton = true,
  showLeftArrow = false,
}) => {
  return (
    <div className="post-header ">
      <Row className="align-items-center">
        <Col xs="auto">
          <div className="profile-arrow-parent">
          {showLeftArrow && (
            <ArrowLeftIcon
              className=""
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
            />
          )}
          <div className="profile-image-container ">
            <img
              src={profileImage}
              alt={`${username}'s profile`}
              className="profile-image"
            />
          </div>
          </div>
        </Col>
        <Col>
          <div className="profile-info">
            <div className="username">{username}</div>
            {/* <div className="name text_muted">{name}</div> */}
          </div>
        </Col>
        <Col xs="auto">
          {showFollowButton && (
            <Button variant="primary" className="follow-button">
              {selectedCategory}
            </Button>
          )}
        </Col>
        <Col xs="auto" className="ps-0">
          <button className="options-button" aria-label="More options">
            <MoreHorizontal size={20} />
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default PostHeader;
