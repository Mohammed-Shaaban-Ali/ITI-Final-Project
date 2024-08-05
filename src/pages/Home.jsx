import React from "react";
import HomeHeroSection from "../components/Home/HomeHeroSection/HomeHeroSection";
import HomeBanner from "../components/Home/HomeBanner/HomeBanner";
import Products from "../components/Products/Products/Products";
import OurServices from "../components/Home/OurServices/OurServices";
import FAQ from "../components/Home/HomeFAQ/FAQ";
import CustomerTestimonials from "../components/Home/CustomerTestimonials/CustomerTestimonials";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeBanner />
      <Products />
      <OurServices />
      <CustomerTestimonials />
      <FAQ />
    </>
  );
};

export default Home;
