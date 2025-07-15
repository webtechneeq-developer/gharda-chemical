import React, { useState } from "react";
import "./categories.css";
import { Card } from "react-bootstrap";
import PostHeader from "./PostHeaderProps";
import PostContent from "./PostContentProps";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

const posts = [
  {
    id: 1,
    username: "Sneha Raj",
    name: "Human resource",
    profileImage:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    image: "/public/images/Sneha-Raj-baner.png",
    caption:
      "In my free time, I like taking photos.My hobby is collecting stamps. i love art and did studies in art from jj art of college in mumbai. i willl keep posting my new painting when its ready and hop you all will like it.",
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    image: "/public/images/Diwali1.png",
  },
  {
    id: 3,
    image: "/public/images/Diwali2.png",
  },
];

const DiwaliCelebration = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="container">
      <div className="diwali-main-section">
        {posts.map((data, index) => (
          <div key={data.id} className="post-wrapper">
            <Card className="post-card mb-3 border-0">
              {data.id === 1 && (
                <>
                  <PostHeader
                    username={data.username}
                    profileImage={data.profileImage}
                    name={data.name}
                    selectedCategory={selectedCategory}
                    showFollowButton={false}
                    showLeftArrow={true}
                  />
                  <PostContent image={data.image} caption={data.caption} />
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
                </>
              )}
              {data.id !== 1 && (
                <img
                  src={data.image}
                  alt="Diwali Celebration"
                  className="poster-image"
                />
              )}
            </Card>

            {/* Back to Main Feed Link only for the last post */}
            {index === posts.length - 1 && (
              <div
                className="back-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "20px",
                }}
              >
                <ArrowLeftIcon style={{ width: "40px", height: "40px" }} />
                <a
                  href="#"
                  className="back-tomain-text"
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => window.history.back()}
                >
                  Back to Main Feed
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiwaliCelebration;
