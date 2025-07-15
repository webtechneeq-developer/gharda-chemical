import React from "react";
import { Container } from "react-bootstrap";
import "./DownloadComments.css";
const DownloadComments = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <Container>
      <div className="comment-section">
        <div className="comment-header mb-4 d-flex align-items-center">
          <span className="red-dot me-2"></span>
          <span className="text-comment">Comments</span>
        </div>
        {data.map((comment) => (
          <React.Fragment key={comment.id}>
            <div
              className="comment-box"
              style={{ paddingBottom: comment.children.length == 0 && "15px" }}
            >
              <div className="comment-inner d-flex">
                <div className="comment-content w-100">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex gap-2">
                      <img
                        src={comment.user_image}
                        alt="user"
                        className="user-img"
                      />
                      <div className="content-wrapper">
                        <span className="user-name">{comment.username}</span>
                        <div className="comment-date small text-muted mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#3E323280"
                            className="calender"
                          >
                            
                            <path
                              fillRule="evenodd"
                              d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          &nbsp;
                          {comment.created_at}
                        </div>
                      </div>
                    </div>
                    <button className="reply-btn flex items-center">
                      <img
                        src="/images/Reply.png"
                        alt="Reply Icon"
                        className="h-5 w-5"
                      />
                      <span>Reply</span>
                    </button>
                  </div>
                  <div className="comment-text">{comment.comment}</div>
                </div>
              </div>
            </div>
            {/* Replies */}
            {comment.children && comment.children.length > 0 && (
              <div className="parent">
                <div className="replies-box">
                  {comment.children.map((reply) => (
                    <div
                      className="reply-box users-text d-flex mb-3"
                      key={reply.id}
                    >
                      <img
                        src={reply.user_image}
                        alt="reply-user"
                        className="user-img me-3"
                      />
                      <div className="comment-content w-100">
                        <div className="d-flex justify-content-between">
                          <span className="user-name">{reply.username}</span>
                        </div>
                        <div className="comment-date small text-muted mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="#3E323280"
                            className="calender"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          &nbsp;
                          {reply.created_at}
                        </div>
                        <div className="comment-text">{reply.comment}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};
export default DownloadComments;
