import React from "react";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generics";
import { Dropdown } from "antd";

const Filter = () => {
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input placeholder="Country" />
        <Input placeholder="Region" />
        <Input placeholder="City" />
        <Input placeholder="Zip code" />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input placeholder="Rooms" />
        <Input placeholder="Size" />
        <Input placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input placeholder="Min price" />
        <Input placeholder="Max price" />
      </Section>
      <h1 className="subTitle">Footer</h1>
      <Section></Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        icon={<Icons.Houses />}
      />
      <Dropdown
        overlay={menu}
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
