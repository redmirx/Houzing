import React from "react";
import { Container, Content, Blur, Image } from "./style";
import noimg from "./../../assets/images/no-img-portrait.jpg";

const CategoryCard = ({ data: { name }, image, icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Image src={image || noimg} />
      <Blur />
      <Content>
        {icon}
        <Content.Title>{name.toLowerCase() || "Category Name"}</Content.Title>
      </Content>
    </Container>
  );
};

export default CategoryCard;
