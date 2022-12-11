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

// url, title, address, bed, bath, garage, size prev props
const HouseCard = ({ data, onClick }) => {
  // console.log(data);

  const {
    attachments,
    description,
    region,
    city,
    country,
    houseDetails: { beds: bed, bath, garage, area, room },
    price,
    salePrice,
    category,
  } = data;
  const url = attachments[0]?.imgPath;
  return (
    <Container onClick={onClick}>
      <Image src={url !== "string" ? url : noimg} />
      <Content>
        <Address>
          <div className="subTitle inline">
            {`${description} ${category?.name || "Category"}` ||
              "New Apartment Nice Wiew"}
          </div>
          <div className="info inline">
            {`${region}, ${city}, ${country} - Room(s) ${room}` ||
              "Quincy St, Brooklyn, NY, USA"}
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
            <div className="info">{area || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details footer>
          <Details.Item footer>
            <div className="info">{`$${price || "2,800"}/mo`}</div>
            <div className="subTitle">{`$${salePrice || "7,500"}/mo`}</div>
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
