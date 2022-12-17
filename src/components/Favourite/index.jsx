import React, { useEffect, useState } from "react";
import { Cards, Container, Title } from "./style";
import HouseCard from "./../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

const Favourite = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  // console.log(url);
  useEffect(() => {
    fetch(`${url}/houses/getAll/favouriteList`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res?.data || []);
      });
  }, [search]);

  // search variable is not needed

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <Title>
        <div className="title">Favourite</div>
        <div className="subTitleLight">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Title>
      <Cards>
        {data.length ? (
          data.map((value) => (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            ></HouseCard>
          ))
        ) : (
          <div className="title">No data found</div>
        )}
      </Cards>
    </Container>
  );
};

export default Favourite;
