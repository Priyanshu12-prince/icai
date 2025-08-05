// pages/Home.jsx
import React from "react";
import LandingPage from "../components/LandingPage";
import Leadership from "../components/Leadership";
import Calculator from "../components/Calculator";
import KnowledgeHub from "../components/KnowledgeHub";
import GallerySection from "../components/GallerySection";
import LearnAndPlay from "../components/LearnAndPlay";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Leadership />
      <Calculator />
      <KnowledgeHub />
      <GallerySection />
      <LearnAndPlay />
      <FAQ />
    </>
  );
};

export default Home;
