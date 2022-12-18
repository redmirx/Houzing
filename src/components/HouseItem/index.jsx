import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "./../../hooks/useRequest";
import {
  Container,
  Wrapper,
  Section,
  Content,
  Icons,
  Details,
  Price,
  Seller,
  Client,
  UserImg,
  Features,
  Map,
} from "./style";
import noUser from "./../../assets/images/noUser.jpeg";
import { Input, Button } from "./../Generics";
import { Checkbox } from "antd";
import Yandex from "./../Generics/Yandex";
import RecentRents from "./../RecentRents/index";
import ImageGallery from "./../ImageGallery";
import { info, warning } from "./../../hooks/useMessage.jsx";

const HouseItem = () => {
  const [data, setData] = useState();
  const params = useParams();
  const request = useRequest();
  useEffect(() => {
    request({ url: `/houses/id/${params?.id}` }).then((res) => {
      setData(res?.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);

  const favorite = false;
  const save = () => {
    fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${
        params?.id
      }?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (!favorite) res?.success && info("Added to favourites");
        else {
          res?.success && warning("Removed from favourites");
        }
      });
  };

  return (
    <Container>
      <ImageGallery images={data?.attachments} />
      <Wrapper>
        <Seller>
          <Section>
            <Content flex="column" gap={0.8}>
              <Content.Title>{data?.name}</Content.Title>
              <div className="subTitleLight">
                {`${data?.city}, ${data?.region}, ${data?.country}`}
              </div>
            </Content>
            <Content gap={1} align="center">
              <Icons>
                <Icons.Share />
              </Icons>
              <div className="info">Share</div>
              <Icons onClick={save} like="true">
                <Icons.Favorite />
              </Icons>
              <div className="info">Save</div>
            </Content>
          </Section>
          <Section>
            <Details gap={2.4}>
              <Details.Item>
                <Icons.Bed />
                <div className="info">{data?.houseDetails?.beds || 0} Beds</div>
              </Details.Item>
              <Details.Item>
                <Icons.Bath />
                <div className="info">
                  {data?.houseDetails?.bath || 0} Baths
                </div>
              </Details.Item>
              <Details.Item>
                <Icons.Car />
                <div className="info">
                  {data?.houseDetails?.garage || 0} Garage
                </div>
              </Details.Item>
              <Details.Item>
                <Icons.Ruler />
                <div className="info">
                  {data?.houseDetails?.area || 0} Sq Ft
                </div>
              </Details.Item>
              <Details.Item>
                <Icons.Calendar />
                <div className="info">
                  Year Built: {data?.houseDetails?.yearBuilt || 0}
                </div>
              </Details.Item>
            </Details>
            <Details flex="column" gap={0.4}>
              <Details.Item align="center">
                <Price>{`$${String(data?.price).slice(0, 5)}/mo`}</Price>
                <Price.Sale>{`$${String(data?.salePrice).slice(
                  0,
                  5
                )}/mo`}</Price.Sale>
              </Details.Item>
              <div className="info" style={{ textAlign: "end" }}>
                {data?.user?.firstname}
              </div>
            </Details>
          </Section>
          <Section>
            <Content flex="column" gap={1.6}>
              <Content.SubTitle>Description</Content.SubTitle>
              <div className="info">{data?.description}</div>
            </Content>
          </Section>
          <Section flex="column" style={{ paddingTop: "4.8rem" }}>
            <Content flex="column" gap={1.6}>
              <Content.SubTitle>Features</Content.SubTitle>
            </Content>
            <Features>
              <Features.Item>
                <Icons.AirConditioner />
                <div className="info">Air Conditioning</div>
              </Features.Item>
              <Features.Item>
                <Icons.Grass />
                <div className="info">Lawn</div>
              </Features.Item>
              <Features.Item>
                <Icons.Refrigerator />
                <div className="info">Refrigerator</div>
              </Features.Item>
              <Features.Item>
                <Icons.LiquidSoap />
                <div className="info">Washer</div>
              </Features.Item>
              <Features.Item>
                <Icons.Barbecue />
                <div className="info">Barbeque</div>
              </Features.Item>
              <Features.Item>
                <Icons.Laundry />
                <div className="info">Laundry</div>
              </Features.Item>
              <Features.Item>
                <Icons.Sauna />
                <div className="info">Sauna</div>
              </Features.Item>
              <Features.Item>
                <Icons.Wifi />
                <div className="info">WiFi</div>
              </Features.Item>
              <Features.Item>
                <Icons.Dryer />
                <div className="info">Dryer</div>
              </Features.Item>
              <Features.Item>
                <Icons.Microwave />
                <div className="info">Microwave</div>
              </Features.Item>
              <Features.Item>
                <Icons.Swimmer />
                <div className="info">Swimming Pool</div>
              </Features.Item>
              <Features.Item>
                <Icons.Blinds />
                <div className="info">Window Coverings</div>
              </Features.Item>
              <Features.Item>
                <Icons.Dumbbell />
                <div className="info">Gym</div>
              </Features.Item>

              <Features.Item>
                <Icons.OutdoorShower />
                <div className="info">Outdoor Shower</div>
              </Features.Item>

              <Features.Item>
                <Icons.Coaxial />
                <div className="info">TV Cable</div>
              </Features.Item>
              <Features.Item>
                <Icons.Chair />
                <div className="info">Dining room</div>
              </Features.Item>
            </Features>
          </Section>
        </Seller>
        <Client>
          <Content gap={1}>
            <UserImg src={noUser} />
            <Content flex="column" gap={0.4}>
              <div className="subTitle">Darrel Steward</div>
              <div className="subTitleLight">(123)456-7890</div>
            </Content>
          </Content>
          <Content flex="column" gap={2}>
            <Input placeholder="Name" />
            <Input placeholder="Phone" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Message" />
          </Content>
          <Content gap={0.8}>
            <Checkbox />
            <div className="info">
              By submitting this form I agree to Terms of Use
            </div>
          </Content>
          <Button width="%">Send request</Button>
        </Client>
      </Wrapper>
      <Map>
        <Yandex />
      </Map>
      <RecentRents title="Similar listings" />
    </Container>
  );
};

export default HouseItem;
