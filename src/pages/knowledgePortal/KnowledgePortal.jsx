import React from "react";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import HobbyMasonry from "./hobbyMesonry/HobbyMasonry";
import GeneralAchievement from "./generalAchievement/GeneralAchievement";
import PostBlogSection from "./PostBlogSection/PostBlogSection";

const KnowledgePortal = () => {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />
      {/* Mesonry Grid Section */}
      <HobbyMasonry />

      <PostBlogSection />

      {/* General Achievement */}
      <GeneralAchievement />
    </>
  );
};

export default KnowledgePortal;
