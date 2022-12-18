import React from "react";
import { Container } from "./style";
import { Loading } from "../../utils/style";

const MyProperties = () => {
  return (
    localStorage.getItem("token") && (
      <Container>
        <div className="title">Coming soon</div>;
        <Loading />
      </Container>
    )
  );
};

export default MyProperties;
