import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Heart,
  MessageCircle,
  Share,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

const PostActions = ({ isLiked, onLike, onComment }) => {
  return (
    <div className="post-actions mt_20">
      <Row className="gx-4">
        <Col xs="auto">
          <button
            className={`action-button ${isLiked ? "liked" : ""}`}
            onClick={onLike}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <Heart
              size={24}
              fill={isLiked ? "#ed4956" : "none"}
              stroke={isLiked ? "#ed4956" : "currentColor"}
            />
          </button>
        </Col>
        <Col xs="auto">
          <button
            className="action-button"
            aria-label="Comment"
            onClick={onComment}
          >
            <img
              src="/images/comment-image.svg"
              alt="Comment"
              style={{ width: 20, height: 20 }}
            />
          </button>
        </Col>
        <Col xs="auto">
          <button className="action-button" aria-label="Share">
            <img
              src="/images/share-image.svg"
              alt="Share"
              style={{ width: 20, height: 20 }}
            />
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default PostActions;
