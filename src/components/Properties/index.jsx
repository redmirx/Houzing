import React, { useEffect, useState } from "react";
import { Cards, Container, Title } from "./style";
import HouseCard from "./../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  // console.log(url);
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data || []));
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <Title>
        <div className="title">Properties</div>
        <div className="subTitle">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Title>
      <Cards>
        {data.map((value) => (
          <HouseCard
            onClick={() => onSelect(value.id)}
            key={value.id}
            data={value}
          ></HouseCard>
        ))}
      </Cards>
    </Container>
  );
};

export default Properties;
