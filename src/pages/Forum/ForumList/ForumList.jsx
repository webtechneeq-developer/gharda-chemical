import React, { useEffect, useState } from "react";
import "./ForumList.css";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";

const ForumList = () => {
  const [forumList, setForumList] = useState();
  const navigate = useNavigate();
  const { postData } = useApi();
  useEffect(() => {
    handleForumListData();
  }, []);
  const handleForumListData = async () => {
    await postData(
      "discussion-list",
      { limit_per_page: 6 },
      {
        onSuccess: (res) => {
          setForumList(res?.data?.data);
          console.log("Res", res?.data?.data);
        },
        onError: (err) => {
          console.error("Error", err);
        },
      }
    );
  };

  const handleClick = (forumId) => {
    navigate(`/forum-view/${forumId}`, {state: forumList});
    console.log("forumid", forumId);
  };
  return (
    <div className="discussion-wrapper">
      <div className="container-md container-fluid-xs">
        <div className="discussion-container">
          <h1 className="discussion-title">Discussion</h1>
          <div className="table-responsive">
            <table className="table discussion-table overflowX-auto">
              <thead className="header-row">
                <tr>
                  <th className="topics-column text-style">Topics</th>
                  <th className="created-by-column text-style">Created By</th>
                  <th className="replies-column text-style">Replies</th>
                </tr>
              </thead>
              <tbody>
                {forumList?.map((data) => (
                  <tr
                    key={data.id}
                    className="topic-row"
                    onClick={() => handleClick(data.id)}
                  >
                    <td className="topic-cell">
                      <div className="topic-content">
                        <div className="topic-title">{data.title}</div>
                        <span className="category-badge">
                          {data.category_name}
                        </span>
                      </div>
                    </td>
                    <td className="creator-cell">
                      <div className="creator-info">
                        <div className="avatar-container">
                          <img
                            src={data.user_image_full_url}
                            alt="avatar"
                            className="creator-avatar"
                          />
                        </div>
                        <span className="creator-name">{data.username}</span>
                      </div>
                    </td>
                    <td className="replies-cell">
                      <span className="replies-number">
                        {data.replies_count}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForumList;