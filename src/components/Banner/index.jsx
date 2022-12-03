import React, { useState } from "react";
import { Container, Image, Blur, Content } from "./style";
import house from "./../../assets/images/house2.png";
import Button from "./../Generics/Button";

const Banner = () => {
  const [zoom, setZoom] = useState(false);
  return (
    <Container
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
    >
      <Image src={house} zoom={zoom} />
      <Blur />
      <Content>
        <div className="title">
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </div>
        <Button>Read more</Button>
      </Content>
    </Container>
  );
};
export default Banner;
