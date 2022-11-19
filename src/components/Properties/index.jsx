import React, { useEffect, useState } from "react";
import { Cards, Container, Title } from "./style";
import HouseCard from "./../HouseCard";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  // console.log(url);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, []);

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
          <HouseCard key={value.id} data={value}></HouseCard>
        ))}
      </Cards>
    </Container>
  );
};

export default Properties;
