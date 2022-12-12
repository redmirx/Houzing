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
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "./../../utils/navbar";
import { Button } from "./../Generics";
import Filter from "./../Filter";
import Footer from "./../Footer/index";

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
      {useLocation().pathname !== "/signin" && <Filter />}
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
