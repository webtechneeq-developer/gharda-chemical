// src/components/CommentForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../schema/formSchema";
import "./CommentForm.css";

import emojiI from "/images/comment-form-emoji/icon1.png";
import emojiII from "/images/comment-form-emoji/icon2.png";
import emojiIII from "/images/comment-form-emoji/icon3.png";
import emojiIV from "/images/comment-form-emoji/icon4.png";
import emojiV from "/images/comment-form-emoji/icon5.png";
import { useApi } from "../../hooks/useApi";
import { useParams } from "react-router-dom";

const CommentForm = ({ onNewComment }) => {
  const { postData, isLoading } = useApi(); // destructure postData and loading state
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  // const token = localStorage.getItem("JWT") || "" ;

  const onSubmit = async (data) => {
    const payload = {
      // id: 1,
      blog_id: id,
      // parent_id: 1,
      name: data.name,
      email: data.email,
      website: data.website,
      comment: data.comment,
      // rating: null,
    };

    if (!localStorage.getItem("accessToken")) {
      return alert("Please Login to post your comment!");
    }

    await postData("blog-comment-save", payload, {
      isTokenRequired: true,
      onSuccess: (res) => {
        console.log("Success:", res);
        alert("Comment submitted successfully!");
        reset();

        // Update parent state
        if (onNewComment) {
          onNewComment(payload);
        }
      },
      onError: (err) => {
        console.error("Error:", err);
        alert("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <form
      className="comment-form-wrapper"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h3 className="form-title">
        <span className="red-line" /> Add A Comment
      </h3>

      <div className="form-grid">
        <div className="form-left">
          <div className="name-control">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" {...register("name")} />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="website-control">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" {...register("website")} />
            {errors.website && (
              <p className="error">{errors.website.message}</p>
            )}
          </div>

          <div className="email-control">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>

        <div className="form-right">
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            rows="9"
            {...register("comment")}
            placeholder="Search anything"
            className="h-100"
          />
          {errors.comment && <p className="error">{errors.comment.message}</p>}
        </div>
      </div>

      <div className="form-footer">
        <div className="rating-row">
          <label className="rating-label">
            Rate The Usefulness Of The Article
          </label>
          <div className="emoji-options">
            <img src={emojiI} alt="Angry Face" />
            <img src={emojiII} alt="Sad Face" />
            <img src={emojiIII} alt="Neutral Face" />
            <img src={emojiIV} alt="Happy Face" />
            <button type="button" className="btn-good">
              <img src={emojiV} alt="Good" /> <span>Good</span>
            </button>

            <button
              type="submit"
              className="btn-send d-xl-none display-block d-lg-block d-md-none d-block"
              disabled={isLoading}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM8.625 12H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12.375 12H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM16.5 12h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
              </span>
              &nbsp; {isLoading ? "Sending..." : "Send Comment"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="btn-send display-none d-md-block d-none"
          disabled={isLoading}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM8.625 12H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM12.375 12H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM16.5 12h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </span>
          &nbsp; {isLoading ? "Sending..." : "Send Comment"}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;