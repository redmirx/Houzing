import React, { useRef } from "react";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Input, Button } from "../Generics";
import { Dropdown } from "antd";
import UseReplace from "./../../hooks/UseReplace";
import useSearch from "./../../hooks/useSearch";
import { useNavigate, useLocation } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${UseReplace(name, value)}`);
  };
  const menu = () => {
    return (
      <MenuWrapper>
        <h1 className="subTitle">Address</h1>
        <Section>
          <Input
            defaultValue={query.get("country")}
            onChange={onChange}
            name="country"
            ref={countryRef}
            placeholder="Country"
          />
          <Input
            defaultValue={query.get("region")}
            onChange={onChange}
            name="region"
            ref={regionRef}
            placeholder="Region"
          />
          <Input
            defaultValue={query.get("city")}
            onChange={onChange}
            name="city"
            ref={cityRef}
            placeholder="City"
          />
          <Input
            defaultValue={query.get("zip_code")}
            onChange={onChange}
            name="zip_code"
            ref={zipCodeRef}
            placeholder="Zip code"
          />
        </Section>
        <h1 className="subTitle">Apartment info</h1>
        <Section>
          <Input
            defaultValue={query.get("room")}
            onChange={onChange}
            ref={roomsRef}
            name="room"
            placeholder="Rooms"
          />
          <Input
            defaultValue={query.get("size")}
            onChange={onChange}
            ref={sizeRef}
            name="size"
            placeholder="Size"
          />
          <Input
            defaultValue={query.get("sort")}
            onChange={onChange}
            ref={sortRef}
            name="sort"
            placeholder="Sort"
          />
        </Section>
        <h1 className="subTitle">Price</h1>
        <Section>
          <Input
            type="number"
            defaultValue={query.get("min_price")}
            onChange={onChange}
            ref={minPriceRef}
            name="min_price"
            placeholder="Min price"
          />
          <Input
            type="number"
            defaultValue={query.get("max_price")}
            onChange={onChange}
            ref={maxPriceRef}
            name="max_price"
            placeholder="Max price"
          />
        </Section>

        {/* <h1 className="subTitle">Footer</h1>
        <Section>
          <Button type={"light"}>Cancel</Button>
          <Button type={"primary"}>Submit</Button>
        </Section> */}
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
        trigger={["click"]}
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
