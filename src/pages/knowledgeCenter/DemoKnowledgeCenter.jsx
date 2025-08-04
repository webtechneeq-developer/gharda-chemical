import React from "react";
import HeroBanner from "./knowledgeCenterComponents/heroBanner";
import LatestPosts from "../Home/commonHome/LatestPosts";
import DownloadButton from "./knowledgeCenterComponents/downloadButton";
import VideoPosts from "./knowledgeCenterComponents/VideoPost";
import BlogPosts from "./knowledgeCenterComponents/Blogpost";

// Placeholder component for Knowledge Center
// This component can be expanded with actual content later

const KnowledgeCenter = () => {
  return (
    <>
      {/* <HeroBanner /> */}
      <VideoPosts />

      <BlogPosts />

      <DownloadButton />
    </>
  );
};
export default KnowledgeCenter;
