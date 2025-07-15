import React, { useEffect, useState } from "react";
import "./ForumDiscussion.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useApi } from "../../../hooks/useApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FiCalendar, FiFile } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { MdPhotoCameraFront } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const tagColors = ["tag-chemical", "tag-finance", "tag-chemical"];

const ForumDiscussion = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const { postData } = useApi();

  const [forum, setForum] = useState({});
  const [newReply, setNewReply] = useState("");
  const [dataSubmitted, setDataSubmitted] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleTitleClick = (forumId) => {
    navigate(`/forum-view/${forumId}`, { state });
  };

  useEffect(() => {
    if (id) {
      handleForumDetails();
    }
  }, [id, dataSubmitted]);

  const handleForumDetails = () => {
    postData(
      `/forum-view/${id}`,
      {},
      {
        isTokenRequired: true,
        onSuccess: (res) => {
          if (res.status === "success") {
            console.log(res.data);
            setForum(res.data);
            setDataSubmitted(false);
          } else {
            console.log("Error:", res.message);
          }
        },
        onError: (err) => {
          console.error("API Error:", err);
        },
      }
    );
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username") || "You";
    const userImage = localStorage.getItem("userImage") || "/images/user.svg";

    if (!accessToken) {
      return alert("Please Login to post your comment!");
    }

    if (!newReply.trim()) return;

    const payload = new FormData();
    payload.append("question_id", id);
    payload.append("replied_by", userId);
    payload.append("reply_text", newReply);

    await postData("/forum-reply-save", payload, {
      isFormData: true,
      isTokenRequired: true,
      onSuccess: () => {
        const newReplyObj = {
          id: Date.now(),
          reply_text: newReply,
          username: username,
          created_at: new Date().toLocaleString(),
          user_image_full_url: userImage,
        };

        setForum((prev) => ({
          ...prev,
          replies: [...(prev.replies || []), newReplyObj],
        }));
        setNewReply("");
      },
      onError: (err) => {
        console.error("Error submitting reply:", err);
      },
    });
  };
  console.log("forum", forum);

  return (
    <Container fluid className="discussion-container">
      <div className="discussion-header">Forum Discussion</div>
      <Row>
        <Col lg={9} md={8} sm={12}>
          <div className="main-discussion-right-section">
            {forum && (
              <div className="discussion-main">
                <div className="discussion-user">
                  <img
                    src={forum?.user_image_full_url}
                    alt="user"
                    className="user-img"
                  />
                  <div className="user-background">
                    <span className="user-name">{forum?.username}</span>
                  </div>
                </div>
                <div className="discussion-content">
                  <h4>{forum?.title}</h4>
                  <p>{forum?.description}</p>
                  <div className="discussion-meta">
                    Replies: {forum?.replies_count} | Views: {forum?.views}
                  </div>
                </div>
              </div>
            )}

            <div className="discussion-replies">
              {forum?.replies?.length > 0 ? (
                forum.replies.map((reply) => (
                  <div key={reply.id} className="reply">
                    <div className="reply-avatar">
                      <img src={reply.user_image_full_url} alt="user" />
                      <div className="reply-label">{reply.username}</div>
                    </div>
                    <div className="reply-content">
                      <p>{reply.reply_text}</p>
                      <div className="meta">
                        {reply.username}, {reply.created_at}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ padding: "10px" }}>No replies yet.</p>
              )}
            </div>

            <Form className="comment-form" onSubmit={handleReplySubmit}>
              <div className="d-flex align-items-start">
                <img
                  src="/images/Ajay-Sharma.svg"
                  alt="user"
                  className="user-avatar"
                />
                <div className="flex-grow-1 ms-2">
                  <Form.Label className="comment-label">
                    Comment in this thread
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    className="comment-input"
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      fontSize: "25px",
                      color: "#3B4CCA",
                      marginTop: "10px",
                    }}
                  >
                    <FiFile />
                    <BsEmojiSmile />
                    <MdPhotoCameraFront />
                    <FiCalendar />
                    <GoLocation />
                  </div>
                </div>
              </div>
              <div className="text-end mt-2">
                <Button className="submit-btn" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>

        <Col lg={3} md={4} sm={12} className="other-discussion">
          <div className="other-discussion-box">
            <h4>Other Discussion</h4>
            {state?.slice(0, 3).map((group, index) => (
              <div key={index} className="discussion-card">
                <h6
                  style={{ cursor: "pointer" }}
                  onClick={() => handleTitleClick(group.id)}
                >
                  {group.title}
                </h6>
                <p
                  onClick={() => toggleExpand(index)}
                  style={{ cursor: "pointer" }}
                  title="Click to expand"
                >
                  {expandedCards[index]
                    ? group.description
                    : group.description.slice(0, 80) +
                      (group.description.length > 80 ? "..." : "")}
                </p>
                <span
                  className={`group-tag ${tagColors[index % tagColors.length]}`}
                >
                  {group.category_name}
                </span>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForumDiscussion;
