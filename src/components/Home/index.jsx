import React from "react";
import { Container } from "./style";
import CarouselSection from "./../Carousel/index";
import Category from "./../Category";

const Home = () => {
  return (
    <Container>
      <CarouselSection />
      <Category />
    </Container>
  );
};

export default Home;
