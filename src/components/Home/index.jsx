import React from "react";
import { Container } from "./style";
import CarouselSection from "./../Carousel";
import Category from "./../Category";
import Recommended from "./../Recommended";
import WhyChooseUs from "./../Why";

const Home = () => {
  return (
    <Container>
      <CarouselSection />
      <Recommended />
      <WhyChooseUs />
      <Category />
    </Container>
  );
};

export default Home;
