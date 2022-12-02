import React from "react";
import { Container, Description, Image, Author } from "./style";
import defaultImage from "../../assets/images/Marvin McKinney.png";

const TestimonialsCard = ({ image, name }) => {
  return (
    <Container>
      <Description>
        “ I believe in lifelong learning and Skola is a great place to learn
        from experts. I've learned a lot and recommend it to all my friends “
        <Image src={image || defaultImage} />
      </Description>
      <Author>
        <Author.Name>{name || "John Smith"}</Author.Name>
        <Author.Job>Designer </Author.Job>
      </Author>
    </Container>
  );
};

export default TestimonialsCard;
