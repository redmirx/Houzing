import React from "react";
import { Container } from "./style";
import CarouselSection from "./../Carousel";
import Category from "./../Category";
import Recommended from "./../Recommended";
import WhyChooseUs from "./../Why";
import Banner from "./../Banner/index";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <Container>
      <CarouselSection />
      <Recommended />
      <WhyChooseUs />
      <Category />
      <Banner />
      <Testimonials />
    </Container>
  );
};

export default Home;
