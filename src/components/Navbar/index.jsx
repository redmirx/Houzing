import React from "react";
import {
  Container,
  Wrapper,
  Content,
  Logo,
  LogoText,
  Link,
  Main,
} from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "./../../utils/navbar";
import { Button } from "./../Generics";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Content onClick={() => navigate("/home")} logo>
            <Logo />
            <LogoText>Houzing</LogoText>
          </Content>
          <Content>
            {navbar.map(({ title, path, id, hidden }) => {
              return (
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Content>
          <Content>
            <Button onClick={() => navigate("/signin")} type={"dark"}>
              Login
            </Button>
          </Content>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
