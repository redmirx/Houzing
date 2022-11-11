import React from "react";
import { Container, Wrapper, Content, Logo, LogoText, Link } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "./../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Content onClick={() => navigate("/home")} logo>
          <Logo />
          <LogoText>Houzing</LogoText>
        </Content>
        <Content>
          {navbar.map(({ title, path }, index) => {
            // console.log(id);
            return (
              <Link key={index} to={path}>
                {title}
              </Link>
            );
          })}
        </Content>
        <Content>
          <button>Login</button>
        </Content>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
