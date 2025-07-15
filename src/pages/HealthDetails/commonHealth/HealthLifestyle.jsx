import React from "react";
// import './HealthSection.css';

const HealthLifestyle = () => {
  return (
    <div className="health-section">
      <div className="">
        <h3 className="lifestyle-title">Health Lifestyle Is A Must</h3>
        <p className="description">
          The secret to staying physically fit lies in embracing a healthy
          lifestyle. A healthy lifestyle involves regular exercise, nutritious
          eating, self-care, adequate sleep, and maintaining an active daily
          routine. One’s lifestyle plays a pivotal role in determining their
          fitness level.
        </p>
        <p className="lifestyle-description">
          The secret to staying physically fit lies in embracing a healthy
          lifestyle. A healthy lifestyle involves regular exercise, nutritious
          eating, self-care, adequate sleep, and maintaining an active daily
          routine. One’s lifestyle plays a pivotal role in determining their
          fitness level.
        </p>
      </div>

      <div className="image-container">
        <img
          src="/images/Health-Lifestyle.png"
          alt="Globe in gloved hands"
        />

        {/* <div className="image-credit">iStock<br/>Credit: ©1305237133</div> */}
      </div>
    </div>
  );
};

export default HealthLifestyle;
// import { useEffect, useState } from "react";
// import { useApi } from "../../../hooks/useApi";

// const HealthLifestyle = () => {
//   const [res, setRes] = useState([]);
//   const { postData } = useApi();

//   useEffect(() => {
//     handleSubmit();
//   }, []);

//   const handleSubmit = async () => {
//     await postData(
//       "blog-data",
//       { blog_type: "D" },
//       {
//         isTokenRequired: true,
//         onSuccess: (res) => {
//           setRes(res?.data?.data || []);
//           console.log("Blog Data:", res?.data?.data);
//         },
//         onError: (err) => {
//           console.error("Error fetching data", err);
//         },
//       }
//     );
//   };

//   return (
//     <div className="health-section">
//       {res.map((item) => (
//         <div  className="blog-post">
//           {/* Title */}
//           <h3 className="post-title">{item.title}</h3>

//           {/* Description Paragraph */}
//           <p className="post-description">{item.description}</p>

//           {/* Secondary Image */}
//           {item.document_full_url && (
//             <div className="secondary-image">
//               <img
//                 src={item.document_full_ur}
//                 alt="Secondary Blog Visual"
//                 style={{ maxWidth: "100%", borderRadius: "10px" }}
//               />
//             </div>
//           )}

//           {/* Subheading & More Content */}
//           {/* {item.subheading && (
//             <>
//               <h4 className="subheading">{item.subheading}</h4>
//               <p className="sub-text">{item.short_description}</p>
//             </>
//           )} */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HealthLifestyle;
