import React, { useState, useEffect } from "react";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { CategoryImages, CategoryIcons } from "./../../mock/categoryData";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3.1, //3.25 more better "personally"
  slidesToScroll: 1,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 1000,
  easing: "linear",
  pauseOnHover: false,
  // cssEase: "linear",
};

const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, []);
  const newData = [...data].reverse();
  return (
    <Container>
      <Content>
        <div className="title">Category</div>
        <div className="subTitle">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {newData.map(
          (value, index) =>
            value.name !== "string" && (
              <CategoryCard
                onClick={() => navigate(`/properties?category=${value?.name}`)}
                key={value.id}
                data={value}
                image={CategoryImages.at(index)}
                icon={CategoryIcons.at(index)}
              />
            )
        )}
      </Slider>
    </Container>
  );
};

export default Category;
