import React, { useRef } from "react";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generics";
import { Dropdown } from "antd";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const menu = () => {
    return (
      <MenuWrapper>
        <h1 className="subTitle">Address</h1>
        <Section>
          <Input ref={countryRef} placeholder="Country" />
          <Input ref={regionRef} placeholder="Region" />
          <Input ref={cityRef} placeholder="City" />
          <Input ref={zipCodeRef} placeholder="Zip code" />
        </Section>
        <h1 className="subTitle">Apartment info</h1>
        <Section>
          <Input ref={roomsRef} placeholder="Rooms" />
          <Input ref={sizeRef} placeholder="Size" />
          <Input ref={sortRef} placeholder="Sort" />
        </Section>
        <h1 className="subTitle">Price</h1>
        <Section>
          <Input ref={minPriceRef} placeholder="Min price" />
          <Input ref={maxPriceRef} placeholder="Max price" />
        </Section>

        <h1 className="subTitle">Footer</h1>
        <Section>
          <Button type={"light"}>Cancel</Button>
          <Button type={"primary"}>Submit</Button>
        </Section>
      </MenuWrapper>
    );
  };
  return (
    <Container>
      <Input
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        icon={<Icons.Houses />}
      />
      <Dropdown
        // menu={menu}
        dropdownRender={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type={"light"} width={14}>
            <Icons.Filter /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button type={"primary"} width={18}>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
