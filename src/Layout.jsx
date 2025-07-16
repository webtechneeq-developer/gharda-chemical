import { Outlet } from "react-router-dom";
import WaveBackground from "./components/navbar/Navbar";
import React from "react";
import Footer from "./components/footer/Footer";
import WaveNavbar from "./components/navbar/WaveNavbar";

const Layout = () => {
  return (
    <>
      <WaveNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
