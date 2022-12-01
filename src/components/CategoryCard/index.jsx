import React, { useState } from "react";
import { Container, Content, Blur, Image } from "./style";
import noimg from "./../../assets/images/no-img-portrait.jpg";

const CategoryCard = ({ data: { name }, image, icon, onClick }) => {
  const [blur, setBlur] = useState(true);

  return (
    <Container
      onClick={onClick}
      onMouseEnter={() => setBlur(false)}
      onMouseLeave={() => setBlur(true)}
    >
      <Image src={image || noimg} />
      <Blur blur={blur} />
      <Content>
        {icon}
        <Content.Title>{name.toLowerCase() || "Category Name"}</Content.Title>
      </Content>
    </Container>
  );
};

export default CategoryCard;
