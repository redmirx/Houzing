import React from "react";
import { Container, Content, Properties, Item, Icons } from "./style";

const WhyChooseUs = () => {
  return (
    <Container>
      <Content margin>
        <div className="title">Why Choose Us?</div>
        <div className="subTitleLight">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Properties>
        <Item>
          <Icons.Discord />
          <Content>
            <Content.Title>Trusted By Thousands</Content.Title>
            <div className="subTitleLight">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
        </Item>
        <Item>
          <Icons.House />
          <Content>
            <Content.Title>Wide Renge Of Properties</Content.Title>
            <div className="subTitleLight">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
        </Item>
        <Item>
          <Icons.Calculator />
          <Content>
            <Content.Title>Financing Made Easy</Content.Title>
            <div className="subTitleLight">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
        </Item>
        <Item>
          <Icons.Map />
          <Content>
            <Content.Title>See Neighborhoods</Content.Title>
            <div className="subTitleLight">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </div>
          </Content>
        </Item>
      </Properties>
    </Container>
  );
};

export default WhyChooseUs;
