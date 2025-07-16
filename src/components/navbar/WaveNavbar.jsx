import React from "react";
import "./Navbar.css";

const WaveNavbar = () => {
  return (
    <header className="wave-container relative">
      {/* Top Navbar */}
      <nav className="wave-container-div text-white px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/images/gharda-logo-1.png" // Updated path handling
            alt="Logo"
            className="h-14 w-auto"
          />
        </div>

        {/* Nav Links */}
        <ul className="flex gap-8 text-sm font-medium pb-4">
          <li className="hover:text-blue-100 cursor-pointer text-center leading-tight">
            Companywide
            <br />
            Announcements
          </li>
          <li className="hover:text-blue-100 cursor-pointer text-center leading-tight">
            Sustainability
            <br />
            CSR Initiatives
          </li>
          <li className="hover:text-blue-100 cursor-pointer text-center leading-tight">
            Employee
            <br />
            Connect
          </li>
          <li className="hover:text-blue-100 cursor-pointer text-center leading-tight">
            Content
            <br />
            Bank
          </li>
          <li className="hover:text-blue-100 cursor-pointer text-center leading-tight">
            Forum
          </li>
        </ul>

        {/* Profile Section */}
        <div className="profile-section flex items-center gap-2">
          <img
            src="https://via.placeholder.com/30"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm">Hetal</span>
        </div>
      </nav>
    </header>
  );
};

export default WaveNavbar;
