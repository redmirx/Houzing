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
  Map,
} from "./style";
import noUser from "./../../assets/images/noUser.jpeg";
import { Input, Button } from "./../Generics";
import { Checkbox } from "antd";
import Yandex from "./../Generics/Yandex";
import RecentRents from "./../RecentRents/index";
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

  return (
    <Container>
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
              <Icons>
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
                <Price>{`$${data?.price}/mo`}</Price>
                <Price.Sale>{`$${data?.salePrice}/mo`}</Price.Sale>
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
          {/* <Section>
        <Content flex="column" gap={1.6}>
          <Content.SubTitle>Documents</Content.SubTitle>
        </Content>
      </Section> */}
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
