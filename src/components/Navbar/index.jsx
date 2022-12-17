import React from "react";
import {
  Container,
  Wrapper,
  Content,
  Logo,
  LogoText,
  Link,
  Main,
  Menu,
} from "./style";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "./../../utils/navbar";
import { Button } from "./../Generics";
import Filter from "./../Filter";
import Footer from "./../Footer/index";
import { Dropdown } from "antd";

const Navbar = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClick = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/home");
    } else {
      navigate(`/${name}`);
    }
  };
  const menu = () => {
    return (
      <Menu>
        <Menu.Text data-name="my-profile" onClick={onClick}>
          My profile
        </Menu.Text>
        <Menu.Text data-name="my-properties" onClick={onClick}>
          My Properties
        </Menu.Text>
        <Menu.Text data-name="favourites" onClick={onClick}>
          Favourites
        </Menu.Text>
        <Menu.Text data-name="logout" onClick={onClick}>
          Logout
        </Menu.Text>
      </Menu>
    );
  };

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
            {token ? (
              <Dropdown
                dropdownRender={menu}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
                trigger={["click"]}
              >
                <Button type={"dark"}>Profile</Button>
              </Dropdown>
            ) : (
              <Button onClick={() => navigate("/signin")} type={"dark"}>
                Login
              </Button>
            )}
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
