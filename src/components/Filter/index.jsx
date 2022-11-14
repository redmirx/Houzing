import React from "react";
import { Container } from "./style";
import { Input, Button } from "../Generics";
import { Icons } from "./style";

const Filter = () => {
  return (
    <Container>
      <Input
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        icon={<Icons.Houses />}
      />
      <Button type={"light"} width={14}>
        <Icons.Filter /> Advanced
      </Button>
      <Button type={"primary"} width={18}>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
