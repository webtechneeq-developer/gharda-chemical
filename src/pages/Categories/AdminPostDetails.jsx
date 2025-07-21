import React, { useEffect, useState } from "react";
import "./categories.css";
import { Card } from "react-bootstrap";
import PostHeader from "./PostHeaderProps";
import PostContent from "./PostContentProps";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useApi } from "../../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import BlogContainer from "../knowledgeCenter/knowledgeCenterComponents/SingleBlogPost";
import BlogList from "../BlogEditor/components/BlogList";

const AdminPostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const { postData } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    handleSubmit();
  }, []);

  const handleSubmit = async () => {
    await postData(
      `/blog-data/single/${id}`,
      { is_admin_category: "Y" },
      {
        isTokenRequired: true,
        onSuccess: (res) => {
          if (res?.status == "success") {
            setPost(res?.data);
          } else {
          }
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      console.log(windows.history.length);
    }
  };

  return (
    <div className="container">
      <div className="diwali-main-section">
        <div className="post-wrapper">
          <Card className="post-card mb-3 border-0">
            {/* <PostHeader
              username={post?.username}
              profileImage={post?.image}
              selectedCategory={post?.category_name}
              // name={post?.name}
              showFollowButton={false}
              showLeftArrow={true}
            /> */}

            {/* <BlogContainer /> */}

            <div className="blog-entry-header">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <ul className="entry-meta">
                    <li>
                      <img
                        loading="lazy"
                        src="https://animetrixlabs.com/knowledgecentre/wp-content/uploads/avatars/1/60af1abf02c8c-bpfull.jpg"
                        className="avatar user-1-avatar avatar-150 photo"
                        width="150"
                        height="150"
                        alt="Profile Photo"
                      />
                      By{" "}
                      <a href="https://animetrixlabs.com/knowledgecentre/author/wt-gharda/">
                        wt-gharda
                      </a>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i> July 15, 2025{" "}
                    </li>
                    <li>
                      <i className="icofont-comment"></i> 0 Comments{" "}
                    </li>
                    <li>
                      <i className="icofont-tag"></i>{" "}
                      <a
                        href="https://animetrixlabs.com/knowledgecentre/category/new-post/"
                        rel="category tag"
                      >
                        new post
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <BlogList />
            {/* <PostContent image={post?.cover_image_full_url} caption={post?.caption} />
                  <div className="extra-description mt-3">
                    <p className="post-caption">
                      Diwali is certainly the most significant festival
                      celebrated across India. Celebrating festivities at the
                      workplace has become one of the most critical employee
                      engagement initiatives. These celebrations not only bring
                      employees together but it also helps in creating a more
                      inclusive environment across departments and enhance the
                      morale of employees, promotes employee engagement,
                      encourages team spirit and joy. Organizations today have
                      adopted newer and innovative ways to celebrate this
                      festival. At Gharda Chemicals, the spirit of Diwali
                      celebration turned out to be colorful and everyone enjoyed
                      each moment of the celebration. A series of events lined
                      up at work to engage the employee. 
                    </p>
                  </div>
    
              )} 
              {data.id !== 1 && ( 
                <img
                  src={post.image}
                  alt="Diwali Celebration"
                  className="poster-image"
                />
               )} 
                    {/*  ))} */}
          </Card>
        </div>

        {/* Back to Main Feed Link only for the last post */}
        <div
          className="back-link"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "20px",
          }}
          onClick={() => window.history.back()}
        >
          <ArrowLeftIcon style={{ width: "40px", height: "40px" }} />
          <div
            className="back-tomain-text"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            Back to Main Feed
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostDetails;
