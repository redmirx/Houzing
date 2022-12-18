import React, { useContext } from "react";
import { Cards, Container, Title } from "./style";
import HouseCard from "./../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { PropertiesContext } from "../../context/properties";
const { REACT_APP_BASE_URL: url } = process.env;

const Favourite = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(PropertiesContext);
  const { refetch, data } = useQuery(
    [search],
    async () => {
      return await fetch(`${url}/houses/getAll/favouriteList`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        // console.log(res)
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

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
        {data?.data.length ? (
          data?.data.map((value) => (
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
