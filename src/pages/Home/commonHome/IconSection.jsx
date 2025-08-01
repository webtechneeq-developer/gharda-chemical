import React from "react";
// import './IconSection.css';

const items = [
  {
    title: "Gharda Unplugged",
    icon: "/images/Companywide.svg",
    bgColor: "#ffe5e5",
    link: "https://animetrixlabs.com/knowledgecentre/",
  },
  {
    title: "Forums",
    icon: "/images/Forums.png",
    bgColor: "#e5f0ff",
    link: "https://animetrixlabs.com/knowledgecentre/forums/",
  },
  {
    title: "Employee Connect",
    icon: "/images/employee-Connect.png",
    bgColor: "#fff3c4",
    link: "https://animetrixlabs.com/knowledgecentre/quiz/",
  },
  {
    title: "Company Annoucement",
    icon: "/images/announcement.webp",
    bgColor: "#d9f5db",
    link: "https://animetrixlabs.com/knowledgecentre/category/company-annoucement/",
  },
  {
    title: "Content Bank",
    icon: "/images/content-bank.png",
    bgColor: "#e5f0ff",
    link: "/content-bank",
  },

  // 000
  {
    title: "Gharda cares ",
    icon: "/images/care.png",
    bgColor: "#ffe5e5",
    link: "#",
  },
  {
    title: "Knowledge Centre",
    icon: "/images/Knowledge-centre.png",
    bgColor: "#fff3c4",
    link: "/knowledge-center",
  },
];

const IconSection = () => {
  return (
    <div className="container">
      <div className="icon-section">
        {items.map((item, index) => (
          <div className="icon-wrapper" key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              <div
                className="icon-circle mx-auto mb-2"
                style={{ backgroundColor: item.bgColor }}
              >
                <img src={item.icon} alt={item.title} className="icon-img" />
              </div>
              <p className="icon-title text-center">{item.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSection;
