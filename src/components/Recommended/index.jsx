import React, { useState, useEffect } from "react";
import Slider from "react-slick";
// import { useNavigate } from "react-router-dom";
import HouseCard from "./../HouseCard/index";
import { Container, Content } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  dots: true,
  arrows: true,
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
  const [data, setData] = useState([]);
  // const navigate = useNavigate();
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
      <Slider {...settings}>
        {data.map(
          (value) =>
            // !value?.description.startsWith("str") &&
            !value?.description.startsWith("ew") && (
              <HouseCard
                // onClick={() => navigate(`/properties?category_id=${value?.id}`)}
                key={value.id}
                data={value}
              />
            )
        )}
      </Slider>
    </Container>
  );
};

export default Recommended;
