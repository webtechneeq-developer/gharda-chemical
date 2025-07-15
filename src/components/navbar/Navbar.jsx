import { ChevronDownIcon, Cog6ToothIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    navitem: "Companywide Announcements",
    path: "/categories/companywide_annoucements",
  },
  {
    navitem: "Sustainability CSR Initiatives",
    path: "/categories/sustainability_csr_initiatives",
  },
  {
    navitem: "Employee Connect",
    path: "/categories/all",
  },
  {
    navitem: "All Articles",
    path: "/articles",
  },
  {
    navitem: "Content Bank",
    path: "/content-bank",
  },
  {
    navitem: "Forum",
    path: "/forum",
  },
];

const WaveBackground = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Auto update active link based on current URL
  useEffect(() => {
    const currentPath = location.pathname;

    // Find the matching nav item based on the current path
    const matchingNavItem = navItems.find((item) => {
      if (item.path === currentPath) {
        return true;
      }
      // For category paths, also check if the path starts with the item path
      if (
        item.path.startsWith("/categories") &&
        currentPath.startsWith(item.path)
      ) {
        return true;
      }
      return false;
    });

    if (matchingNavItem) {
      setActiveLink(matchingNavItem.navitem);
    } else {
      setActiveLink("");
    }
  }, [location]);

  // Helper function to check if a nav item is active
  const isActiveNavItem = (navItem) => {
    return activeLink === navItem.navitem;
  };

  return (
    <div className="wave-container">
      {/* Navbar */}
      <div className="custom-navbar mb-0 pb-0">
        <div className="logo-box">
          <img
            src="/images/gharda-logo-1.png"
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <div className="slogan-text">
          <span>
            <strong>#MyGharda.</strong>{" "}
            <span className="light-text">Belong. Contribute. Thrive.</span>
          </span>
        </div>

        {/* Nav Links */}
        {/* <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((category) => (
            <li
              key={category.navitem}
              className={isActiveNavItem(category) ? "active" : ""}
              onClick={() => navigate(category.path)}
            >
              {category.navitem === "Forum" ? category.navitem : (
                <>
                  {category.navitem.split(" ").slice(0, -1).join(" ")}
                  <br />
                  {category.navitem.split(" ").slice(-1)}
                </>
              )}
            </li>
          ))}
        </ul> */}

        {/* User Section */}
        <div className="user">
          {/* <img src="/images/user.svg" alt="User" className="user-profile" />
          <div
            className="user-info"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Ramesh</span>
            <ChevronDownIcon className="arrow-icon" />
          </div> */}
          <a
            href="https://gharda-admin.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="extra-square"
          >
            <Cog6ToothIcon className="settings-icon" />
          </a>

          {dropdownOpen && (
            <ul className="user-dropdown">
              <li>Profile</li>
              <li>Change Password</li>
              <li>Logout</li>
            </ul>
          )}
        </div>

        {/* Wave SVG */}
        {/* <svg
          width="100%"
          height="150px"
          viewBox="0 0 1920 230"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          <path
            d="M0 -229H1920V202.311C1920 202.311 1519.2 140.01 960 202.311C400.8 264.611 0 202.311 0 202.311V-229Z"
            fill="url(#paint0_linear_6001_2963)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6001_2963"
              x1="45.6"
              y1="-207.434"
              x2="1308.02"
              y2="899.961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#034EA2" />
              <stop offset="1" stopColor="#034EA2" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </div>
  );
};

export default WaveBackground;
