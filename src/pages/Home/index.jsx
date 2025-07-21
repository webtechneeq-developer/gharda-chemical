import React from "react";
import "./Home.css";
// import WaveBackground from "../../components/navbar/Navbar";
import Dashboard from "./dashboard/Dashboard";
import IconSection from "./commonHome/IconSection";
import NewsSection from "./commonHome/NewsSection";
import CategorySlider from "./categorySlider/CategorySlider";
import LatestPosts from "./commonHome/LatestPosts";
import OfficeLocations from "./commonHome/OfficeLocations";
import ArticleList from "../../components/article-List/ArticleList";

// import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <>
      {/* IconSection start */}
      <IconSection />
      {/* NewsSection  start */}
      <NewsSection />

      {/*  Dashboard */}
      <Dashboard />

      {/* Category Slider */}
      {/* <CategorySlider /> */}

      {/* LatestPosts start */}
      <LatestPosts />

      {/* OfficeLocations */}
      <OfficeLocations />
    </>
  );
};

export default Home;
