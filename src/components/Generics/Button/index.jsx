import React from "react";
import { Container } from "./style";

const Button = ({ children, type, height, width, fontSize, onClick }) => {
  return (
    <Container
      type={type}
      height={height}
      width={width}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
