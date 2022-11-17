import React from "react";
import {
  Container,
  Content,
  Details,
  Image,
  Icons,
  Address,
  Footer,
} from "./style";
import noimg from "./../../assets/images/no-img.jpg";

const HouseCard = ({ url, title, address, bed, bath, garage, size }) => {
  return (
    <Container>
      <Image src={url || noimg} />
      <Content>
        <Address>
          <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
          <div className="info">
            {address || "Quincy St, Brooklyn, NY, USA"}
          </div>
        </Address>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">{bed || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">{garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{size || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details footer>
          <Details.Item footer>
            <div className="info">$2,800/mo</div>
            <div className="subTitle">$7,500/mo</div>
          </Details.Item>
          <Details.Item row>
            <Icons.Resize />
            <Icons.Heart />
          </Details.Item>
        </Details>
      </Footer>
    </Container>
  );
};

export default HouseCard;
