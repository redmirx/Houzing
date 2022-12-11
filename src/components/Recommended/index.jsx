import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import HouseCard from "./../HouseCard/index";
import { Container, Content, Arrow } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  dots: true,
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

const Recommended = () => {
  const slider = useRef(); // demo
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);
  // console.log(data, "data");
  return (
    <Container>
      <Content>
        <div className="title">Recommended</div>
        <div className="subTitleLight">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings} ref={slider}>
        {data.map((value) => (
          <HouseCard
            onClick={() => navigate(`/properties/${value.id}`)}
            key={value.id}
            data={value}
          />
        ))}
      </Slider>
      <Arrow onClick={() => onMove("left")} left="true" />
      <Arrow onClick={() => onMove("right")} right="true" />
    </Container>
  );
};

export default Recommended;
