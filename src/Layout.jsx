import { Outlet } from "react-router-dom";
import WaveBackground from "./components/navbar/Navbar";
import React from "react";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <>
      <WaveBackground />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
