import React from "react";
import { Container } from "./style";
import { Input } from "../Generics";

const Home = () => {
  return (
    <Container>
      <Input placeholder={"test"} />
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
