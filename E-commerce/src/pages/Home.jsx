import React from "react";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import Banner from "../components/Home/Banner/Banner";
import WhatWeDo from "../components/Home/Whatwedo/WhatWeDo";
import Testimonials from "../components/Home/Testimonies/Testimonies";
import FAQ from "../components/Home/FAQ/FAQ";
import MainProducts from "../components/Products/Products Featured/MِِِAinProducts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Banner />
      <MainProducts />
      <WhatWeDo />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
