import { Carousel } from "antd";
import React, { useRef } from "react";
import { Container, Arrow, Image, Blur, Content } from "./style";
import house1 from "./../../assets/images/house1.png";
import house2 from "./../../assets/images/house2.png";
import house3 from "./../../assets/images/house3.png";
import house4 from "./../../assets/images/house4.jpg";
import house5 from "./../../assets/images/house5.jpg";

// const contentStyle = {
//   height: "57.1rem",
//   color: "#fff",
//   lineHeight: "57.1rem",
//   textAlign: "center",
//   background: "#364d79",
// };

const CarouselSection = () => {
  const slider = useRef();
  const onMove = (event) => {
    // if (event === "left") console.log("left");
    // if (event === "right") console.log("right");
    switch (event) {
      case "left":
        return slider.current.prev();
      case "right":
        return slider.current.next();
      default:
        return null;
    }
  };
  return (
    <Container>
      <Carousel ref={slider} autoplay>
        <Image src={house1} />
        <Image src={house2} />
        <Image src={house3} />
        <Image src={house4} />
        <Image src={house5} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Address>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Address>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow onClick={() => onMove("left")} left="true" />
      <Arrow onClick={() => onMove("right")} right="true" />
    </Container>
  );
};
export default CarouselSection;
