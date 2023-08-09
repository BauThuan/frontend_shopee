import Header from "./Header";
import SliderImage from "./Slider";
import Category from "./Category";
import Footer from "./Footer";
import SuggestionList from "./SuggestionList";
import HomeBackground from "./HomeBackground";
import { connect, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Home() {
  return (
    <>
      <HomeBackground />
      <Header />
      <SliderImage />
      <Category />
      <SuggestionList />
      <Footer />
    </>
  );
}
export default Home;
