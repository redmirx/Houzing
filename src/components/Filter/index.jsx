import React, { useRef, useState, useEffect } from "react";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { Input, Button } from "../Generics";
import { Dropdown } from "antd";
import UseReplace from "./../../hooks/UseReplace";
import useSearch from "./../../hooks/useSearch";
import { useNavigate, useLocation } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const [data, setData] = useState([]);
  const reversedData = [...data].reverse();
  const [categoryName, setCategoryName] = useState("Select Category");

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let [firstIndex] = data.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    firstIndex?.name && setCategoryName(firstIndex?.name);

    !query.get("category_id") && setCategoryName("Select Category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, data]);

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipCodeRef = useRef();

  const roomsRef = useRef();
  // const sizeRef = useRef();
  // const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${UseReplace(name, value)}`);
  };

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${UseReplace("category_id", category_id)}`);
  };

  const onSort = (sort) => {
    navigate(`properties/${UseReplace("sort", sort)}`);
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
            type="number"
            placeholder="Rooms"
          />
          <SelectAnt value={query.get("sort") || "Sort"} onChange={onSort}>
            <SelectAnt.Option value={""}>Sort</SelectAnt.Option>
            <SelectAnt.Option value={"asc"}>ascending</SelectAnt.Option>
            <SelectAnt.Option value={"desc"}>descending</SelectAnt.Option>
          </SelectAnt>
          <SelectAnt
            value={categoryName}
            // defaultValue={categoryName}
            onChange={onChangeCategory}
          >
            <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>;
            {reversedData.map((value) => {
              return (
                value.name !== "string" && (
                  <SelectAnt.Option key={value.id} value={value.id}>
                    {value.name.toLowerCase()}
                  </SelectAnt.Option>
                )
              );
            })}
          </SelectAnt>
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
