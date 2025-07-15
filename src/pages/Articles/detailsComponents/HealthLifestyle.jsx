import React from "react";
// import './HealthSection.css';

const HealthLifestyle = ({data}) => {
  console.log(data);
  
  return (
    <>
      {data && (
        <div className="health-section">
          <div className="">
            <h3 className="lifestyle-title">{data.title}</h3>
            <p
              className="lifestyle-description"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>
          </div>

          {/* <div className="image-container">
            <img
              src={data.cover_image_full_url}
              alt="Globe in gloved hands"
              style={{height:"480px"}}
            /> */}

            {/* <div className="image-credit">iStock<br/>Credit: ©1305237133</div> */}
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default HealthLifestyle;
