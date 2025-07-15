import React from "react";
import instagramIcon from "/images/Instagram.svg";
import twitterIcon from "/images/twitterIcon.svg";
import linkedin from "/images/linkedin.svg";
import facebookIcon from "/images/facebook-icon.svg";

const Footer = () => {
  return (
    <>
      {/* Footer with Social Icons */}
      <footer className="footer-bg-info text-center">
        <div className="container d-flex justify-content-center align-items-center">
          {/* <a href="#" className="text-light mx-2">
            <img src={facebookIcon} alt="Facebook" height="30" />
          </a> */}
          <a href=" https://www.instagram.com/gharda.chemicals" target="_blank" className="text-light mx-2">
            <img src={instagramIcon} alt="Instagram" height="30" />
          </a>
          {/* <a href="#" className="text-light mx-2">
            <img src={twitterIcon} alt="Twitter" height="30" />
          </a> */}
          <a href=" https://www.linkedin.com/company/gharda-chemicals-limited/" target="_blank" className="text-light mx-2">
            <img src={linkedin} alt="Linkedin" height="30" />
          </a>
          {/* Add more social media links with image tags */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
