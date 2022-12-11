import React, { useRef } from "react";
import TestimonialsCard from "../TestimonialsCard";
import Slider from "react-slick";
import { Container, Content, Wrapper, Arrow } from "./style";
import {
  TestimonialsImages,
  TestimonialsNames,
} from "./../../mock/testimonialsData";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 2.99, //3.25 more better "personally"
  slidesToScroll: 1,
  // autoplay: true,
  speed: 500,
  autoplaySpeed: 500,
  easing: "linear",
  pauseOnHover: false,
  // cssEase: "linear",
};

const Testimonials = () => {
  const slider = useRef();

  const onMove = (event) => {
    switch (event) {
      case "left":
        return slider.current.slickPrev();
      case "right":
        return slider.current.slickNext();
      default:
        return null;
    }
  };

  return (
    <Container>
      <Content margin>
        <div className="title">Testimonials</div>
        <div className="subTitleLight">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Wrapper>
        <Slider {...settings} ref={slider}>
          {TestimonialsNames.map(
            (value, index) => (
              <TestimonialsCard
                key={index}
                image={TestimonialsImages.at(index)}
                name={TestimonialsNames.at(index)}
              />
            )
            // console.log(value)
          )}
        </Slider>
        <Arrow onClick={() => onMove("left")} left="true" />
        <Arrow onClick={() => onMove("right")} right="true" />
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
