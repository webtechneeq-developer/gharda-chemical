import React, { useEffect, useState } from "react";
import "./categories.css";
import { Card } from "react-bootstrap";
import PostHeader from "./PostHeaderProps";
import PostContent from "./PostContentProps";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useApi } from "../../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";

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

  return (
    <div className="container">
      <div className="diwali-main-section">
        <div className="post-wrapper">
          <Card className="post-card mb-3 border-0">
            <PostHeader
              username={post?.username}
              profileImage={post?.user_image_full_url}
              selectedCategory={post?.category_name}
              // name={post?.name}
              showFollowButton={false}
              showLeftArrow={true}
            />

            <div
              dangerouslySetInnerHTML={{ __html: post?.description }}
              style={{marginTop:"50px"}}
            ></div>
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
          onClick={() => navigate("/categories/all")}
<<<<<<< HEAD
          
=======
>>>>>>> salma-new
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
