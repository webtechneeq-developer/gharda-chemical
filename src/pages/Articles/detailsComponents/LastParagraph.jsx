import React from "react";
const LastParagraph = ({ data }) => {
  return (
    <>
      {data && (
        <div className="">
          <h3 className="lifestyle-title">{data.title}</h3>
          <p className="lifestyle-description">
            {data.short_description}
          </p>
        </div>
      )}
    </>
  );
};

export default LastParagraph;
