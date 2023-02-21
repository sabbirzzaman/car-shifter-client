import React from "react";
import Brand from "../Brand/Brand";
import Hero from "../Hero/Hero";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";
import Sale from "../Sale/Sale";
import Summary from "../Summary/Summary";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Brand></Brand>
      <Parts></Parts>
      <Summary></Summary>
      <Sale></Sale>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
